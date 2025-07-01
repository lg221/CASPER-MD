const { cmd } = require('../lib/command');

cmd({ on: "body" }, async (conn, mek, m, { body, quoted, reply }) => { try { const statesender = ["send", "dapan", "dapn", "ewhahn", "ewanna", "danna", "evano", "evpn", "ewano", "sv", "save", "දාන්නකෝ", "dpnko", "එවනෝ", "එවනො", "දාපන්", "ඕනි", "දාන්න", "sv", "one","oni"]; const lower = body.toLowerCase();

if (!quoted || (!quoted.imageMessage && !quoted.videoMessage)) return;

for (let word of statesender) {
  if (lower.includes(word) && !lower.includes("https") && !lower.includes("tent") && !lower.includes("docu")) {
    const media = await quoted.download();
    const caption = quoted.imageMessage?.caption || quoted.videoMessage?.caption || "";

    if (quoted.imageMessage) {
      await conn.sendMessage(m.chat, { image: media, caption: caption }, { quoted: mek });
    } else if (quoted.videoMessage) {
      await conn.sendMessage(m.chat, { video: media, caption: caption }, { quoted: mek });
    } else {
      reply("මෙම media format එකට supprt නැහැ.");
    }
    break;
  }
}

} catch (e) { console.error("Auto Status Plugin Error:", e.message); reply("❌ Auto Status Save එකේ Error එකක් ඇති."); } });

//සෙව් කමාන්ඩ් වලට තව ඒවා ඇඩ් කරලා ඔනී😓

