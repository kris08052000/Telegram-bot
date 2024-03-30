const TelegramBot = require("node-telegram-bot-api");
const token = "6813397076:AAF-q_boP3DKmZ_LTSWsHavq-FSWbVb-NyU";
const bot = new TelegramBot(token, { polling: true });

bot.on("message", (message) => {
  // Reply to the message
  bot.sendMessage(message.chat.id, "Hello, I am a bot!");
});





