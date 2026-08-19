import { NextResponse } from 'next/server';
import { findOrCreateGoogleUser } from '@/services/authService';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');
  const stateRaw = searchParams.get('state');

  let state = {};
  if (stateRaw) {
    try {
      state = JSON.parse(Buffer.from(stateRaw, 'base64').toString('utf-8'));
    } catch (e) {
      console.error('State parse error:', e);
    }
  }

  if (!code) {
    return NextResponse.redirect(new URL('/login?error=no_code', request.url));
  }

  try {
    // 1. Exchange code dengan access token Google
    const tokenRes = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        code,
        client_id: process.env.GOOGLE_CLIENT_ID,
        client_secret: process.env.GOOGLE_CLIENT_SECRET,
        redirect_uri: process.env.GOOGLE_REDIRECT_URI,
        grant_type: 'authorization_code',
      }),
    });

    const tokens = await tokenRes.json();
    if (tokens.error) throw new Error(tokens.error);

    // 2. Ambil Profil User dari Google
    const userRes = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
      headers: { Authorization: `Bearer ${tokens.access_token}` },
    });
    const profile = await userRes.json();

    // 3. Find or Auto-Create User di Database PostgreSQL
    const user = await findOrCreateGoogleUser(profile);

    // Status check
    if (user.is_active !== 't') {
      return NextResponse.redirect(new URL('/login?error=inactive_account', request.url));
    }

    // 4. Set Session Cookie
    const response = NextResponse.redirect(
      state.platform === 'app' 
        ? `konksimitra://auth?user_id=${user.id}&redirect=/dashboard` 
        : new URL('/dashboard', request.url)
    );

    response.cookies.set('user_session', JSON.stringify({
      id: user.id,
      name: user.name,
      email: user.email,
      username: user.username,
    }), {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7, // 7 Hari
      path: '/',
    });

    return response;

  } catch (error) {
    console.error('Google Auth Error:', error);
    return NextResponse.redirect(new URL('/login?error=auth_failed', request.url));
  }
}