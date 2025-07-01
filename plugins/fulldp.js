const {
  cmd
} = require('../lib/command');
const {
  downloadContentFromMessage
} = require('@whiskeysockets/baileys');
const fs = require('fs');
const path = require('path');

cmd({
  pattern: "setfulldp",
  alias: ["sfdp"],
  react: "✅",
  desc: "Mention කළ photo එක Bot Profile Picture එක කරන්න",
  category: "owner",
  filename: __filename,
},
async (conn, mek, m, { reply }) => {
  try {
    // Only bot owner
    if (m.sender !== conn.user.id) return reply("මේ කමාන්ඩ් එක run කරන්න පුළුවන් bot session owner ට විතරයි!");

    if (!m.quoted || m.quoted.type !== 'imageMessage') {
      return reply("කරුණාකර image එකක් mention කරන්න!");
    }

    let mime = m.quoted.mimetype || '';
    if (!/image\/(jpe?g|png)/.test(mime)) return reply("මෙන්න image එකක් mention කරන්න!");

    const stream = await downloadContentFromMessage(m.quoted, 'image');
    let buffer = Buffer.from([]);

    for await (const chunk of stream) {
      buffer = Buffer.concat([buffer, chunk]);
    }

    await conn.updateProfilePicture(conn.user.id, buffer);
    reply("Bot profile picture එක update කළා!");
  } catch (e) {
    console.log("SetFullDP Error:", e);
    reply("Error එකක් ආව: " + e.message);
  }
});
