# Cloudflare Contact Form

This site keeps Next.js as a static export and uses a Cloudflare Pages Function at
`/api/contact` for contact form submissions.

## Cloudflare setup

1. Enable Email Sending for the sender domain.
   - Use `alexdesroches.com` if that domain is in Cloudflare.
   - If the onboarded sending domain is `alexandredesroches.com`, use an address on
     that domain instead, for example `contact@alexandredesroches.com`.
2. Create a Cloudflare API token with permission to send email.
3. In the Pages project, add these Function environment variables/secrets:
   - `CLOUDFLARE_ACCOUNT_ID`
   - `CLOUDFLARE_EMAIL_API_TOKEN`
   - `CONTACT_EMAIL_FROM`
4. Optional: add `CONTACT_EMAIL_TO`.
   - Defaults to the public email already used by the site.

The frontend posts JSON to `/api/contact`. The Function validates the fields,
ignores honeypot submissions, and sends a plain-text email with the visitor's
address in the `Reply-To` header.

## Troubleshooting

- If the browser receives `{"ok":true}` but no email is sent, inspect the request
  payload. A non-empty `extraField` value means the hidden honeypot was filled,
  so the Function intentionally skipped the email.
- If Cloudflare Email Sending rejects the request, the Pages Function logs should
  include the Cloudflare response status and body.
- In Cloudflare, the API token's `last_used_on` field should update after a real
  send attempt. If it stays empty, the request did not reach the Email Sending
  API.

## References

- Cloudflare Pages Functions: https://developers.cloudflare.com/pages/functions/
- Cloudflare Pages Function routing: https://developers.cloudflare.com/pages/functions/routing/
- Cloudflare Email Sending setup: https://developers.cloudflare.com/email-service/get-started/send-emails/
- Cloudflare Email Sending REST API: https://developers.cloudflare.com/email-service/api/send-emails/rest-api/
