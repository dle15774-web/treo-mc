const { Client } = require('discord.js-selfbot-v13');
const client = new Client({ checkUpdate: false });
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Minecraft RPC đang chạy vĩnh viễn!');
});
app.listen(process.env.PORT || 3000);

client.on('ready', async () => {
  console.log(`Đã đăng nhập: ${client.user.tag}`);
  
  client.user.setPresence({
    activities: [{
      name: "Minecraft",
      type: "PLAYING",
      assets: {
        largeImage: "minecraft_logo",
        largeText: "Survival Mode"
      },
      state: "Đang sinh tồn cùng bạn bè",
      details: "Chơi trên Server 24/7",
      startTimestamp: 1713400000000 // Giữ nguyên số này để mốc thời gian luôn đếm tiếp không bị reset về 0
    }],
    status: "online"
  });
});

// Code sẽ tự động lấy Token được cấu hình an toàn trên Render
client.login(process.env.DISCORD_TOKEN);
