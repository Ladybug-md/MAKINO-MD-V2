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
global.autoTyping = true;                //make true to enable auto typing
global.autoRecord = true;                //make true to enable auto recording
global.groupevent = true;                //This is the new variable for controlling group event handling.
global.statusseen = true;                 //make true to view statuses 
global.ANTI_BOT = false;
global.PM_BLOCKER = false;
global.CHATBOT = true;


global.Owner = ["Mɾ Nƚαɳԃσ Oϝƈ"];
global.OwnerNumber = ["263781686568"];
global.ownertag = ["263781686568"]; 
global.OwnerName =  "Tᴀɪʀᴀ Mᴀᴋɪɴᴏ";
global.BotName = "🐦Makino-md-v2";
global.packname = "MAKINO-MD-V2";                             //Do not change.
global.author = "TAIRA MAKINO";                               //Do not change.
global.BotSourceCode = "https://github.com/anonphoenix007/MAKINO-MD-V2"; //Do not change.
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm "; 
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm"; //Do not change!
//global.dbase = process.env.DBASE || "";//Mongodb here
global.AuthorWhatsapp = "https://wa.me/2347080968564"; //Bot creator WhatsApp link,don't change or bot will not work.

global.sessID = process.env.sessID || {"noiseKey":{"private":{"type":"Buffer","data":"cFxb0Y7JN2XjSzRyqMIahyIEdP5XKydPmO8dglE4L2s="},"public":{"type":"Buffer","data":"hox/JfC4gUk8Le+G8jFxe0fCruMylvORCMLXYp7g7EU="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"oCyTwfAlKAgJxDCtNSsXvFTRSsGA5pUJ+BoBFpBPKVg="},"public":{"type":"Buffer","data":"9cfcxhDSvbWQDFEe5GG/uYmTY0BXhEMKlYMFmbNS8BM="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"gPnzfv0/7XhWRdHREimAVEZGaBGjOO4JvGSHxxbsEGQ="},"public":{"type":"Buffer","data":"sYZ5b140RKXQSPCLOdQvBiAerdQ3w/oZA99yMDDcNGg="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"EDUDr/d0tAnGNJ/L1Qh1gx9yIp4aBC2jBkVOoua3j3c="},"public":{"type":"Buffer","data":"xAu5yPP5k3kAYMVdwC8uykXjXFtOrUTpUw2RfKe3XAQ="}},"signature":{"type":"Buffer","data":"lLqdd3nGLWTwSfCxSxSdh1kTJRqU/6kU8aapZ937Q9RDrwtOxrqZfxVpH+2fYFFb/dbN6EpgpSCtKDvjVJqlBw=="},"keyId":1},"registrationId":224,"advSecretKey":"ekNwC3ru6M/RpatN/BeYNLUxD3MuJu6A6oFSuHJlYmE=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"ZzwYLQ2cRdSXMxP0uZLWZA","phoneId":"0359380d-bf4d-4f9f-a29a-dc4641982d5c","identityId":{"type":"Buffer","data":"gIEBhdxut7gwzib6N8BoevgPGmc="},"registered":true,"backupToken":{"type":"Buffer","data":"MbKmzhjsDd7IH0tj5ruvEp7jA5k="},"registration":{},"pairingCode":"RG18X28Q","me":{"id":"923284645169:12@s.whatsapp.net"},"account":{"details":"CIDExPgGEPv6xbYGGAMgACgA","accountSignatureKey":"OsJps80GYfpQ3/BLkVPH9jE7kxhVKk+m2a3lDuKmRik=","accountSignature":"5/tKtPtmtD8N8v+btWSBygCsXQs/tbvJAGGX0SkzpQNm21k8Qr7EmAu3LMMmNTwZ03wadTx4l+nAWJb1MXPGAA==","deviceSignature":"HK5H53509dGujJZImh/Rzb6SaoLjVzOvGT1c+49geWMGvBYA5/4CSZO+OkFTU1ISdduOnMCtqLvr7yPFFr1kDw=="},"signalIdentities":[{"identifier":{"name":"923284645169:12@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BTrCabPNBmH6UN/wS5FTx/YxO5MYVSpPptmt5Q7ipkYp"}}],"platform":"android","lastAccountSyncTimestamp":1725005193}uoiGotZ5c+/C4IL1SOr8VJ0m1ma+j/X/DFt0zCVY="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"mCFuwvBn9e0V3IY4usl503mFtENuX9p8eNJBGLSwhlk="},"public":{"type":"Buffer","data":"HHXujSN/A97GFfeLiA/MAr8McZwUqFRTGU4/XwoudXc="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"WG2U5q+ZIb1Gr2ugVrwXdpqA4iPijtZNDam20aYQFls="},"public":{"type":"Buffer","data":"FY9OjJR7p7xS3ZzxAIYT50JX8ag7uriOpfszd6pzanU="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"eBiiZrof/1TBwC1CLK08WFN8uSLfUYWJkTiyEjfmgGA="},"public":{"type":"Buffer","data":"n/DkcJPmr6yUJZ7kUxrf3mTNPbUvSLvpYKWzBh4OgXY="}},"signature":{"type":"Buffer","data":"U//PfN361hqdJywMdqxKUyizl55HAusGVyeXPaNkXOHZE1VPKw/OOOPLQAq5oTWuU8w1NVnDQCrTjKkqQ81EgA=="},"keyId":1},"registrationId":131,"advSecretKey":"Ja2uKWAswysVNok55TvpnZUJeSY+3q4K8AZnxpavDcM=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"Bnwnq-1qRvKuT_T3zaL3FQ","phoneId":"8a247a25-184e-4c14-8fac-e6964f1ac5d4","identityId":{"type":"Buffer","data":"SjcldnIr6pen1ymOxxeE6e8EYMA="},"registered":true,"backupToken":{"type":"Buffer","data":"wUdVLjKqX1c/Deta10cqOc8mvd0="},"registration":{},"pairingCode":"K6S1WJ7B","me":{"id":"923284645169:10@s.whatsapp.net"},"account":{"details":"CIDExPgGEPLF8bUGGAEgACgA","accountSignatureKey":"OsJps80GYfpQ3/BLkVPH9jE7kxhVKk+m2a3lDuKmRik=","accountSignature":"Ke8N6xwUT9f0NzpBtRDIoshIins0Jqwm/oLu5U9c08CQK9U9in+IvxCvjuI47AdnaCj9reAo0+OSbH7MoE8EBg==","deviceSignature":"/dx5jJIg7vRbk4SAgL/7wddWIj2Ly6p4nBeX5QmGJbvqNAVbU8sfxuKK/gf+PaSn3E6lWJwELlk3uUn4cqCKig=="},"signalIdentities":[{"identifier":{"name":"923284645169:10@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BTrCabPNBmH6UN/wS5FTx/YxO5MYVSpPptmt5Q7ipkYp"}}],"platform":"android","lastAccountSyncTimestamp":1723622145}`
global.prefa = ["N"]

//
global.BotLogo = fs.readFileSync("./Assets/pic1.jpg");
global.Thumb = fs.readFileSync("./Assets/pic9.jpg");
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg");
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg");


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
    botowner: 'Only my *Owner* can use this command,Dont trespass, Baka!',
    grouponly: 'This command is only made for *Groups*, Baka!',
    privateonly: 'This command is only made for *Private Chat*, Baka!',
    botonly: 'Only the *Bot itself* can use this command!',
    waiting: 'Wait a lil bit (¬_¬)ﾉ...',
    nolink: ' provide me *link*, Baka!',
    error: 'An error occurd!',
    banned: 'You cant use the commands because you Are *Banned*',
    bangc: 'This Group is *Banned* from using Commands!',
    nonsfw: 'Dont be a pervert,idiot! This is not a NSFW enabled group!'
    
}
