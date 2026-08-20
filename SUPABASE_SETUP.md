# Supabase setup

This project uses Supabase Auth to restrict the supplier directory to people you authorize. There is no public registration or join-form database table yet.

## 1. Create the Supabase project

Create a project at [Supabase](https://supabase.com/dashboard), then open its **Connect** dialog. Copy the Project URL and Publishable key into a local `.env.local` file based on `.env.example`.

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your-supabase-publishable-key
```

Never use or expose a Supabase `service_role` key in this application.

## 2. Restrict access to users you create

In **Authentication > Providers > Email**, disable new user sign-ups. Then use **Authentication > Users** to create each member account with a password and confirmed email address. Only users you create there can sign in and access protected routes.

## 3. Configure URLs

In **Authentication > URL Configuration**, set the Site URL to the production domain. Add both the production URL and `http://localhost:3000` to Redirect URLs before enabling invitation or password-recovery emails in a future update.

## 4. Deploy

Add the same two environment variables to the deployment provider. The site must run as a Next.js server; static export is intentionally disabled because authentication requires server-side session checks.
