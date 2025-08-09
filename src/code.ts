const CRITERIA = "from:noreply@eikaiwa.dmm.com subject:レッスン予約 is:unread ";

/**
 * Main function to process DMM Eikaiwa lesson booking emails and create calendar events
 */
function main(): void {
  eachMessage(CRITERIA, (message: GoogleAppsScript.Gmail.GmailMessage): void => {
    try {
      const cal = CalendarApp.getDefaultCalendar();
      const body = message.getBody();

      const phraseMatch = /様、.*とのレッスン予約が完了しました/.exec(body);
      if (!phraseMatch) {
        console.error('Could not find lesson booking confirmation phrase');
        return;
      }

      const phrase = phraseMatch[0];
      const timeMatches = phrase.match(/\d{4}\/\d{2}\/\d{2}\ \d{2}\:\d{2}/g);

      if (!timeMatches || timeMatches.length === 0) {
        console.error('Could not extract date/time from message');
        return;
      }

      const dateTimeString = timeMatches[0];
      const title = "DMM英会話";
      const startTime = new Date(dateTimeString);
      const endTime = new Date(startTime.getTime() + 30 * 60 * 1000); // 30 minutes in milliseconds

      cal.createEvent(title, startTime, endTime);
      console.log(`Created calendar event: ${title} at ${startTime.toISOString()}`);
    } catch (error) {
      console.error('Error processing message:', error);
    }
  });
}

/**
 * Process each Gmail message matching the given criteria
 * @param criteria - Gmail search criteria string
 * @param callback - Function to call for each message
 */
function eachMessage(
  criteria: string,
  callback: (message: GoogleAppsScript.Gmail.GmailMessage) => void
): void {
  try {
    const threads = GmailApp.search(criteria);

    threads.forEach((thread: GoogleAppsScript.Gmail.GmailThread): void => {
      const messages = thread.getMessages();

      messages.forEach((message: GoogleAppsScript.Gmail.GmailMessage): void => {
        callback(message);
        message.markRead();
      });
    });
  } catch (error) {
    console.error('Error searching Gmail messages:', error);
  }
}