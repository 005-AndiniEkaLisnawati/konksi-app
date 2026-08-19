import { query } from '@/lib/db';

// Helper membuat username unik dari email atau nama
async function generateUniqueUsername(email, name) {
  let baseUsername = email.split('@')[0].toLowerCase().replace(/[^a-z0-9_]/g, '');
  if (!baseUsername) {
    baseUsername = name.toLowerCase().replace(/[^a-z0-9_]/g, '');
  }

  let username = baseUsername;
  let isUnique = false;
  let counter = 1;

  while (!isUnique) {
    const { rows } = await query(
      'SELECT id FROM auth.affiliators WHERE username = $1 LIMIT 1',
      [username]
    );

    if (rows.length === 0) {
      isUnique = true;
    } else {
      username = `${baseUsername}${counter}`;
      counter++;
    }
  }

  return username;
}

export async function findOrCreateGoogleUser(profile) {
  const { email, name, picture } = profile;

  // 1. Cek ketersediaan user berdasarkan email
  const { rows } = await query(
    'SELECT * FROM auth.affiliators WHERE email = $1 LIMIT 1',
    [email]
  );

  let user = rows[0];

  // 2. Jika user belum terdaftar -> Auto Register
  if (!user) {
    const generatedUsername = await generateUniqueUsername(email, name);

    const insertSql = `
      INSERT INTO auth.affiliators (
        name, username, email, photo_filename, 
        is_active, is_email_verified, created_at, last_login_at
      )
      VALUES ($1, $2, $3, $4, 't', 't', NOW(), NOW())
      RETURNING *
    `;

    const newResult = await query(insertSql, [
      name,
      generatedUsername,
      email,
      picture || null
    ]);

    user = newResult.rows[0];
  } else {
    // 3. Jika user lama -> Update last_login_at
    await query(
      'UPDATE auth.affiliators SET last_login_at = NOW() WHERE id = $1',
      [user.id]
    );
  }

  return user;
}