const config = require("../settings");
const { cmd } = require('../lib/command');
const yts = require("yt-search");
const bold = "*"
const axios = require("axios");

async function handleSongDownload(m, q, msg, reply, jid) {
  try {
    if (!q) return reply("*Please Provide A Song Name or Url 🙄*");

    const search = await yts(q);
    if (!search || search.videos.length === 0) {
      return reply("*No Song Found Matching Your Query 🧐*");
    }

    const video = search.videos[0];
    const url = video.url;
       const apiUrl = `https://kaliyax-api.vercel.app/api/yto?url=https://youtu.be/Afv5rLTDUo8?si=8b1c6vHLOW_tuH1b${encodeURIComponent(url)}`;

    const { data } = await axios.get(apiUrl);

    if (!data.data.download.status) return reply("KaLiYaX Api Down ❌");

    const { title, thumbnail, timestamp, views} = data.data.metadata;
const author = data.data.metadata.author.name
const dlurl = data.data.download.url

    const caption = `☘️ *Tɪᴛʟᴇ :* ${bold}${title}${bold}\n\n` +
                    `▫️⏱️ *Dᴜʀᴀᴛɪᴏɴ :* ${timestamp}\n` +      
                    `▫️👁️ *Ｖɪᴇᴡꜱ:* ${views}\n\n\n${config.FOOTER}`;

    await m.sendMessage(jid, {
      image: { url: thumbnail },
      caption
    }, { quoted: msg });

    await m.sendMessage(jid, {
      audio: { url: dlurl },
      mimetype: "audio/mpeg",
      ptt: true
    }, { quoted: msg });

  } catch (err) {
    console.error(err);
    reply("*An Error Occurred While Processing Your Request 😔*");
  }
}

// .voice command (replies to sender)
cmd({
  pattern: 'voice',
  desc: "Download songs.",
  category: "download",
  react: '🎧',
  filename: __filename
}, async (m, match, msg, { from, reply, q }) => {
  await handleSongDownload(m, q, msg, reply, from);
});

// .sv command (sends to config.JID)
cmd({
  pattern: 'sv',
  desc: "Download songs.",
  category: "download",
  react: '🎧',
  filename: __filename
}, async (m, match, msg, { reply, q }) => {
  await handleSongDownload(m, q, msg, reply, config.JID);
});
