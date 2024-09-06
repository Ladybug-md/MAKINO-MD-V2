const fs = require("fs");
const chalk = require("chalk");

//to enable function - true
//to disable function - false
//
global.available = false;
global.autoReadGc = false;
global.autoReadAll = false;
global.antitags = false;


//auto functioner
global.autoTyping = false;                //make true to enable auto typing
global.autoRecord = true;                //make true to enable auto recording
global.groupevent = true;                //This is the new variable for controlling group event handling.
global.statusseen = false;                 //make true to view statuses 
global.ANTI_BOT = false;
global.PM_BLOCKER = false;
global.CHATBOT = false;

global.SESSION_ID = process.env.SESSION_ID || "{"noiseKey":{"private":{"type":"Buffer","data":"CB7G7SZ8sg10vn/2f25lgu8KrzBUE8kFDWLkHlDeNXg="},"public":{"type":"Buffer","data":"sObdTBoceDSbv1wAAyTfgIF/pjx87ETs4cKyRyGCsio="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"0HJF+ML9gf2aYlzA8mBoXrxbjS84E1KM9p7yz6iL0WI="},"public":{"type":"Buffer","data":"A3/1TlZW7joP5QOw/PRHuQPBLL54H+tUS8GTDtV37kI="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"iON5lwLbXGuV6RLGgWv5wvcYUrfVcuSoERFVrYyvwHo="},"public":{"type":"Buffer","data":"ueGZ6f/BxEFyVCBwdGp6YWaMXdq94xGKD18lGaKTuVw="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"ML3ldCtHQSAOyPM5e454QXjHs4fFGlrMaEnT0+AGUHM="},"public":{"type":"Buffer","data":"+qP73BMIO0HwZeHEzbp4L5VGoh3X7nuCsa+M0VfUeQs="}},"signature":{"type":"Buffer","data":"yYIIlIdWmGcIj60ku8SDMOoNvWYvndWB4xY7KTXipOnF2GgQZHx3cZr5P5oMib6VcEzchZnQ/lXPDgJnjQd/BQ=="},"keyId":1},"registrationId":235,"advSecretKey":"ftCXvadeEy6oafDyXq9qmlRVyYbSfDLNHqbdOwTuwUQ=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"Jca-V_JpRoGOHulDQdwGeQ","phoneId":"78a9b539-1cc6-4c29-aef0-3a731fa48f72","identityId":{"type":"Buffer","data":"VX4ajyJ7SmZP+fvqJ+EMNjSWAg0="},"registered":true,"backupToken":{"type":"Buffer","data":"5HrWB2UXLg5NZ+0K2FQy2F0MPds="},"registration":{},"pairingCode":"7H6XFKMC","me":{"id":"923284645169:14@s.whatsapp.net"},"account":{"details":"CIHExPgGEMz+6rYGGAIgACgA","accountSignatureKey":"OsJps80GYfpQ3/BLkVPH9jE7kxhVKk+m2a3lDuKmRik=","accountSignature":"AmpLwwZcLa4wMDUDfaxa+XqW20Yle0Ad5I/cP1IlNOW1PGOBH42njFM+G1Pa/xmeunxR2WtUBOB56aNSyN3HBw==","deviceSignature":"F4U242EhgDcvh+xHIIkBJsL597CZRKI8CfhyzBlmYEgyULu+aMN/UXLDGpPuIHXGTiv8PRIOV1VzvcoPfsc6Aw=="},"signalIdentities":[{"identifier":{"name":"923284645169:14@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BTrCabPNBmH6UN/wS5FTx/YxO5MYVSpPptmt5Q7ipkYp"}}],"platform":"android","lastAccountSyncTimestamp":1725611866}"
global.Owner = ["2348138686232"]; //like 2347080968564 
global.OwnerName =  "Tᴀɪʀᴀ Mᴀᴋɪɴᴏ";
global.BotName = "♱MAKINO-MD-V2♱♡⃤";
global.packname = "♱MAKINO-MD-V2♱♡⃤";                             //Do not change.
global.author = "TAIRA MAKINO";                               //Do not change.
global.BotSourceCode = "https://github.com/anonphoenix007/MAKINO-MD-V2"; //Do not change.
global.SupportGroupLink = "https://chat.whatsapp.com/DOVRqF006VHHZhiSNwJRce"; 
global.SupportGroupLink = "https://chat.whatsapp.com/DOVRqF006VHHZhiSNwJRce"; //Do not change!
global.menutype = "v3"

global.prefa = ['','!','.',','] 

//
global.BotLogo = fs.readFileSync("./Assets/pic1.jpg");
global.Thumb = fs.readFileSync("./Assets/pic7.jpg");
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg");
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg");
global.OwnerNumber = [""] //Ignore,Unused

//
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


//
global.mess = {
    jobdone: 'Here you go...',
    useradmin: 'Only group Admin can use the command 😂 ',
    botadmin: 'Make me Admin first 😌📍.',
    botowner: 'Only my *Owner* can use this command!',
    grouponly: 'This command is only made for *Groups*',
    privateonly: 'This command is only made for *Private Chat*',
    botonly: 'Only the *Bot itself* can use this command!',
    waiting: 'Wait a lil bit (¬_¬)ﾉ...',
    nolink: ' provide me *link*',
    error: 'An error occurd!',
    banned: 'You cant use the commands because you Are *Banned*',
    bangc: 'This Group is *Banned* from using Commands!',
    nonsfw: 'Dont be a pervert,idiot! This is not a NSFW enabled group!'
    
}
