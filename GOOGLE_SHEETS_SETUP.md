# Google Sheets Backend Setup

This guide shows you how to set up Google Apps Script to receive form submissions from your HTML form and automatically save them to Google Sheets (which can be linked to Google Forms for viewing).

## Why This Approach?

✅ **HTML form stays on your page** - Better UX, no leaving the site  
✅ **Data goes to Google Sheets** - Easy to view, analyze, and export  
✅ **Can link to Google Forms** - View responses in Google Forms interface  
✅ **Free and unlimited** - No service fees or limits  

## Step-by-Step Setup

### Step 1: Create Google Sheet

1. Go to **https://sheets.google.com**
2. Create a **new spreadsheet**
3. Name it: **"Reachy-mini Ideas Submissions"**
4. In the first row, add these column headers:
   - `Timestamp`
   - `Name`
   - `Role`
   - `Email`
   - `Department`
   - `Idea`
   - `Challenges`
   - `Involvement`

### Step 2: Create Google Apps Script

1. In your Google Sheet, click **Extensions** → **Apps Script**
2. Delete any default code
3. Paste this code:

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

4. Click **Save** (💾) and name your project: **"Reachy-mini Form Handler"**

### Step 3: Deploy as Web App

1. Click **Deploy** → **New deployment**
2. Click the **gear icon** (⚙️) next to "Select type"
3. Choose **"Web app"**
4. Configure:
   - **Description:** "Form submission handler for Reachy-mini ideas"
   - **Execute as:** "Me" (your email)
   - **Who has access:** "Anyone" (important!)
5. Click **Deploy**
6. **Copy the Web App URL** - This is what you'll use in your HTML form
   - It looks like: `https://script.google.com/macros/s/AKfycby.../exec`

### Step 4: Update Your HTML Form

1. Open `index.html`
2. Find this line (around line 1100):
   ```javascript
   const scriptUrl = 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL';
   ```
3. Replace `YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL` with your actual Web App URL
4. Save and push to GitHub

### Step 5: Test It!

1. Fill out the form on your website
2. Submit it
3. Check your Google Sheet - you should see a new row with your data!

## Optional: Link to Google Forms for Viewing

If you want to view submissions in Google Forms interface:

1. Create a **Google Form** with the same questions
2. In Google Forms, go to **Responses** tab
3. Click the **📊 Sheets icon**
4. Choose **"Select existing spreadsheet"**
5. Select your "Reachy-mini Ideas Submissions" sheet
6. Now you can view responses in both Sheets and Forms!

## Security & Permissions

### First Time Setup
- When you first deploy, Google will ask for permission
- Click **"Review Permissions"**
- Choose your Google account
- Click **"Advanced"** → **"Go to [Project Name] (unsafe)"**
- Click **"Allow"**

### Access Control
- The Web App URL is public (anyone can submit)
- But only YOU can view/edit the Google Sheet
- This is perfect for a public form!

## Troubleshooting

### "Script URL not configured" error
- Make sure you've replaced `YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL` with your actual URL
- Check that the URL ends with `/exec`

### Data not appearing in Sheet
- Check that column headers match exactly
- Verify the script is deployed (not just saved)
- Check Apps Script execution logs: **View** → **Execution log**

### CORS errors
- The script uses `mode: 'no-cors'` which is normal
- You won't see the response, but data should still save
- Check your Google Sheet to confirm submissions

### Permission denied
- Make sure "Who has access" is set to **"Anyone"**
- Redeploy if you changed permissions

## Advanced: Email Notifications

Add this to your Apps Script to get email notifications:

```javascript
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
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
    
    // Send email notification
    const subject = 'New Reachy-mini Idea Submission';
    const body = `
      New idea submitted:
      
      Name: ${data.name}
      Role: ${data.role}
      Email: ${data.email}
      Department: ${data.department}
      
      Idea: ${data.idea}
      
      Challenges: ${data.challenges || 'None'}
      Involvement: ${data.involvement}
    `;
    
    MailApp.sendEmail({
      to: 'harslan@suffolk.edu,Dmitri.Tcherevik@suffolk.edu,Aykut.Firat@suffolk.edu',
      subject: subject,
      body: body
    });
    
    return ContentService.createTextOutput(
      JSON.stringify({success: true})
    ).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({success: false, error: error.toString()})
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
```

## Benefits

✅ **Seamless UX** - Form stays on your beautiful page  
✅ **All data in one place** - Google Sheets for easy management  
✅ **Free forever** - No service costs  
✅ **Unlimited submissions** - No limits  
✅ **Easy to export** - Download as CSV, Excel, etc.  
✅ **Can link to Forms** - View in Google Forms if preferred  

## Next Steps

1. ✅ Set up Google Sheet
2. ✅ Create and deploy Apps Script
3. ✅ Update HTML form with Web App URL
4. ✅ Test submission
5. ✅ (Optional) Link to Google Forms for viewing
6. ✅ Start collecting amazing ideas! 🚀

Your form is now ready to collect submissions while keeping users on your beautiful page!

