# Contact email setup

The contact page sends enquiries through the server-side `POST /api/contact` route. The browser never receives or uses the Resend API key, and visitor messages are not stored in the application database.

## Required services

1. Create a [Resend](https://resend.com) account and generate a server-side API key.
2. Add and verify `yusufaiman.me` in Resend.
3. Add the exact SPF, DKIM, and any other DNS records shown by Resend at your DNS provider. Do not substitute values from another domain.
4. Create an Upstash Redis database and copy its REST URL and token for persistent contact rate limiting.

## Environment variables

Copy `.env.example` to `.env.local` for local development and fill in the real values:

```env
RESEND_API_KEY=re_...
CONTACT_EMAIL_TO=myusufaiman05@gmail.com
CONTACT_EMAIL_FROM=Yusuf Aiman Portfolio <contact@yusufaiman.me>
CONTACT_SEND_CONFIRMATION=false
UPSTASH_REDIS_REST_URL=https://...
UPSTASH_REDIS_REST_TOKEN=...
```

The `CONTACT_EMAIL_FROM` domain must be verified in Resend. Set `CONTACT_SEND_CONFIRMATION=true` only after that sender has been verified. The optional acknowledgement failure does not fail the primary enquiry.

## Vercel deployment

Add the same variables in the Vercel project settings for Preview and Production as appropriate, then redeploy. Do not commit `.env.local` or any real credentials. After deployment, submit a test enquiry and confirm the Resend event is accepted and the recipient inbox receives it.

## Delivery status

The API returns success only when Resend accepts the send request. Accepted is not the same as delivered: use Resend logs to inspect delivered, bounced, or failed events. If the required environment variables are absent in production, the route fails closed with a temporary-service response instead of pretending the message was sent.

## Local checks

Without real credentials, typecheck, lint, build, validation, honeypot, request-size, and route-shape checks can be run locally, but live email delivery remains unverified.
