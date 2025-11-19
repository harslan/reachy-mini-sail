# Google Forms Setup Guide

## Quick Setup (5 minutes)

### Step 1: Create Your Google Form

1. Go to **https://forms.google.com**
2. Click **"Blank"** to create a new form
3. Name it: **"Reachy-mini Ideas & Applications"**

### Step 2: Add These Questions

Create the following questions in order:

#### Question 1: Your Name
- **Type:** Short answer
- **Required:** ✓ Yes
- **Question:** "Your Name *"

#### Question 2: Your Role
- **Type:** Multiple choice
- **Required:** ✓ Yes
- **Question:** "Your Role *"
- **Options:**
  - Student
  - Faculty
  - Staff
  - Industry Partner
  - Alumni
  - Other

#### Question 3: Email
- **Type:** Short answer (with email validation)
- **Required:** ✓ Yes
- **Question:** "Email *"

#### Question 4: Department/Program
- **Type:** Short answer
- **Required:** ✗ No
- **Question:** "Department/Program (Optional)"
- **Description:** "e.g., ISOM, Marketing, Management"

#### Question 5: Main Idea
- **Type:** Paragraph
- **Required:** ✓ Yes
- **Question:** "What's one way Reachy-mini could enhance learning in YOUR field? *"
- **Description:** "Describe a specific project, application, or use case you'd like to see. Be creative! Think about your discipline, your courses, or your research interests..."

#### Question 6: Challenges
- **Type:** Paragraph
- **Required:** ✗ No
- **Question:** "What challenges or concerns do you foresee? (Optional)"
- **Description:** "Help us plan ahead. What should we be thinking about?"

#### Question 7: Interest Level
- **Type:** Multiple choice
- **Required:** ✓ Yes
- **Question:** "Would you be interested in being involved? *"
- **Options:**
  - Yes, definitely! I want to be part of this.
  - Maybe—I'd like to learn more first.
  - Just curious—keep me updated.

### Step 3: Customize Your Form

1. Click the **palette icon** (🎨) in the top right
2. Choose colors that match your brand (or use the default)
3. Add a header image if desired (optional)

### Step 4: Get Your Form URL

1. Click the **"Send"** button (top right)
2. Click the **🔗 link icon**
3. Copy the URL (looks like: `https://forms.gle/XXXXX`)
4. **Shorten URL** is already checked - this is what you want!

### Step 5: Update Your Website

1. Open `index.html` in your editor
2. Find this line (around line 1000):
   ```javascript
   const googleFormUrl = 'https://forms.gle/YOUR_FORM_ID_HERE';
   ```
3. Replace `https://forms.gle/YOUR_FORM_ID_HERE` with your actual Google Form URL
4. Save and push to GitHub

### Step 6: (Optional) Embed Form Directly

If you want the form embedded on the page instead of opening in a new window:

1. In Google Forms, click **"Send"**
2. Click the **`</>`** (embed) icon
3. Copy the iframe code
4. In `index.html`, find the commented section that says:
   ```html
   <!-- Optional: Embed Google Form directly -->
   ```
5. Uncomment it and paste your iframe code
6. Replace `YOUR_GOOGLE_FORM_EMBED_URL` with your embed URL

## Advanced: Set Up Response Notifications

1. In Google Forms, click the **three dots** (⋮) → **"Get email notifications for new responses"**
2. You'll receive an email every time someone submits

## Advanced: Connect to Google Sheets

1. In Google Forms, click the **"Responses"** tab
2. Click the **green Sheets icon** (📊)
3. Create a new spreadsheet or link to existing one
4. All responses will automatically sync to the spreadsheet

## Benefits of Google Forms

✅ **Free** - Unlimited submissions  
✅ **Analytics** - See response charts and summaries  
✅ **Export** - Download as CSV or sync to Sheets  
✅ **Collaboration** - Share form with team members  
✅ **Customization** - Brand colors, images, themes  
✅ **Mobile-friendly** - Works great on all devices  

## Testing

1. Fill out your form yourself to test
2. Check that responses appear in the Responses tab
3. Verify email notifications work (if enabled)
4. Test the link on your website

## Need Help?

- Google Forms Help: https://support.google.com/docs/topic/9054603
- Your form will be live as soon as you update the URL in `index.html`!

