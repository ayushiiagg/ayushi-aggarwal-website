This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Netlify

1. Push this repo to GitHub: [ayushi-aggarwal-website](https://github.com/ayushiiagg/ayushi-aggarwal-website)
2. Go to [Netlify](https://app.netlify.com) → **Add new site** → **Import an existing project**
3. Connect GitHub and select the repository
4. Build settings (auto-detected from `netlify.toml`):
   - **Base directory:** `ayushi-portfolio`
   - **Build command:** `npm run build`
   - **Publish directory:** `.next` (handled by `@netlify/plugin-nextjs`)
5. Add environment variables under **Site settings → Environment variables**:
   - `GOOGLE_SHEETS_WEBHOOK_URL` — Apps Script webhook for Ayushi chatbot leads
   - `OPENAI_API_KEY` — optional, for full AI chat responses
   - `NEXT_PUBLIC_SITE_URL` — optional, e.g. `https://ayushiaggarwal.netlify.app`
6. Deploy. Your site will be live at `https://<site-name>.netlify.app`

You can set a custom domain in Netlify → **Domain management**.
