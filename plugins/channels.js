const config = require("../config");
const { cmd } = require('../command');
const yts = require("yt-search");
const ddownr = require("denethdev-ytmp3");

async function handleSongDownload(m, q, msg, reply, jid) {
  try {
    if (!q) return reply("*Please Provide A Song Name or Url 🙄*");

    const search = await yts(q);
    if (!search || search.videos.length === 0) {
      return reply("*No Song Found Matching Your Query 🧐*");
    }

    const video = search.videos[0];
    const url = video.url;
    const result = await ddownr.download(url, "mp3");

    const caption = `*☘️𝐓𝐢𝐭𝐥𝐞* - ${video.title}\n\n` +
                    `▫️ Ｄᴜʀᴀᴛɪᴏɴ - ${video.timestamp}\n` +
                    `▫️ Ｕᴘʟᴏᴀᴅᴇʀ - ${video.author.name}\n` +
                    `▫️ Ｖɪᴇᴡꜱ - ${video.views}\n\n\n${config.FOOTER}`;

    await m.sendMessage(jid, {
      image: { url: video.thumbnail },
      caption
    }, { quoted: msg });

    await m.sendMessage(jid, {
      audio: { url: result.downloadUrl },
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
