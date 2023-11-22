



global['token']="6411257533:AAFQI8JMckmNy9HXFdXLU_9cLnLDeyi-5Hc"

global['grpid']=-4038077884   //msgnode

global['apiurl2023'] = "https://ng.mqbsx.com"
global['apiurl2023'] = "https://dtinterface.1saeda.com"

// nohup node_modules/.bin/node-dev  cmd/call_fun_web.js &


TelegramBot = require('node-telegram-bot-api');
// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: false});
// const bot = global['bot']
//   bot.sendMessage()
global['bot'] = bot




require("../libBiz/callweb")
