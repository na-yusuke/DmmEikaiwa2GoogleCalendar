var CRITERIA = "from:noreply@eikaiwa.dmm.com subject:レッスン予約 is:unread ";

function main() {
  eachMessage(CRITERIA, function (message) {
    var cal = CalendarApp.getDefaultCalendar();
    var body = message.getBody();
    var [phrase] = /様、.*とのレッスン予約が完了しました/.exec(body);
    console.log('test');
    var [str] = phrase.match(/\d{4}\/\d{2}\/\d{2}\ \d{2}\:\d{2}/g);

    var title = "DMM英会話";
    var startTime = new Date(str);
    var endTime = new Date(startTime.getTime() + 30 * 60000);

    cal.createEvent(title, startTime, endTime);
  });
}

function eachMessage(CRITERIA, callback) {
  GmailApp.search(CRITERIA).forEach(function (thread) {
    thread.getMessages().forEach(function (message) {
      callback(message);
      message.markRead();
    });
  });
}