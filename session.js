//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                      DILA-MD 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：1.0                                                       //
//
//
//
//
//
//
//
//                                        
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : DILA-MD
//  * @version      : 1.0
//  * @author       : DILAKSHA PRABATH
//  * @youtube      : 
//  * @description  : DILA-MD, created by DILAKSHA PRABATH.
//*
//*
//Base by DILAKSHA PRABATH
//GitHub: @MRDILA
//WhatsApp: +94764579803
//   * Created By GitHub: MRDILA
//   * Credit To DILAKSHA PRABATH
//   * © 2025 DILA-MD-V1.
// ⛥┌┤
// */

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "DILA-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUZKVnRaczUvN3ZYemlYSkpPVUIwYTlwSWpRbXVreFZuMUQvM3FTL3ZuOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMmRvNmFJQ0szeWthK3pJRTNQMWJYai9Tckl4eUFFQVpUaitlQVM2QTlUbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLSW5FRStsZWdLR1p6cWFqelBmQ3cvb0krTzVjNCtxdlpqQU5QVkVlUEVFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGKzZWRENQeWR5b05WL3k4VjZlbEdQK2p5ZVV2cDZUMU9saHVsV0dHYjFJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllNUVhEN2hjTUJMMncvL3ljd1pYdlNjejNwNzM0TS9sb0dqRkhCWjhFVjg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImE1RTBOV011WndPVHJnS25JcGp0elp2TEFSZEE2dnJSMmd1a2U1VDFPVWc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEMxMUpabWFlaDJ4dytEMnhNbWR5dm5tREZseGZrY09WQ0Z0RkdRZHBFUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSHQ1UWpYSDBFVzRmRjAxbzBURmhGZVc0eGxYRXNYYVNTWEM3dmZKUXBUND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhEaFV2d0w0TWp0QU5mMmhyV2gyRzRkMlFROE1zUkI4RnJMd2QrNlNLYmV3KzB5T1pFMURaTVFQd2FBNllUbUZhaENsQkw2SmVPaDZYVW1EUVFIR2hBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTAsImFkdlNlY3JldEtleSI6ImM2cVRMSXlJdk4xc2puZlhCb3VMVi9udkFWVU04cWdlSmFJVXRLRllSNjg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InJZNXY5dXdrUkQySWNpTHNvd3RWWFEiLCJwaG9uZUlkIjoiMzAyMWUxNmEtY2MwNi00NmM4LWFjMjctYmE2NTcxN2EyYjhhIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik04MmZRNVlzZFJ4SDFjRDZRUytCY3lmQkR0ND0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJabHBwSFBDMXpQNzhmVDJ6aEFlU0dzT2EyRms9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiMVA4SzNSRVciLCJtZSI6eyJpZCI6Ijk0Nzg1OTIzOTI5OjQ2QHMud2hhdHNhcHAubmV0IiwibmFtZSI6Im93bmVyIiwibGlkIjoiMTM1MTQxNzMzMjA4MjQ5OjQ2QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTVNMMTlJREVOL1Vpc1VHR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiT0pyV2N2Vm5LWFJ1OEdldFN5OEJyaVdXY0U0SUpER0FMa1lkOGVHaExFWT0iLCJhY2NvdW50U2lnbmF0dXJlIjoicmNMMVlDeWc2dHZnU0k1ZFl5a2VJUlovYjFCYTVWRFh1Q0N2b2NkTTZ5SlJKT2VUcG1udDhuWGVTRkRKS1hGdHEzSTljQW96OE1SSERKdkhTeVRzRHc9PSIsImRldmljZVNpZ25hdHVyZSI6IkVuajhQNGJZaFJBMk1rS3ZEdHRTanY4QjdTcG1OM0JJenU2M05uLy9wNExXSzhlbktTYjRSRVk0V1dWUTlIU1FhMnRmWUl6dk41RFg5bzBjZnk0a2lBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3ODU5MjM5Mjk6NDZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVGlhMW5MMVp5bDBidkJuclVzdkFhNGxsbkJPQ0NReGdDNUdIZkhob1N4RyJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0EwSUFnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU1NDkwOTI0LCJsYXN0UHJvcEhhc2giOiIyVjc3cVUifQ==",
PORT: process.env.PORT || "8000"
};
