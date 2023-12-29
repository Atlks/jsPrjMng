


global['apiurl2023'] = "https://dtinterface.1saeda.com"
global['token']="6643664645:AAHTiqen1zXDRdMDhl8j8Kz25ebY9xQaEpc"

global['grpid']=-1001847884546

// nohup node_modules/.bin/node-dev  cmd/call_fun_web_preprd.js &


TelegramBot = require('node-telegram-bot-api');
// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: false});
// const bot = global['bot']
//   bot.sendMessage()
global['bot'] = bot


require("../libBiz/callweb")


