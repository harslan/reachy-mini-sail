# Quick Start: Set Up Your Form in 10 Minutes

Follow these steps in order. Each step takes about 2 minutes.

## ✅ Step 1: Create Google Sheet (2 minutes)

1. Go to **https://sheets.google.com**
2. Click **"Blank"** (or the **+** button) to create a new spreadsheet
3. Name it: **"Reachy-mini Ideas Submissions"**
4. In **Row 1**, type these column headers (one per cell, left to right):
   ```
   Timestamp | Name | Role | Email | Department | Idea | Challenges | Involvement
   ```
5. **Save** (Ctrl+S or Cmd+S)

**✅ Checkpoint:** You should see 8 columns with headers in Row 1.

---

## ✅ Step 2: Create Google Apps Script (3 minutes)

1. In your Google Sheet, click **Extensions** → **Apps Script**
   - (If you don't see "Extensions", look for "Tools" → "Script editor")
2. A new tab opens with code editor
3. **Delete everything** in the editor (select all and delete)
4. **Copy and paste** this exact code:

```javascript
function doPost(e) {
  try {
    // Parse the JSON data from the form
    const data = JSON.parse(e.postData.contents);
    
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Append the data as a new row
    sheet.appendRow([
      data.timestamp || new Date(),
      data.name || '',
      data.role || '',
      data.email || '',
      data.department || '',
      data.idea || '',
      data.challenges || '',
      data.involvement || ''
    ]);
    
    // Return success response
    return ContentService.createTextOutput(
      JSON.stringify({success: true, message: 'Data saved successfully'})
    ).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(
      JSON.stringify({success: false, error: error.toString()})
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
```

5. Click **Save** (💾 icon) or press **Ctrl+S** (Windows) / **Cmd+S** (Mac)
6. When prompted, name your project: **"Reachy-mini Form Handler"**
7. Click **OK**

**✅ Checkpoint:** You should see "All changes saved" at the top.

---

## ✅ Step 3: Deploy as Web App (3 minutes)

1. Click **Deploy** → **New deployment**
   - (If you see a warning about "manifest file", click **"Deploy"** → **"New deployment"** again)
2. Click the **gear icon** (⚙️) next to "Select type"
3. Choose **"Web app"**
4. Fill in:
   - **Description:** `Form submission handler for Reachy-mini ideas`
   - **Execute as:** Select **"Me"** (your email address)
   - **Who has access:** Select **"Anyone"** ⚠️ (This is important!)
5. Click **Deploy**
6. **IMPORTANT:** You'll see a popup asking for authorization
   - Click **"Authorize access"**
   - Choose your Google account
   - You may see a warning: **"Google hasn't verified this app"**
   - Click **"Advanced"** → **"Go to Reachy-mini Form Handler (unsafe)"**
   - Click **"Allow"**
7. After authorization, you'll see a **"Web App"** dialog
8. **COPY the Web App URL** - It looks like:
   ```
   https://script.google.com/macros/s/AKfycbyXXXXXXXXXXXXXXXXXXXXX/exec
   ```
9. **Save this URL somewhere** - you'll need it in the next step!

**✅ Checkpoint:** You have a Web App URL that starts with `https://script.google.com/macros/s/`

---

## ✅ Step 4: Update Your Website (2 minutes)

1. Open `index.html` in your editor
2. Press **Ctrl+F** (or **Cmd+F**) to search
3. Search for: `YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL`
4. You should find this line:
   ```javascript
   const scriptUrl = 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL';
   ```
5. Replace `YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL` with your actual Web App URL
   - Keep the quotes!
   - Example:
   ```javascript
   const scriptUrl = 'https://script.google.com/macros/s/AKfycbyXXXXXXXXXXXXXXXXXXXXX/exec';
   ```
6. **Save** the file
7. **Commit and push** to GitHub:
   ```bash
   git add index.html
   git commit -m "Add Google Apps Script Web App URL"
   git push origin main
   ```

**✅ Checkpoint:** Your `index.html` now has your actual Web App URL.

---

## ✅ Step 5: Test It! (2 minutes)

1. Go to your website: `https://harslan.github.io/reachy-mini-sail/`
2. Scroll to the form section
3. Fill out the form with test data:
   - Name: Test User
   - Role: Student
   - Email: your-email@suffolk.edu
   - Department: ISOM
   - Idea: This is a test submission
   - Challenges: (leave blank)
   - Involvement: Yes, definitely!
4. Click **"🚀 Submit Your Idea"**
5. You should see: **"✅ Thank you! Your idea has been submitted successfully."**
6. Go back to your **Google Sheet**
7. **Refresh** the page (F5)
8. You should see a **new row** with your test data!

**✅ Checkpoint:** Data appears in your Google Sheet after submission.

---

## 🎉 You're Done!

Your form is now fully functional:
- ✅ Users fill out the form on your beautiful page
- ✅ Data automatically saves to Google Sheets
- ✅ You can view all submissions in one place

---

## Optional: Link to Google Forms (5 minutes)

If you want to view submissions in Google Forms interface:

1. Go to **https://forms.google.com**
2. Click **"Blank"** to create a new form
3. Name it: **"Reachy-mini Ideas (View Only)"**
4. Add the same questions (for reference, not required)
5. Click **"Responses"** tab
6. Click the **📊 Sheets icon** (green icon)
7. Choose **"Select existing spreadsheet"**
8. Select your **"Reachy-mini Ideas Submissions"** sheet
9. Click **"Create"**

Now you can view responses in both:
- **Google Sheets** (for data management)
- **Google Forms** (for visual charts and summaries)

---

## Troubleshooting

### "Script URL not configured" error
- Make sure you replaced `YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL` with your actual URL
- Check that the URL is in quotes: `'https://...'`
- Verify the URL ends with `/exec`

### Data not appearing in Sheet
- Make sure column headers match exactly (case-sensitive)
- Check Apps Script execution: **View** → **Execution log**
- Try submitting the form again

### Permission denied
- Make sure "Who has access" is set to **"Anyone"**
- Redeploy if you changed it: **Deploy** → **Manage deployments** → **Edit** (pencil icon)

### Form shows error message
- Check browser console (F12) for errors
- Verify your Web App URL is correct
- Make sure the Apps Script is deployed (not just saved)

---

## Need More Help?

- Google Apps Script Docs: https://developers.google.com/apps-script
- Google Sheets API: https://developers.google.com/sheets/api

---

**You've got this! 🚀**

