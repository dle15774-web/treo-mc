const { Client } = require('discord.js-selfbot-v13');
const client = new Client({ checkUpdate: false });
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Minecraft RPC đang chạy vĩnh viễn!');
});
app.listen(process.env.PORT || 3000);

client.on('ready', async () => {
  console.log(`Đã đăng nhập thành công vào tài khoản: ${client.user.tag}`);
  
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
      startTimestamp: Date.now() // Đã sửa thành hàm lấy thời gian thực chuẩn của Discord
    }],
    status: "online"
  });
});

client.login(process.env.DISCORD_TOKEN);
