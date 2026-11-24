import 'dotenv/config';
// Contact details
global.sessionid = process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VU25KiSBD9l3rVGG6KaERHDAjIRQXFG27sQwkFFnKTKkSc8N83sLt35mF3tvetSLLynDx5Kn+AvMAE2agFkx+grPANUtQdaVsiMAFKHUWoAn0QQgrBBDjySmv15SOd6gfRtRf4LpoQs3mlwYMfR3yklbNcWFrbPfsGnn1Q1qcUB78pqLcpG0BWqY+347zpbazHRadJ5B5GtMhz4sNWnLbWgcTx4g08u4oQVziPtfKMMlTB1EatC3H1Nfo9OZobobPLCu/ObhVLrCKDLJIdY/ZaZlpzaUBLXcGbUF98jX6gNPlGuTYPWdhxvq5wx4OW7LPEO5+ThDN58dQTyJxZ1pn/Tp/gOEehGaKcYtp+WXdbL0XXW0ux0Qbr8Qnpu1HIe8GN34zOhbgjU2OhnIR0Ls3MrxEX1rDeC6tt5YrMyhj3ODScDnbDWU1mZhs42wNeq0tVVu2z9Ctxt/r0yuX/6A5ltbgoHFzrj2jvNYSZmtpmUx5gqTTB9p4fk31S3ey8EVZfoz84jTBmpXOJy+v66E5192COL7F2deBFx/VKmM/qq6DEjGr+pA9pXf2OpcH7Htkh2T6tVa4UL5p/LwJf8xikPW7rTW0F7Vq3iq0jPNTaV0VpXHNuW/RE+6L6qLfyJEP07N5pRrepcVO5QLgJcvz26uiCWjMEE+7ZBxWKMaEVpLjIu5jA9gEMbx4KKkRf6gK/XjzklXJYx6nioOo8Gum2bo6csyU/Vl7EcCPDT5ieuyLmG+iDsioCRAgKDUxoUbULRAiMEQGTP/7sgxzd6fvcXmhcH0S4InSb12VawPBzqJ8/YRAUdU69Ng+m3QFVYML+DCNKcR6TTsY6h1Vwxjc0PUNKwCSCKUF/N4gqFH7E+qAq6u6amUfFbwYwVUzTbGK9E+wDr8sOEYU4JV3CEu7qA1kRV+C5xvdlLMu2LHcafPL7nPO7kEFW5kyzkBuHV0d7d3akPQ1uHL9wlHLOOmuJT9xQ4j1pK/1TETAB8+QsGyW7Wvmxkxyzqdb4uipFhdsoW/GO7dgyrtRyLvHtykhm2myOlTkMZ6xisd51sGQdQWLIWCrbk9cz7jvFFeldlt86tBDdcIB+BXPEptR5g9MzO79v9AHjV6qnPXwsH/aaIJkbZj4sdfVwt9QrvhbCMeEVYW0qqarqxTBlLFvmWbRr6T2IhHxQTgkbqh8OzF7WxyGYgPFgJPLciB8OBhP+O/nWdPODZfktRxT0QfpKGrBDSeI5fjQUB5I44b934c+XlH5sMPwyWVe2+4wwei2EHHZg/wXz3n5nO/bZ/6XCx4L5F48oB+t6ZCRVXqg07nHJPTtF59nlkdlqDL2xeomWxUOIlpeb7oLn888+KFNIo6LKuj2Uh1WBw65HSKj80+kbnCFCYVaCCTcaD1luIPDS8y/qz+PDHgcAAA==';
global.dbSite = process.env.DB_SITE || '';
global.ytname = process.env.YT_NAME || "YT: @EliteProTechs";
global.socialm = process.env.SOCIAL_M || "GitHub: EliteProTech";
global.location = process.env.LOCATION || "Nigeria, Port Harcourt";

// Creator details
global.prefix = process.env.PREFIX || '.';
global.ownername = process.env.OWNER_NAME || 'ElitePro';
global.botname = process.env.BOT_NAME || 'ᘔYᑎᑫOᖇᗩ-ᗰᗪ';

// Settings: true=enable false=disable
global.autoRecording = process.env.AUTO_RECORDING === 'true';
global.autoTyping = process.env.AUTO_TYPING === 'true';
global.autorecordtype = process.env.AUTO_RECORD_TYPE === 'true';
global.autoread = process.env.AUTO_READ === 'true';
global.autobio = process.env.AUTO_BIO === 'true';
global.autoviewstatus = process.env.AUTO_VIEW_STATUS === 'true';
global.welcome = process.env.WELCOME === 'true';
global.autoreact = process.env.AUTO_REACT === 'true';
global.autolikestatus = process.env.AUTO_LIKE_STATUS === 'true';
global.autoOffline = process.env.AUTO_OFFLINE === 'true';

// Sticker details
global.packname = process.env.PACKNAME || 'Sticker By';
global.author = process.env.AUTHOR || 'EliteProTech\n\nContact: +2347047504860';
// Default settings 2
global.wm = process.env.WM || "Youtube @EliteProTechs";
global.link = process.env.LINK || 'https://whatsapp.com/channel/0029VaXaqHII1rcmdDBBsd3g';

// Reply messages
global.mess = {
    done: '✅ Task completed successfully!',
    prem: '⚠️ Access denied. This feature is for premium users only.',
    admin: '⚠️ Only group admins can use this command.',
    botAdmin: '⚠️ I need to be a group admin to use this command.',
    owner: '⛔ Command restricted to the bot owner.',
    group: 'ℹ️ This command can only be used in group chats.',
    private: 'ℹ️ This command can only be used in private chats.',
    wait: '⏳ Processing your request... Please wait a moment.',
    error: '❌ An unexpected error occurred. Please try again later.',
};
