const TelegramBot = require("node-telegram-bot-api");
require("dotenv").config(); // Load environment variables from .env file

// Get the token from environment variables
const token = process.env.TELEGRAM_BOT_TOKEN;
// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

// Listen for new chat members
bot.on("new_chat_members", (msg) => {
  const chatId = msg.chat.id;
  const newMembers = msg.new_chat_members;

  newMembers.forEach((member) => {
    const welcomeMessage = `${member.first_name} just landed, Welcome to Satushi Nukumutu Community 🎉\n\nWe spread Bitcoin virus and DeFi on Stacks. Join the squad and let's grow together! 🚀`;

    // Define the inline keyboard buttons
    const options = {
      reply_markup: {
        inline_keyboard: [
          [
            { text: "Buy $Nukumutu", url: "https://stx.city/bonding-curve/SPRCBFRWXDG7KWX9AFRK4W1SRDF9ESD35WCFXSGE.satushi-nukumutu-stxcity-dex/SPRCBFRWXDG7KWX9AFRK4W1SRDF9ESD35WCFXSGE.satushi-nukumutu-stxcity/SP2BN9JN4WEG02QYVX5Y21VMB2JWV3W0KNHPH9R4P" },
            { text: "Twitter(X)", url: "https://x.com/nukumutu_btc" },
          ],
        ],
      },
    };

    // Send a photo with the welcome message and buttons
    const photoUrl = "https://i.imgur.com/22pYI44.jpeg"; // Replace with your actual photo URL
    bot.sendPhoto(chatId, photoUrl, { caption: welcomeMessage, ...options });
  });
});

console.log("Bot is running...");
