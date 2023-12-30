<?php


require __DIR__ . '/../vendor/autoload.php';

require_once __DIR__ . '/../lib/markdown.php';

//@msgbot2053bot
$GLOBALS['BOT_TOKEN'] = '6959066432:AAH9OgIspApiYStnaNyznl7mcJ_qPjBA7Fg';
$GLOBALS['chat_id'] = -4038077884;  //msgnode

$text=file_get_contents(__DIR__."/../db/startInfo.md");
//$text = \app\common\Helper::replace_markdown($text);
require_once __DIR__ . '/../lib/markdown.php';
  $text = encodeMkdwn($text);

$bot = new \TelegramBot\Api\BotApi($GLOBALS['BOT_TOKEN']);
$cfile = new \CURLFile(__DIR__ . "/../public/static/start.jpg");
$bot->sendPhoto($GLOBALS['chat_id'], $cfile, $text, null, null, null, false, "MarkdownV2");
//    $bot->sendMessage(chatid,txt,parsemode,replyMsgID)


