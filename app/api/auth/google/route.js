import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const platform = searchParams.get('platform') || 'website';

  const state = Buffer.from(JSON.stringify({ platform })).toString('base64');

  const rootUrl = 'https://accounts.google.com/o/oauth2/v2/auth';
  const options = {
    redirect_uri: process.env.GOOGLE_REDIRECT_URI,
    client_id: process.env.GOOGLE_CLIENT_ID,
    access_type: 'offline',
    response_type: 'code',
    prompt: 'consent',
    scope: [
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email',
    ].join(' '),
    state: state,
  };

  const qs = new URLSearchParams(options).toString();
  return NextResponse.redirect(`${rootUrl}?${qs}`);
}