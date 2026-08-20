# Google Sheets join-form setup

The join form writes to Google Sheets through a Google Apps Script web app. No Supabase database table or SQL is needed.

1. Create a Google Sheet for applications.
2. Open **Extensions > Apps Script**, replace the starter code with [`google-apps-script/join-form-handler.gs`](google-apps-script/join-form-handler.gs), and replace `WEBHOOK_TOKEN` with a long random secret.
3. Click **Deploy > New deployment**, select **Web app**, set **Execute as** to yourself, and set access to **Anyone**. Deploy and copy the Web app URL.
4. Add these values to `.env.local`:

```env
GOOGLE_SHEETS_WEBHOOK_URL=your-web-app-url
GOOGLE_SHEETS_WEBHOOK_TOKEN=the-same-long-random-secret
```

5. Restart the development server after saving `.env.local`.

Each submission creates a row in the `Join Applications` tab with the submission time, full name, company name, and contact number.
