const config = require('../settings');
const prefix = config.PREFIX;
const { cmd } = require('../lib/command');

cmd({
  pattern: "daraz",
  react: "🗣️",
  desc: "Render Paid Promotion Plans",
  category: "main",
  use: '.render',
  filename: __filename
}, async (conn, m) => {
  try {
    const from = m.chat;
    const pushname = m.pushName || "User";

    const caption = `𝙷𝙴𝚈 *" ${pushname} "* 
𝐈 𝐀𝐌 𝐂𝐀𝐒𝐏𝐄𝐑 𝐌𝐃 𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐁𝐎𝐓🪄🇱🇰
✘ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴠɪꜱʜᴡᴀ ᴏꜰᴄ✘

𝗨𝘀𝗲𝗳𝘂𝗹𝗹 𝗺𝘂𝗹𝘁𝗶𝗱𝗲𝘃𝗶𝗰𝗲 𝘄𝗵𝗮𝘁𝘀𝗮𝗽𝗽 𝗯𝗼𝘁 🤖 

ᴄʟɪᴄᴋ ᴜɴᴅᴇʀ ʙᴜᴛᴛᴏɴꜱ ɢᴇᴛ ʙᴏᴛ ᴍɪɴɪ ᴄᴏᴍᴍᴀɴᴅꜱ👨‍💻☏
`;

    await conn.sendMessage(from, {
      image: { url: "https://files.catbox.moe/an8irm.jpg" },
      caption: caption,
      buttons: [
        { buttonId: prefix + '.1reply', buttonText: { displayText: '🛍 Daraz Orders සදහා              .' }, type: 1 },
        { buttonId: prefix + '2reply', buttonText: { displayText: '❓ Daraz  ගැටලු සදහා            .' }, type: 1 },
        { buttonId: prefix + '3reply', buttonText: { displayText: ' 🚚 Orders Tracking                    .' }, type: 1 },
        { buttonId: prefix + '4reply', buttonText: { displayText: '👩‍💻 පාරිබෝගික සහය සදහා' }, type: 1 },
        { buttonId: prefix + '5reply', buttonText: { displayText: '🚛 Delivery ගාස්තු ගැන          .' }, type: 1 }
      ],
      headerType: 4,
      viewOnce: true
    }, { quoted: m });

  } catch (e) {
    await m.reply('*ERROR !!*');
    console.error(e);
  }
});

//1st Reply

cmd({
  pattern: ".1reply",
  react: "✔️",
  desc: "Render 1 Hour Promotion Plan",
  category: "main",
  use: '.render',
  filename: __filename
}, async (conn, m) => {
  try {
    const from = m.chat;
    const pushname = m.pushName || "User";

    const caption = `" අප සමග සම්බන්ධ වූවාට ස්තූතියි.  " 

━━━━━━━━━━━━━━━━

* ඔබට Daraz Orders දමා ගැනීම සදහා , 

01. *ඔබට අවශ්‍ය භාණ්ඩයේ Product එකේ Link එක හා*

02. *Size Colours ඇත්නම් ඒවාද එවන්න.*

━━━━━━━━━━━━━━━━

> 𝗦𝗿𝗶 𝗟𝗮𝗻𝗸𝗮 𝗡𝗼.𝟭 𝗗𝗮𝗿𝗮𝘇 𝗟𝗶𝗻𝗸 𝗖𝗵𝗮𝗻𝗻𝗲𝗹`;

    await conn.sendMessage(from, {
      image: { url: "https://i.ibb.co/dwBGYx0m/DiNuWhMd.jpg" },
      caption: caption
    }, { quoted: m });

  } catch (e) {
    await m.reply('*ERROR !!*');
    console.error(e);
  }
});
//2ndreply

cmd({
  pattern: "2reply",
  react: "🔌",
  desc: "Render 1 Hour Promotion Plan",
  category: "main",
  use: '.render',
  filename: __filename
}, async (conn, m) => {
  try {
    const from = m.chat;
    const pushname = m.pushName || "User";

    const caption = `ඔබට Daraz හා සම්බන්ධ ගැටලුවක් ඇත්නම් පහත දුරකතන අංකය හා සම්බන්ධ වී ඔබට ගැටලුව විසදා ගත හැක. 

🔵 *Daraz Head Office Contact Number*

📞 - 0117 575 600

> 𝗦𝗿𝗶 𝗟𝗮𝗻𝗸𝗮 𝗡𝗼.𝟭 𝗗𝗮𝗿𝗮𝘇 𝗟𝗶𝗻𝗸 𝗖𝗵𝗮𝗻𝗻𝗲𝗹`;

    await conn.sendMessage(from, {
      image: { url: "https://i.ibb.co/7tXxhh2S/DiNuWhMd.jpg" },
      caption: caption
    }, { quoted: m });

  } catch (e) {
    await m.reply('*ERROR !!*');
    console.error(e);
  }
});

//3reply

cmd({
  pattern: "3reply",
  react: "💡",
  desc: "Render 1 Hour Promotion Plan",
  category: "main",
  use: '.render',
  filename: __filename
}, async (conn, m) => {
  try {
    const from = m.chat;
    const pushname = m.pushName || "User";

    const caption = `🟣 Daraz ඔබගේ Orders සතියක් පසු වී තවම ලැබුනේ නැතිනම් ඔබට Order එක දමා එවන Screenshot එකේ Order Number එක තියෙනවා.

🟣 ඒක අපිට Type කරල නිවැරදිව එවන්න…!!

> ( පැය 2 ක් ඇතුලත ඔබගේ Tracking පරික්ෂා කර අපි දැනුවත් කරන්නම් !! )️`;

    await conn.sendMessage(from, {
      image: { url: "https://i.ibb.co/CpLHgrcP/DiNuWhMd.jpg" },
      caption: caption
    }, { quoted: m });

  } catch (e) {
    await m.reply('*ERROR !!*');
    console.error(e);
  }
});

//4reply

cmd({
  pattern: "4reply",
  react: "🖥️",
  desc: "Render 1 Hour Promotion Plan",
  category: "main",
  use: '.render',
  filename: __filename
}, async (conn, m) => {
  try {
    const from = m.chat;
    const pushname = m.pushName || "User";

    const caption = `කරුණාකර මොහොතක් රැදී සිටින්න !!

 අප නියෝජිතයින් මේ මොහොතේ කාර්‍යබහුල බැවින්,

 ඔබ හා ඉක්මනට සම්බන්ධ වීමට බලාපොරොත්තු වෙමි ..!! 🥰

> ඔබගේ රැදී සිටීමට ස්තූතියි !!`;

    await conn.sendMessage(from, {
      image: { url: "https://i.ibb.co/MyRG2v1p/DiNuWhMd.jpg" },
      caption: caption
    }, { quoted: m });

  } catch (e) {
    await m.reply('*ERROR !!*');
    console.error(e);
  }
});
//5Reply

cmd({
  pattern: "5reply",
  react: "📂",
  desc: "Render 1 Hour Promotion Plan",
  category: "main",
  use: '.render',
  filename: __filename
}, async (conn, m) => {
  try {
    const from = m.chat;
    const pushname = m.pushName || "User";

    const caption = `🔥 \`2 + Free Delivery Sale\` 🔥

*🟣 තනිව භාණ්ඩයක් Order කිරීමේදි ,*

* රු.399 Delivery Charge එකතු වේ

═════════════════

🔵 2 + Free Delivery Sale එකෙන් Product 2 ක් Order කරන ඔබට , 

* Free Delivery 🚛
* 10 % Discount හිමි වේ...!! 🥰

═════════════════

\`Flash Sale එකේ නම්\`

🟡 ඔබ ඇනවුම් කරන සෑම භාණ්ඩයක් සදහා රු.399 Delivery ගාස්තු එකතු වේ..!! 

═════════════════

⭕ ඔයාලගෙ Orders ලැබෙන්නෙ China වලින්. එම නිසා \`සති දෙකක්\` වගේ කාලයක් යනවා ...!! ✈️📦

> 𝗦𝗿𝗶 𝗟𝗮𝗻𝗸𝗮 𝗡𝗼.𝟭 𝗗𝗮𝗿𝗮𝘇 𝗟𝗶𝗻𝗸 𝗖𝗵𝗮𝗻𝗻𝗲𝗹`;

    await conn.sendMessage(from, {
      image: { url: "https://i.ibb.co/kswCSRVw/DiNuWhMd.jpg" },
      caption: caption
    }, { quoted: m });

  } catch (e) {
    await m.reply('*ERROR !!*');
    console.error(e);
  }
});