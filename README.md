# DmmEikaiwa2GoogleCalendar

When you book a lesson on DMM Eikaiwa, a schedule will automatically be created on Google Calender by using a Gmail.

## 🌍 Environment

```bash
$ node -v
v20.12.1

$ npm -v
10.5.1
```

## ⚙️ Setup

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

### 3. Setup clasp

```bash
$ clasp login
```

- Once run the command, URL is showed on the terminal.
- When you access the URL, you will be asked to authenticate, and if necessary, allow it.

### 4. Prepare a GAS project

1. Prepare a GAS project to run this repo.
1. Open Apps Script project.
1. At the left, click Project Settings.
1. Under IDs, copy the `Script ID`.

### 5. Link the script to the GAS project

1. Copy `.clasp.example.json` to `.clasp.json`.

    ```bash
    $ cp .clasp.example.json .clasp.json
    ```

1. Type the `Script ID` obtained above in the `scriptId` field of `.clasp.json`.

### 6. Upload a script project

- This command uploads all of a script project's files from your computer to Google Drive.

```bash
$ clasp push
✔ Manifest file has been updated. Do you want to push and overwrite? (Yes/No)
Yes
```

### 7. Add a trigger

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
