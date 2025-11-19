# Community Ideas Display Setup

The "Community Ideas" section displays submitted ideas to spark creativity and show engagement. Here's how to set it up:

## Quick Start: Manual Updates (Easiest)

### Step 1: Get Ideas from Google Forms

1. Open your Google Form's **Responses** tab
2. Click the **📊 Sheets icon** to view responses in Google Sheets
3. Review submissions and select the best ones to display

### Step 2: Add Ideas to the Page

1. Open `index.html`
2. Find the section with `id="ideasContainer"` (around line 920)
3. Replace the example idea card with real submissions

### Step 3: Format Each Idea

Use this template for each idea:

```html
<div class="idea-card">
    <div class="idea-header">
        <span class="idea-badge">💡 New Idea</span>
        <span class="idea-role">Student</span>
    </div>
    <div class="idea-department">Marketing</div>
    <div class="idea-text">
        Your idea text goes here. This is what the person submitted about how Reachy-mini could be used.
    </div>
    <div class="idea-footer">
        <span>Submitted recently</span>
    </div>
</div>
```

### Privacy Guidelines

**✅ DO Display:**
- The idea/use case text
- Role (Student, Faculty, Staff, etc.)
- Department (if provided and they're comfortable)

**❌ DON'T Display:**
- Names (unless explicitly permission given)
- Email addresses
- Personal information

### Badge Options

Change the badge emoji/text to add variety:
- 💡 New Idea
- 🚀 Innovative
- 🎯 Practical
- 🔬 Research
- 💼 Business
- 🎓 Educational

## Automated Option: Google Sheets API (Advanced)

For automatic updates, you can use Google Sheets as a data source:

### Option A: Google Apps Script + JSON

1. Create a Google Apps Script that:
   - Reads from your Google Sheets
   - Converts to JSON
   - Publishes as a web app
2. Use JavaScript to fetch and display ideas

### Option B: Simple JavaScript Fetch

If you make your Google Sheet publicly viewable (read-only):

1. Publish your Google Sheet as CSV
2. Use a service like `sheetsu.com` or `sheet.best` to convert to JSON API
3. Add JavaScript to fetch and display ideas dynamically

### Example JavaScript (for automated display):

```javascript
// Add this script to fetch ideas from Google Sheets API
async function loadCommunityIdeas() {
    try {
        // Replace with your actual API endpoint
        const response = await fetch('YOUR_GOOGLE_SHEETS_API_URL');
        const data = await response.json();
        
        const container = document.getElementById('ideasContainer');
        container.innerHTML = ''; // Clear existing
        
        data.forEach(idea => {
            const card = document.createElement('div');
            card.className = 'idea-card';
            card.innerHTML = `
                <div class="idea-header">
                    <span class="idea-badge">💡 New Idea</span>
                    <span class="idea-role">${idea.role}</span>
                </div>
                <div class="idea-department">${idea.department || ''}</div>
                <div class="idea-text">${idea.idea}</div>
                <div class="idea-footer">
                    <span>Submitted recently</span>
                </div>
            `;
            container.appendChild(card);
        });
    } catch (error) {
        console.error('Error loading ideas:', error);
    }
}

// Call on page load
loadCommunityIdeas();
```

## Best Practices

### 1. **Curate Quality Ideas**
- Show diverse perspectives (different roles, departments)
- Highlight creative, specific, and actionable ideas
- Rotate ideas regularly to keep content fresh

### 2. **Update Regularly**
- Add new ideas weekly or bi-weekly
- Remove older ideas to make room for new ones
- Keep 6-12 ideas visible at a time

### 3. **Encourage More Submissions**
- Add a note: "See your idea here? Submit yours below!"
- Show variety to inspire different types of submissions
- Update frequently to show the page is active

### 4. **Moderation**
- Review all submissions before displaying
- Ensure ideas are appropriate and constructive
- Remove any that don't align with SAIL values

## Example Ideas to Start With

If you want to seed the section with example ideas to inspire submissions:

**From a Student:**
- "Use Reachy-mini as a campus tour guide that can answer questions about Suffolk's AI programs in real-time!"

**From Faculty:**
- "Create a human-robot interaction lab where students study trust, communication, and collaboration with embodied AI."

**From Industry Partner:**
- "Demonstrate automation ROI by having Reachy-mini perform actual business tasks during presentations."

## Troubleshooting

**Ideas not showing?**
- Check that HTML is valid
- Ensure idea cards are inside `ideasContainer` div
- Verify CSS classes match

**Want to hide the section until you have ideas?**
- Add `style="display: none;"` to the `.community-ideas` section
- Remove when ready to show ideas

**Need to limit number of ideas?**
- Show only the most recent 6-9 ideas
- Or rotate based on engagement/quality

## Next Steps

1. ✅ Set up your Google Form
2. ✅ Collect initial submissions
3. ✅ Select best ideas to display
4. ✅ Add them to the page manually (or set up automation)
5. ✅ Update regularly to keep content fresh

The community ideas section will create a sense of momentum and inspire more creative submissions!

