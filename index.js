const TelegramBot = require("node-telegram-bot-api");
const token = "abc your token";
const bot = new TelegramBot(token, { polling: true });

bot.on("message", (message) => {
  // Reply to the message
  bot.sendMessage(message.chat.id, "Hello, I am a bot!");
});





