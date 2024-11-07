const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_06_26_11_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA2NixcbiAgICAgICAgMTEzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTg2LFxuICAgICAgICAzMCxcbiAgICAgICAgODUsXG4gICAgICAgIDc1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTc5LFxuICAgICAgICA5NixcbiAgICAgICAgMjE5LFxuICAgICAgICAyMTksXG4gICAgICAgIDEzNyxcbiAgICAgICAgODMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDMyLFxuICAgICAgICAyMzksXG4gICAgICAgIDExNCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxODUsXG4gICAgICAgIDMxLFxuICAgICAgICA2OSxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzksXG4gICAgICAgIDQ5LFxuICAgICAgICA3MyxcbiAgICAgICAgODQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTAzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDMxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTA4LFxuICAgICAgICA1NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDU2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDExLFxuICAgICAgICA3MyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDY0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMzksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTk3LFxuICAgICAgICA0NyxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEzMixcbiAgICAgICAgNzgsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDk1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDc1LFxuICAgICAgICA3MixcbiAgICAgICAgOSxcbiAgICAgICAgMTI5LFxuICAgICAgICA2LFxuICAgICAgICA0NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNDksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDc1LFxuICAgICAgICA2OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDc5LFxuICAgICAgICA0NCxcbiAgICAgICAgMTAyLFxuICAgICAgICA2OCxcbiAgICAgICAgMTc1LFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMjUsXG4gICAgICAgIDcwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjQyLFxuICAgICAgICAwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjI0LFxuICAgICAgICAzMyxcbiAgICAgICAgMTE3LFxuICAgICAgICA0NixcbiAgICAgICAgMjMwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDksXG4gICAgICAgIDE2MixcbiAgICAgICAgMTk3LFxuICAgICAgICA2LFxuICAgICAgICA3MCxcbiAgICAgICAgNSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDY5LFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDc0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDYwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjksXG4gICAgICAgIDg2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxODIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNDEsXG4gICAgICAgIDcwLFxuICAgICAgICA1MCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMSxcbiAgICAgICAgNDMsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgODcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjA5LFxuICAgICAgICA0NSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA4OCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyOSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjUxLFxuICAgICAgICA5NSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxODksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjA5LFxuICAgICAgICA1MixcbiAgICAgICAgMTEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDgyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDg0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDU3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTI4LFxuICAgICAgICA4LFxuICAgICAgICAxLFxuICAgICAgICAxOCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDM3LFxuICAgICAgICAyNixcbiAgICAgICAgMixcbiAgICAgICAgMTAxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDcxLFxuICAgICAgICA4NCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDgyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjM3LFxuICAgICAgICAxODQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI1LFxuICAgICAgICA0NyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMDksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDk4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTc1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNzQsXG4gICAgICAgIDI3LFxuICAgICAgICAxNzksXG4gICAgICAgIDgwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTEsXG4gICAgICAgIDExMixcbiAgICAgICAgMjUzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDc4LFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNDksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibFdWcXZja2plTXFMVTZ6RVorMFhiVjhyZzdyWGxVNm9ZdVZmNG5kZ1l5ST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiU3lxMG9XZGxTUVNZZnE2RTZaUmRjUVwiLFxuICBcInBob25lSWRcIjogXCJlNTk0YjBhMC1iZmFhLTQzOTYtOTQ1OC03YTg3MzVmZDg1Y2RcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTYsXG4gICAgICA1LFxuICAgICAgMzgsXG4gICAgICAxMixcbiAgICAgIDQwLFxuICAgICAgNDQsXG4gICAgICAyNDIsXG4gICAgICAxNyxcbiAgICAgIDIyOSxcbiAgICAgIDg1LFxuICAgICAgMjQ2LFxuICAgICAgNDIsXG4gICAgICAyNTIsXG4gICAgICAxNTQsXG4gICAgICAxNjgsXG4gICAgICA4MyxcbiAgICAgIDEwMixcbiAgICAgIDI3LFxuICAgICAgMTczLFxuICAgICAgMjMwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDksXG4gICAgICAxNjEsXG4gICAgICAyNTMsXG4gICAgICAxMDYsXG4gICAgICA5OSxcbiAgICAgIDU5LFxuICAgICAgMjQ1LFxuICAgICAgNzQsXG4gICAgICAyMTYsXG4gICAgICAxOTAsXG4gICAgICA0OSxcbiAgICAgIDE0NSxcbiAgICAgIDE5MSxcbiAgICAgIDE2NSxcbiAgICAgIDkyLFxuICAgICAgMTcyLFxuICAgICAgMzYsXG4gICAgICA4NyxcbiAgICAgIDEzMyxcbiAgICAgIDIzMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJXVlJOQ1A4NFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzNDI5MzIzMDI0OjEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxODkxMjUxNjAzNDk5NDk6MTNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTE9wcG9jRkVLQzdzYmtHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJJalh4UlVCblB0bDlOUCs0ekIrUmdmaG5nN0tqZ0w4N3FnemlBcEFucVJzPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImRRTkVWdGwvbldZWnJCeFlGRC9OckM2UTJ4aVN1RlEzUHVqMnFpam15TnlkVndWWmxqMHNGbGRhOFFIZDlXOXJzTE11dlRnVXM0TWR3SUNsR1o3dEJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlZUMDVqRDlSUURnNWhWdGo0dm85VmMzVU93RUxYeHhRRXBHYW9lWDRrZk1CMGplaUZNOU1ZY0h4UDE3NGxVMUM3citGNkN2NkdGY1N0RUFjWDhvNkFRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzQyOTMyMzAyNDoxM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMwOTYwODA0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSExFXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFITEUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI4T2JLK05XN25QOWdrZytGdzlkc0h6aXFFUjVuT3JTMzlrTnJjRnVZRFhJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEzNTc0ODUyMzUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMDk1NzE0MDMyOFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
