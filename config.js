const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUhuU1VIaSsrZXFuaVdjbGxPWWdyNVMvZ3cyQncxSlZOMElkczhtOTRHYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR3lNM3N0YW5KQjYxM3piRUwwQnZLWnhCdHQveU8vYmMreXlTZUo2SlBGdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1T0k5S216MTFnUmRMU3BwSnJIblhZRSsyZTBTNzgyeWRiZVdyNm56WmxZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzUXExM3hyZDVrSEVyTVVMYmVnUXhwTmZ5VnlyVUthZm4xaUdlNzdqOVNJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNEWTRkK1dqSllITHFwTC85ZGRHWml5ak9zaTBSYXZtdXkvRUM5TWhNWEU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRJNXhUcXJxMURvQnpuN2ZaeGQ3L0piREdFc2d4VUNkaWJFWXppRmFxblk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEZmN2lpODAvTmxzL0FLMG4xRXh1ZTNOODVlM2xkU0xxQXF2d0QwMWtIVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQjlzQmU3VFRJVHplWTlaRTJCRDFwTkJRbWx2Q2pHQXlrdDFNY2FXcjgzND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imh4R1krOGhCQ1pyeGJBQVltdkNUVjFmMm84Q2pjZVNPalZ4Y3lhMEdjbWxDNHdvandjMk83VzJQa1lwSUtMeWRvaEh1R2EzaUl5czY3OTZ3L1VsaEN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTgwLCJhZHZTZWNyZXRLZXkiOiI2M3BrSWZDeHlSSzJXZjhwU3grZTI1a1llaXFDTnkzMkYrRWROMHN6dlpjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NDExMjY1ODkxNkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIwRkNBRkQ4Qjk1MDVBODNBMEM5QkJBMDgzQjUxMDY3RiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzQ3ODE0MTM5fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTQxMTI2NTg5MTZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRDQ3M0JENDU1Qzc5MUMxMzhBQTNCNEI0NUEyRjBFRUIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc0NzgxNDE2Mn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiUzE3S0NaQTQiLCJtZSI6eyJpZCI6IjI1NDExMjY1ODkxNjo2MUBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjUxMDM3NDgyMjc0OTgxOjYxQGxpZCIsIm5hbWUiOiJQUk9GRVNTT1Lwn6W88J+lvCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTFNkK3JzRUVPaU50c0VHR0FZZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiVUoxRmFLbnhNWjhrM1RLUEQ1L2R5T1NtRWNXamdPdkpWZkhoSHREWTlGVT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZXpZM01xbWkxZ0MvWS9ISm5zNHRkY2o1RVBJaVpacUI2OTMvTnZEejVCczZYbWNTNXZ1blF0WHhab3g1NENadW5hUTVBMzc2RmtxeUFmeHY2eEFmQ3c9PSIsImRldmljZVNpZ25hdHVyZSI6IkNKcWoyWVJWYjlTTDE3ZThmVG5FSDFTNTVnK0c4bHFENkoxaU5UaWZ3cWNWaVlMcjFIa1JGSmpHU3BjU2k1TkVCeXZ3clRvNTIwQ2xnT1lHaFNzWEFnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0MTEyNjU4OTE2OjYxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZDZFJXaXA4VEdmSk4weWp3K2YzY2prcGhIRm80RHJ5Vlh4NFI3UTJQUlYifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNCSUlBZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0NzgxNDEzNCwibGFzdFByb3BIYXNoIjoiMUs0aEg0IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFDeE0ifQ==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY HUNTER XMD 🤍*",
// set the auto reply massage on status reply  
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/ufdd01.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "PROFESSOR",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "PROFESSOR",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "✨,⚡,💫,🔥,💯",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "true",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "254112658916",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "PROFESSOR",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ PROFESSOR*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/ggnnes.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> *IAM PROFESSOR*⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "254112658916",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "log", 
// change it to 'same' if you want to resend deleted message in same chat 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
