const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request) {
  let email;
  try {
    ({ email } = await request.json());
  } catch {
    return Response.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  if (typeof email !== 'string' || !EMAIL_PATTERN.test(email.trim())) {
    return Response.json({ error: 'Enter a valid email address.' }, { status: 400 });
  }

  // TODO: send the address to the mailing-list provider. Until then nothing is stored.
  return Response.json({ ok: true });
}
