const TelegramBot = require("node-telegram-bot-api");

// Replace with your actual token
const token = "8156031408:AAGAy25l1azz8MZ2gYWRGQUOSgQw1QSFT_s";

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

// Listen for new chat members
bot.on("new_chat_members", (msg) => {
  const chatId = msg.chat.id;
  const newMembers = msg.new_chat_members;

  newMembers.forEach((member) => {
    const welcomeMessage = `Welcome, ${member.first_name}!`;
    bot.sendMessage(chatId, welcomeMessage);
  });
});

console.log("Bot is running...");
