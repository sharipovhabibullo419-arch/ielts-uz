# IELTS.uz

AI-powered IELTS English tutor for Uzbek-speaking learners.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Enable real AI replies

Create `.env.local` (never commit it):

```env
OPENAI_API_KEY=your_key_here
OPENAI_MODEL=gpt-4o-mini
```

Without the key, the chat safely runs in demo mode. The key is only used server-side in `app/api/chat/route.ts`.

## Deploy

Import this repository into Vercel, add `OPENAI_API_KEY` under Project Settings → Environment Variables, and deploy. Then connect the `ielts.uz` domain in Vercel and add the DNS records shown there at your domain registrar.
