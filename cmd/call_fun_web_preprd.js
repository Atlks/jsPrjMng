

//nohup node_modules/.bin/node-dev  cmd/call_fun_web_prd.js &

global['token']="6620532731:AAFPBYTE5jfsAkjvUQn-y5TmdhTvyGMV5Js"

global['grpid']=-4038077884

// nohup node_modules/.bin/node-dev  cmd/call_fun_web_preprd.js &


TelegramBot = require('node-telegram-bot-api');
// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: false});
// const bot = global['bot']
//   bot.sendMessage()
global['bot'] = bot



require("../libBiz/callweb")