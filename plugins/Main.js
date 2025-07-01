const config = require('../settings');
const {
    cmd,
    commands
} = require('../lib/command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson, jsonformat} = require('../lib/functions')
const axios = require('axios')
const cheerio = require('cheerio')
const fg = require('api-dylux');
const si = require('systeminformation')
const os = require('os')
var { get_set , input_set } = require('../lib/set_db') 
const  bot = `94765527900`



var BOTOW = ''
if(config.LANG === 'SI') BOTOW = "*ඔබ Bot\'s හිමිකරු හෝ  උපපරිපාලක නොවේ !*"
else BOTOW = "*You are not bot\'s owner or moderator !*"



cmd({
    pattern: "menu",
    category: "main",
    react: "📃",
    desc: "cinesubz & ytsmx & sinhalasub movie downloader",
    use: ".menu",
    filename: __filename   
},
    async (conn, mek, m, { reply, isDev, from, pushname, l, q, prefix }) => {
        try {
  
        
        
const msg = `*╭─     ᴄᴏᴍᴍᴀɴᴅꜱ ᴘᴀɴᴇʟ*
*│🕵️‍♂️ 𝘙𝘶𝘯 𝘛𝘪𝘮𝘦 -* 58 seconds 
*│🕵️‍♂️ 𝘙𝘢𝘮 𝘜𝘴𝘦 -* 49.44MB / 63276MB
*╰──────────●●►*
𓆩 𝙳𝙸𝙽𝚄𝚆𝙷-𝙵𝚁𝙴𝙴_𝚇-𝙼𝙳 𓆪  
Simple & Powerful WhatsApp Bot  
Made By: 𝘿𝙄 𝙉𝙐 𝙒𝙃 - 𝙈𝘿

━━━━━━━━━━━━━━  
OWNER:  
wa.me//+94728899640?text=F-BOT  

මෙම බොට් එක 𝙁𝙍𝙀𝙀ව හදාගන්න ඕනෙ නම් උඩ number එකට msg එකක් දාන්න!

━━━━━━━━━━━━━━  

⚙️ MENU PANEL ⚙️  
> .menu – Show all commands  
> .alive – Bot active check  
> ping – Speed test 
> block
> unblock
> jid
> vv (view once)
> fo/ forward
Extra Features:  
✓ Status Seen (Auto)  
✓ Status React/Like (Auto)
✓ Status Save cmd (save,dapan,evanna and other....)
✓ Anti Call enable (Auto)
- _other feture comming soon...

━━━━━━━━━━━━━━  

JOIN OUR WHATSAPP CHANNELS:

ᴛᴇᴄʜ ᴄʜᴀɴɴᴇʟ:  
https://whatsapp.com/channel/0029Vb5XXIfDp2Q3A5zeZb1d

ᴍᴜsɪᴄ ᴄʜᴀɴɴᴇʟ:  
https://whatsapp.com/channel/0029Vb3mqn5H5JLuJO3s3Z1J

sᴛᴀᴛᴜs ᴠɪᴅᴇᴏ ᴄʜᴀɴɴᴇʟ:  
https://whatsapp.com/channel/0029VaxVCPi96H4VOKai4S3s

━━━━━━━━━━━━━━  

╭─━━━❰ *THANK YOU!* ❱━━━─╮
│ ⛦ *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅɪɴᴜᴡʜ ᴍᴅ* ⛦
╰───────────────────────╯`
                
return await conn.sendMessage(from, { image: { url: config.LOGO } , caption: msg } , { quoted: mek })
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
} catch (e) {
reply('*error!!*')
            console.log(e)
            }
    })       

cmd({
    pattern: "aliveeeeee",
    category: "main",
    react: "👋",
    desc: "cinesubz & ytsmx & sinhalasub movie downloader",
    use: ".menu",
    filename: __filename   
},
    async (conn, mek, m, { reply, isDev, from, pushname, l, q, prefix }) => {
        try {
  
        
        
const msg = `*👋 Hello ${pushname}*

*╭─     ᴄᴏᴍᴍᴀɴᴅꜱ ᴘᴀɴᴇʟ*
*│🕵️‍♂️ 𝘙𝘶𝘯 𝘛𝘪𝘮𝘦 -* ${runtime(process.uptime())} 
*│🕵️‍♂️ 𝘙𝘢𝘮 𝘜𝘴𝘦 -* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*╰──────────●●►*

*╭──────────●●►*
*│ REPO:* https://github.com/DarkSahi75/CYBER-VENOM-SONG-DL
*│ WHATSAPP CHANNEL:* https://whatsapp.com/channel/0029Vb8WOgSBPzjfG09WEn10
*│ YOUTUBE:* https://www.youtube.com/@Sahas_Tech
*╰──────────●●►*

*╭──────────●●►*
*│* *Type .menu to get the command panel 🫟* 
*╰──────────●●►*

*_Thanks For Using Our Bot 😚💗🫶_*

${config.FOOTER}`
                
return await conn.sendMessage(from, { image: { url: config.LOGO } , caption: msg } , { quoted: mek })
await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 
} catch (e) {
reply('*error!!*')
            console.log(e)
            }
    })       


cmd({
    pattern: "restart",
    react: "⚙️",
    desc: "To shutdown the bot",
    category: "",
    use: '.shutdown',
    filename: __filename
},
async(conn, mek, m,{from, prefix, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{               

  var BOTOW = ''
if(config.LANG === 'SI') BOTOW = "*ඔබ Bot\'s හිමිකරු හෝ  උපපරිපාලක නොවේ !*"
else BOTOW = "*You are not bot\'s owner or moderator !*" 
  if(!isOwner) return await reply(BOTOW)
                reply(`Bot shutdown few 10 seconds...`)
	const restartInterval = 30 * 60 * 1000; 
	setInterval(restartInterval);
                await sleep(10000)
                process.exit()
		
 await conn.sendMessage(from, { react: { text: `✅`, key: mek.key }}) 

} catch (e) {
reply('*🛑 This is an owner command...*')
l(e)
}
}) 	


/*const { exec } = require('child_process');

const restartInterval = 30 * 60 * 1000; 

const restartApp = () => {
    console.log('Restarting application...');
    exec('node your-script.js', (error, stdout, stderr) => {
        if (error) {
            console.error(`Error restarting application: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Error output: ${stderr}`);
            return;
        }
        console.log(`Application restarted: ${stdout}`);
    });
};

restartApp();

setInterval(restartApp, restartInterval);*/






cmd({
    pattern: "ping",
    desc: "Check bot's response time.",
    category: "main",
    react: "🪄",
    filename: __filename
}, async (conn, mek, m, { from, quoted, reply }) => {
    try {
 
        const startTime = Date.now();
        const message = await conn.sendMessage(from, { text: '*_DIXMD PING IS...._* ❗' });
        const endTime = Date.now();
        const ping = endTime - startTime;

        // Send the ping response without buttons
        await conn.sendMessage(from, { text: `*📍 DXMD Pong : ${ping} Ms*` }, { quoted: message })
    } catch (e) {
        console.error(e);
        reply(`${e}`);
  }
});    



/*
cmd({
    pattern: "forward",
    desc: "forward msgs",
    alias: ["fo"],
    category: "main",
    use: '.forward < Jid address >',
    filename: __filename
},

async (conn, mek, m, { from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {

if (!isOwner) {
	return reply("*Owner Only ❌*")}
	
if ( !mek.quoted) {
reply("*give me message ❌*")
}

if(!q) return reply('please give me jids')

const data = q.split(" , ")[0]



	
let p;
let message = {}

            message.key = mek.quoted?.fakeObj?.key;

            if (mek.quoted?.documentWithCaptionMessage?.message?.documentMessage) {
            
		let mime = mek.quoted.documentWithCaptionMessage.message.documentMessage.mimetype

const mimeType = require('mime-types');
let ext = mimeType.extension(mime);		    

                mek.quoted.documentWithCaptionMessage.message.documentMessage.fileName = (p ? p : mek.quoted.documentWithCaptionMessage.message.documentMessage.fileName) + "." + ext;
            }

            message.message = mek.quoted;
	
for(let i=0; i<data.length;i++){
const mass =  await conn.forwardMessage(data[i], message, false)
}
return reply(`*Message forwarded to:*\n\n ${data}`)
            
})*/


cmd({
    pattern: "forward",
    desc: "forward msgs",
    alias: ["fo"],
    category: "main",
    use: '.forward < Jid address >',
    filename: __filename
},

async (conn, mek, m, { from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {

if (!isOwner) {
	return reply("*Owner Only ❌*")}
	
if ( !mek.quoted) {
reply("*give me message ❌*")
}

if(!q) return reply('please give me jids')

const data = q.split(",")



	
let p;
let message = {}

            message.key = mek.quoted?.fakeObj?.key;

            if (mek.quoted?.documentWithCaptionMessage?.message?.documentMessage) {
            
		let mime = mek.quoted.documentWithCaptionMessage.message.documentMessage.mimetype

const mimeType = require('mime-types');
let ext = mimeType.extension(mime);		    

                mek.quoted.documentWithCaptionMessage.message.documentMessage.fileName = (p ? p : mek.quoted.documentWithCaptionMessage.message.documentMessage.fileName) + "." + ext;
            }

            message.message = mek.quoted;
	
for(let i=0; i<data.length;i++){
const mass =  await conn.forwardMessage(data[i], message, false)
}
return reply(`*Message forwarded to:*\n\n ${data}`)
            
})

