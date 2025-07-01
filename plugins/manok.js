const { cmd, commands } = require('../command');
const yts = require('yt-search');
const ddownr = require('denethdev-ytmp3'); // Importing the denethdev-ytmp3 package for downloading
const f = "`"
const bold = "*"
const config = require('../config')


cmd({
  pattern: "vishwa",
  desc: "Download songs.",
  category: "download",
  react: '🎧',
  filename: __filename
}, async (messageHandler, context, quotedMessage, { from, reply, q }) => {
  try {
    if (!q) return reply("*Please Provide A Song Name or Url 🙄*");
    
    // Search for the song using yt-search
    const searchResults = await yts(q);
    if (!searchResults || searchResults.videos.length === 0) {
      return reply("*No Song Found Matching Your Query 🧐*");
    }

    const songData = searchResults.videos[0];
    const songUrl = songData.url;
    

  const jid = "120363389486431984@newsletter";
  
    // Using denethdev-ytmp3 to fetch the download link
    const result = await ddownr.download(songUrl, 'mp3'); // Download in mp3 format
    const downloadLink = result.downloadUrl; // Get the download URL

    let songDetailsMessage = `
☘️ *Tɪᴛʟᴇ :* ${bold}${songData.title}${bold}   🙇‍♂️💗 

▫️⏱️ *Dᴜʀᴀᴛɪᴏɴ :* ${songData.timestamp} 

▫️ *React කරන්න ලමයෝ* 🇱🇰💗
 `;
    

    
    // Send the video thumbnail with song details
await messageHandler.sendMessage(jid, {
      image: { url: songData.thumbnail },
      caption: songDetailsMessage,
    }, { quoted: quotedMessage });

    

      
             await messageHandler.sendMessage(jid, {
              audio: { url: downloadLink },
              mimetype: "audio/mpeg",
                 ptt: true
            }, { quoted: quotedMessage });
            
        
    } catch (error) {
    console.error(error);
    reply("*An Error Occurred While Processing Your Request 😔*");
  }
})
