const { cmd, commands } = require('../command');
const config = require('../config');
const {readEnv} = require('../lib/database');
const os = require('os');
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, fetchJson, runtime, sleep } = require('../lib/functions');
const imgUrl = 'https://files.catbox.moe/zzez8c.jpg'; // This image URL seems unnecessary

//-----------------------------------------------ALive-----------------------------------------------

cmd({
    pattern: "alive",
    desc: "Check bot online or not.",
    category: "general",
    react: "🪄",
    filename: __filename
}, async (conn, mek, m, { from, prefix, pushname, reply }) => {
    try {
        let hostname;
        // Determine the hosting service based on the hostname length
        if (os.hostname().length == 12) hostname = 'replit';
        else if (os.hostname().length == 36) hostname = 'heroku';
        else if (os.hostname().length == 8) hostname = 'koyeb';
        else hostname = os.hostname();

        // Create the text response with system details
        let monspace = '```';
        const snm = `👋 ${monspace} Hello ${pushname}, I'm alive now ${monspace}

_*𝐂𝐀𝐒𝐏𝐄𝐑-𝐌𝐃 𝐌𝐈𝐍𝐈 𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐁𝐎𝐓.𝐌𝐀𝐃𝐄 𝐁𝐘 𝐕𝐈𝐒𝐇𝐖𝐀 𝐎𝐅𝐂✨🪄*_

> *Version:* ${require("../package.json").version}
> *Memory:* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${(os.totalmem() / 1024 / 1024).toFixed(2)}MB
> *Runtime:* ${runtime(process.uptime())}
> *Hostname:* ${hostname}
✘𝐂𝐚𝐬𝐩𝐞𝐫 𝐌𝐢𝐧𝐢 𝐰𝐚 𝐁𝐨𝐭 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐬✘🤖

 🪄☏.Alive (ɢᴇᴛ ʙᴏᴛ ᴍᴇɴᴜ)
 🪄☏.Ping (ʙᴏᴛ ᴘɪɴɢ)
 🪄☏.System (ʙᴏᴛ ꜱʏꜱᴛᴇᴍ)
 🪄☏.Video (ᴅᴏᴡɴʟᴀᴏᴅ ᴠɪᴅᴇᴏ ɪɴ ʏᴛ)
 🪄☏.Status (ʙᴏᴛ ᴜᴘᴛɪᴍᴇ)
 🪄☏.Fakenumber (ʏᴏᴜ ᴄᴀɴ ɢᴇᴛ ᴛᴇᴍᴘ ɴᴜᴍʙᴇʀ)
 🪄☏.Sendc (ᴄʜᴀɴɴᴇʟ ꜱᴏɴɢ ᴜᴘ ᴄᴏᴍᴍᴀɴᴅ)
 🪄☏.Play (ᴅᴏᴡɴʟᴏᴀᴅ ᴀɴʏ ꜱᴏɴɢꜱ)
 🪄☏.Jid (ɢᴇᴛ ᴘᴇʀꜱᴏɴ,ᴄʜᴀɴɴᴇʟ,ᴏʀ ɢʀᴏᴜᴘ ᴊɪᴅ)
 🪄☏.Vcf (ɢᴇᴛ ɢʀᴏᴜᴘ ᴀʟʟ ᴄᴏɴᴛᴀᴄᴛꜱ)
 🪄☏.Fancy (ʏᴏᴜ ᴄᴀɴ ɢᴇᴛ ᴀɴʏ ᴛᴇxᴛ ꜱᴛʏʟᴇꜱ)
 🪄☏.Owner (ᴄᴏɴᴛᴀᴄᴛ ᴄᴀꜱᴘᴇʀ-ᴍᴅ ᴏᴡɴᴇʀ)


*☘️ Follow our channel:* https://whatsapp.com/channel/0029VbAyqatKLaHuFEEx1T3x

*ᴄᴀꜱᴘᴇʀ ᴍᴅ ᴡʜᴀᴛꜱᴀᴘᴘ ᴍɪɴɪ ʙᴏᴛ🤖*
> ℂ𝕣𝕖𝕒𝕥𝕖𝕕 𝔹𝕪 𝕍𝕚𝕤𝕙𝕨𝕒 𝕆𝕗𝕔`;

        // Sending the audio message
        await conn.sendMessage(from, {
            audio: { url: 'https://files.catbox.moe/94hw3g.mp3' },
            mimetype: 'audio/mp4', // Corrected mime type
            ptt: true
        }, { quoted: mek });

        // Sending the image message
        const sentMsg = await conn.sendMessage(from, {
            image: { url: imgUrl },  // Provide a valid image URL
            caption: snm,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterName: 'ᴄᴀꜱᴘᴇʀ-ᴍᴅ ꜱᴜᴘᴘᴏʀᴛ',
                    newsletterJid: "120363417168743361@newsletter",
                }
            }
        }, { quoted: mek }); // Replaced 'mak' with 'mek'

    } catch (e) {
        reply('*Error !!*');
        console.log('Error details:', e); // More specific error logging
    }
});

//------------------ Ping ---------------------//

cmd({
    pattern: "ping",
    desc: "Check bot's response time.",
    category: "main",
    react: "✅",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        const startTime = Date.now()
        const message = await conn.sendMessage(from, { text: '*⚡  ʀᴜɴɪɴɢ ʀᴇsᴘᴏɴᴅ...*' })
        const endTime = Date.now()
        const ping = endTime - startTime
        await conn.sendMessage(from, { text: `*ᴘᴏɴɢ*: ${ping} *_ᴍꜱ_*` }, { quoted: message })
    } catch (e) {
        console.log(e)
        reply(`${e}`)
    }
});

//------------------ System ---------------------//

cmd({
    pattern: "system",
    desc: "Check bot online or no.",
    category: "general",
    react: "✅",
    filename: __filename
},
async (conn, mek, m, { from, prefix, pushname, reply }) => {
    try {
        let hostname;
        if (os.hostname().length == 12) hostname = 'replit';
        else if (os.hostname().length == 36) hostname = 'heroku';
        else if (os.hostname().length == 8) hostname = 'koyeb';
        else hostname = os.hostname();

        const sssf = `*ᴄᴀꜱᴘᴇʀ-ᴍᴅ*
        
🎉 *Version :* ${require("../package.json").version}
🗃️ *Memory :* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${(os.totalmem() / 1024 / 1024).toFixed(2)}MB
⏱️ *Runtime :* ${runtime(process.uptime())}
📍 *Platform :* ${hostname}
👤 *Owner :* 𝐕𝐢𝐬𝐡𝐰𝐚 𝐎𝐟𝐜👨‍💻
`;

        await conn.sendMessage(from, {
            text: sssf,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterName: 'ᴄᴀꜱᴘᴇʀ-ᴍᴅ ꜱᴜᴘᴘᴏʀᴛ🤖',
                    newsletterJid: "120363417168743361@newsletter",
                }
            }
        }, { quoted: mek });
        
    } catch (e) {
        reply('*Error !!*');
        console.log(e);
    }
});


//------------------ status ---------------------//

cmd({
    pattern: "status",
    desc: "Check bot status",
    category: "main",
    react: "✅",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Construct the bot status message
        const botStatus = `*ᴄᴀꜱᴘᴇʀ-ᴍᴅ🤖*
        
*╭───────────────◈◈►*
*│ 👾 Bot Status: Online*
*│ 📆 Date: ${new Date().toLocaleDateString()}*
*│ ⏰ Time: ${new Date().toLocaleTimeString()}*
*╰───────────────◈◈►*
`;

        await conn.sendMessage(from, {
            text: botStatus,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterName: 'ᴄᴀꜱᴘᴇʀ-ᴍᴅ ꜱᴜᴘᴘᴏʀᴛ🤖',
                    newsletterJid: "120363417168743361@newsletter",
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply(`Error: ${e.message}`);
    }
});
