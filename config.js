//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl =
  process.env.GURL || "https://whatsapp.com/channel/0029VaFv1RZ3QxRtLXfI993h";
global.website =
  process.env.GURL || "https://whatsapp.com/channel/0029VaFv1RZ3QxRtLXfI993h";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "923135673658";
global.sudo = process.env.SUDO || "923202034506";
global.owner = process.env.OWNER_NUMBER || "923078283084";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";
global.autoreaction = process.env.autoreaction || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID 
  process.env.SESSION_ID |eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUJZQjhISHFhQ21hRnQrenR6d2NORkZMRy9KaHFKeUU3c3pKWnNkTXlXST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRnU1UTFCNGpkMm5PdnVUcU05WmVpbWdqNkU4Z2g2OWJTU3RuVlBra0ltND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrR1RGcVQybXlWRkpibXBvRWdKemhwZDV5UjkrYjRPTGt1Qmtkemo4YzJZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyZmdlejhkN3ZvaUdUY1g5bnJmQ0pmelRmWGljNWIrQ0s3NmRadFdoNlh3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlIR2xYUmc2anBvUDhXalQ4M3VKbW1mbCtSQ0k4QUtVSFAwUHdJeTYxWHc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJKcldCckNNc3E3UGo0M3hpVHJwSk9pZlVxYTFQQU5teGVPWjBFUjVvRnM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUVPUmY3VjRKbENjaXRjd2ZZcjRYYkVDU0JiUWltSDFQRmhkSENNNjEwOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOXo2RHBkSzRKdlNOK1BTS0orTkRBd1hhUDlvYTJOckV6VHlQMldFK29udz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InYrMFNoaDlKWlZ4aEdmQTFwQzdqN0UxVFV6RGlDT1NyamhPbzBwbEdwYUVMVmdGNVU2Q25uUVQzdmxaVjZNc25HeGxMcU9FbHorSVlwZWhqK0FvZEF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQ2LCJhZHZTZWNyZXRLZXkiOiJKTHk3ZU9xUytzV2lFb3A4TXdkNUZ6bmpYYVdJd080Zlo1L0FNR0lZTEpNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJUM1VydXoyNVJuT2F0aEk4UEllQndnIiwicGhvbmVJZCI6IjE0MDVhNmU5LWNkNmItNGZiNy05ZjBhLTJjMTU3ZjBlOWZhMyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJSnNyMzFNcEJudXUrNlByeXlKSmhKNlJDdE09In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieTQzaFJsOXVFaHZVb29hK2FReWJJMldicXVFPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik5ETlNLU0NHIiwibWUiOnsiaWQiOiI5MjMwNzgyODMwODQ6MjVAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiKlxuKlxuKlxuKlxuKlxuKlxuKlxuKlxuKlxuKlxuKlxuKlxuKlxuKlxuKlxuKlxuQk9TU1xuKlxuKlxuKlxuKlxuKlxuKlxuKlxuKlxuKlxuKlxuKlxuKlxuKlxuKlxuKlxuKiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTDJ5K3ZRQ0VQekVqcmNHR0EwZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoidzVnUmxDVTdrRWp3YjNaRlRwRkNOdlZsR2dZajI3YlROVU9oKzkrSGVDcz0iLCJhY2NvdW50U2lnbmF0dXJlIjoibGcwNEU3cTFralROcnVodEpuZGx3THJ2bkVNenhTWlRQanZORktxQng2SlE2NDJVS3VhaTViMlJmVkk4QlpzRGVCc2lDVzB3cmdkL3pCQnZGVmVjQlE9PSIsImRldmljZVNpZ25hdHVyZSI6Im9nY0lVemlYSk4vei8yMGtGSlJzOXJQUGRaQ1lLV2p1MVkwajRWWURIcERKTEc5WS9rczd3N2Fkbk41c3FPRWY2bUg5bmIrWWU4UFZDV3o0Nk1jYkFRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMDc4MjgzMDg0OjI1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmNPWUVaUWxPNUJJOEc5MlJVNlJRamIxWlJvR0k5dTIwelZEb2Z2ZmgzZ3IifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjYxOTQzMTMsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQnREIn0=|
  "";
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || "+",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "https://whatsapp.com/channel/0029VaFv1RZ3QxRtLXfI993h",
  author: process.env.PACK_AUTHER || "SAHIL KING 👑",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "SAHILKING",
  ownername: process.env.OWNER_NAME || "SAHIL",
  errorChat: process.env.ERROR_CHAT || "923202034506",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  AUTOREACTION: process.env.AUTOREACTION || process.env.AUTOREACTION || "true",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
