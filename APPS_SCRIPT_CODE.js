// Google Apps Script Code for Reachy-mini Form Handler
// Copy this entire code into your Google Apps Script editor

// This function handles GET requests (for testing/verification)
function doGet(e) {
  return ContentService.createTextOutput(
    JSON.stringify({
      success: true,
      message: 'Reachy-mini Form Handler is working!',
      status: 'Ready to receive form submissions',
      method: 'Use POST to submit form data'
    })
  ).setMimeType(ContentService.MimeType.JSON);
}

// This function handles POST requests (form submissions)
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

// Optional: Add email notifications
// Uncomment the code below if you want email notifications for each submission

/*
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
      JSON.stringify({success: true, message: 'Data saved successfully'})
    ).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({success: false, error: error.toString()})
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
*/

