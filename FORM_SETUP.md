# Form Setup Instructions

The discussion form on the page is ready to collect ideas, but you need to connect it to a form submission service. Here are your options:

## Option 1: Formspree (Recommended - Easiest)

1. **Sign up** at https://formspree.io (free tier: 50 submissions/month)
2. **Create a new form** and get your form endpoint (looks like: `https://formspree.io/f/YOUR_FORM_ID`)
3. **Update the form action** in `index.html`:
   - Find: `<form id="ideaForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">`
   - Replace `YOUR_FORM_ID` with your actual Formspree form ID
4. **Done!** Submissions will be emailed to you automatically

**Pros:**
- ✅ No coding required
- ✅ Free for moderate use
- ✅ Email notifications
- ✅ Spam protection built-in
- ✅ Works immediately

## Option 2: Google Forms (Best for Analytics)

1. **Create a Google Form** with these questions:
   - Your Name (Short answer)
   - Your Role (Multiple choice: Student, Faculty, Staff, Industry Partner, Alumni, Other)
   - Email (Short answer)
   - Department/Program (Short answer - optional)
   - What's one way Reachy-mini could enhance learning in YOUR field? (Paragraph)
   - What challenges or concerns do you foresee? (Paragraph - optional)
   - Would you be interested in being involved? (Multiple choice: Yes/Maybe/Just curious)
2. **Get the form URL** (looks like: `https://forms.gle/XXXXX`)
3. **Update the link** in `index.html`:
   - Find: `const googleFormUrl = 'https://forms.gle/YOUR_FORM_ID_HERE';`
   - Replace with your actual Google Form URL
4. **Optional:** Embed the form directly on the page (see below)

**Pros:**
- ✅ Free unlimited submissions
- ✅ Built-in analytics and charts
- ✅ Can export to Google Sheets
- ✅ Familiar interface for most users

## Option 3: Embed Google Form Directly

If you want the form embedded on the page instead of linked:

1. Create your Google Form
2. Click the **Send** button in Google Forms
3. Click the **</>** (embed) icon
4. Copy the iframe code
5. Replace the form section in `index.html` with:
   ```html
   <div class="form-container">
       <iframe src="YOUR_GOOGLE_FORM_EMBED_URL" 
               width="100%" 
               height="1200" 
               frameborder="0" 
               marginheight="0" 
               marginwidth="0">Loading…</iframe>
   </div>
   ```

## Option 4: Custom Backend

If you have a backend server, you can:
- Point the form action to your endpoint
- Handle submissions server-side
- Store in your database
- Send custom email notifications

## Quick Start (Formspree)

1. Go to https://formspree.io/register
2. Create account (free)
3. Create new form → Get form ID
4. In `index.html`, line ~750, replace `YOUR_FORM_ID` with your Formspree ID
5. Push to GitHub
6. Done! ✅

## Form Fields Being Collected

- Name (required)
- Role (required)
- Email (required)
- Department/Program (optional)
- Idea/Use Case (required)
- Challenges/Concerns (optional)
- Interest Level (required)

All fields are strategically designed to:
- Identify early adopters
- Map interest across departments
- Generate concrete project ideas
- Build your collaborator database

