# Step-by-Step Guide: Google Sheets & Excel Sync Setup for Suchi Printers

This website comes with **dual Excel protection**:
1. **Direct In-App Excel Generation**: Even without Google Sheets, you can always visit `https://your-domain.com/admin` (password: `suchi1995`) and click **"Download as Excel (.xlsx)"** to get an instant, fully formatted Excel spreadsheet containing all leads from day one.
2. **Real-time Google Sheets Sync**: Follow the 5-minute setup below to automatically append every new quote request into your live Google Sheet in real time.

---

## What You Need
1. A Google Account.
2. A new Google Sheet.
3. A free Google Cloud Service Account (instructions below).

---

## Step 1: Create Your Google Sheet
1. Go to [Google Sheets](https://sheets.new) and create a new blank spreadsheet.
2. Name it: **"Suchi Printers - Packaging Enquiries"**.
3. In **Row 1**, add these exact column headers across columns `A` to `J`:
   - `A1`: **Timestamp**
   - `B1`: **Full Name**
   - `C1`: **Phone Number**
   - `D1`: **Email**
   - `E1`: **Company / Brand**
   - `F1`: **Product Required**
   - `G1`: **Approx Quantity**
   - `H1`: **Box Dimensions**
   - `I1`: **Client Message**
   - `J1`: **Source Section**
4. Copy the **Spreadsheet ID** from your browser's address bar.  
   The URL looks like:
   ```
   https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
                                          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   ```
   In this example, `1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms` is your `GOOGLE_SHEET_ID`.

---

## Step 2: Create a Free Google Service Account
1. Open the [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new project (e.g., `suchi-printers-leads`).
3. In the search bar at the top, type **"Google Sheets API"**, select it, and click **Enable**.
4. Go to **APIs & Services > Credentials** from the left navigation menu.
5. Click **+ CREATE CREDENTIALS** at the top and select **Service account**.
6. Enter a name (e.g. `suchi-leads-bot`), then click **Create and Continue**, and finally click **Done**.

---

## Step 3: Generate the JSON Key
1. Under **Service Accounts**, click on the newly created service account email (it looks like `suchi-leads-bot@suchi-printers-leads.iam.gserviceaccount.com`).
2. Go to the **Keys** tab at the top.
3. Click **ADD KEY > Create new key**.
4. Select **JSON** and click **Create**. A `.json` credentials file will download to your computer.

---

## Step 4: Share Your Google Sheet with the Service Account
1. Open the downloaded JSON file in Notepad.
2. Copy the `client_email` value (e.g. `suchi-leads-bot@suchi-printers-leads.iam.gserviceaccount.com`).
3. Open your Google Sheet from Step 1, click the green **Share** button in the top right.
4. Paste the service account email, set the role to **Editor**, uncheck "Notify people", and click **Share**.

---

## Step 5: Add the Credentials to `.env.local`
In your website's `.env.local` file (or your Vercel/production environment settings), add:

```env
# The ID from your Google Sheet URL
GOOGLE_SHEET_ID=1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms

# The client_email from your JSON file
GOOGLE_SERVICE_ACCOUNT_EMAIL=suchi-leads-bot@suchi-printers-leads.iam.gserviceaccount.com

# The entire private_key string from your JSON file (including BEGIN and END lines)
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASC...==\n-----END PRIVATE KEY-----\n"
```

Restart your server (`npm run dev` or redeploy) — and your leads will instantly sync to Google Sheets!

---

## Optional: Email Notification Setup (Gmail SMTP)
To receive an instant email alert at `suchiprinters@gmail.com` whenever a new lead arrives:
1. In your Google Account, enable **2-Step Verification**.
2. Go to [Google App Passwords](https://myaccount.google.com/apppasswords).
3. Generate a new App Password for "Mail".
4. Add to `.env.local`:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=suchiprinters@gmail.com
SMTP_PASS=your-16-character-app-password
NOTIFICATION_EMAIL=suchiprinters@gmail.com
```

