# DmmEikaiwa2GoogleCalendar

When you book a lesson on DMM Eikaiwa, a schedule will automatically be created on Google Calender by using a Gmail.

## 🌍 Environment

```bash
$ node -v
v20.12.1

$ npm -v
10.5.1
```

## 🚀 Setup

### 1. Clone the repo

```bash
$ git clone https://github.com/na-yusuke/DmmEikaiwa2GoogleCalendar.git
or
$ git clone git@github.com:na-yusuke/DmmEikaiwa2GoogleCalendar.git
```

### 2. Install libraries

```bash
$ npm install
```

### 3. Setup clasp (Google Apps Script CLI)

```bash
$ clasp login
```

- After running the command, a URL will be displayed in the terminal
- Access the URL to authenticate and grant necessary permissions

### 4. Create a Google Apps Script project

1. Create a new Google Apps Script project for this application
2. Open your Apps Script project
3. Click **Project Settings** in the left sidebar
4. Under **IDs**, copy the **Script ID**

### 5. Link the local script to the GAS project

1. Copy the example configuration file:

    ```bash
    $ cp .clasp.example.json .clasp.json
    ```

2. Enter the **Script ID** obtained above in the `scriptId` field of `.clasp.json`

### 6. Upload a script project

- This command uploads all of a script project's files from your computer to Google Drive.

```bash
$ npm run deploy
✔ Manifest file has been updated. Do you want to push and overwrite? (Yes/No)
Yes
```

### 7. Setup triggers (Automation)

- Create any trigger according to your requirements.

<img src=/image/trigger.png width= "500px" >

## 📚 References

- [Google Apps ScriptをTypeScriptで書いてみた](https://dev.classmethod.jp/articles/ts2gas/)
- [clasp でコマンドライン インターフェースを使用する](https://developers.google.com/apps-script/guides/clasp?hl=ja#create_a_new_apps_script_project)

## 💡 Motivation for it

I take a DMM Eikaiwa's lesson almost every day.  
However, it is annoying to have to remember the schedule for each lesson.  
So I came up with an idea of creating an schedule automatically by using the email on Gmail I receive when I book a lesson.  
Now, I don't have to care about lesson schedule anymore.  
