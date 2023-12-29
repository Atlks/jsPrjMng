
//send msg


function send(token) {
    //6357469915: AAGyKxgsBJ4NmaazHG - 6 aiAuoodeT0gJmPA   //ssc2023 bot

    TelegramBot = require('node-telegram-bot-api');
    // Create a bot that uses 'polling' to fetch new updates
    const bot = new TelegramBot(token, {polling: true});
    bot.sendMessage(chatId, text)

}