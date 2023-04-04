const TelegramBot = require('node-telegram-bot-api');
const base64 = require('base-64')
const utf8 = require('utf8')
require('dotenv').config()

// replace the value below with the Telegram token you receive from @BotFather
const token = process.env.TOKEN;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

var domains = ["mci.ircf.space","mtn.ircf.space","rtl.ircf.space","mkh.ircf.space","hwb.ircf.space","ast.ircf.space","sht.ircf.space","prs.ircf.space","mbt.ircf.space","rsp.ircf.space","ztl.ircf.space","psm.ircf.space","smt.ircf.space"]
var names = ["Hamrah","Irancell", "Rightel", "Mokhaberat", "Hiweb", "Asiatech", "Shatel", "Pars Online", "MobinNet", "Respina", "Zitel", "Pishgaman", "Samantel"]

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.onText(/\/vmess (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const resp = match[1]

    var configg = resp.replace(/vmess:\/\//gm,'')
    var bytes = base64.decode(configg);
    var text = utf8.decode(bytes);
    var list = JSON.parse(text);

    var count = 0


    for (i in domains) {
        list.add = domains[i]
        list.ps = names[i]
        liststr = JSON.stringify(list)
        var bytes2 = utf8.encode(liststr)
        var newconfig = base64.encode(bytes2)
        var newvmess = "vmess://" + newconfig;
        var text2

        switch (count) {
          case 0:
            text2 = "همراه اول";
            break;
          case 1:
            text2 = "ایرانسل";
            break;
          case 2:
            text2 = "رایتل";
            break;
          case 3:
            text2 = "مخابرات";
            break;
          case 4:
            text2 = "های وب";
            break;
          case 5:
            text2 = "آسیاتک";
            break;
          case 6:
            text2 = "شاتل";
            break;
          case 7:
            text2 = "پارس آنلاین";
            break;
          case 8:
            text2 = "مبین نت";
            break;
          case 9:
            text2 = "رسپینا";
            break;
          case 10:
            text2 = "زیتل";
            break;
          case 11:
            text2 = "پیشگامان";
            break;
          case 12:
            text2 = "سامانتل";
            break;
        }

        bot.sendMessage(chatId, text2+": \n" + newvmess + " \n\n");
        count++
    }
});


bot.onText(/\/vless (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const resp = match[1]
  var count = 0

  for (i in domains) {
    var configg = resp.replace(/@(.*?):/gm,"@"+domains[i]+':')
    var text2
    switch (count) {
			case 0:
			  text2 = "همراه اول";
			  break;
			case 1:
			  text2 = "ایرانسل";
			  break;
			case 2:
			  text2 = "رایتل";
			  break;
			case 3:
			  text2 = "مخابرات";
			  break;
			case 4:
			  text2 = "های وب";
			  break;
			case 5:
			  text2 = "آسیاتک";
			  break;
			case 6:
			  text2 = "شاتل";
			  break;
			case 7:
			  text2 = "پارس آنلاین";
			  break;
			case 8:
			  text2 = "مبین نت";
			  break;
			case 9:
			  text2 = "رسپینا";
			  break;
			case 10:
			  text2 = "زیتل";
			  break;
			case 11:
			  text2 = "پیشگامان";
			  break;
			case 12:
			  text2 = "سامانتل";
			  break;
		  }

      bot.sendMessage(chatId, text2+": \n" + configg + " \n\n");
      count++
  }
})

bot.onText(/\/trojan (.+)/, (msg, match) => {
  const chatId = msg.chat.id;
  const resp = match[1]
  var count = 0
  for (i in domains) {
    var configg = resp.replace(/@(.*?):/gm,"@"+domains[i]+':')
var text2 
    switch (count) {
			case 0:
			  text2 = "همراه اول";
			  break;
			case 1:
			  text2 = "ایرانسل";
			  break;
			case 2:
			  text2 = "رایتل";
			  break;
			case 3:
			  text2 = "مخابرات";
			  break;
			case 4:
			  text2 = "های وب";
			  break;
			case 5:
			  text2 = "آسیاتک";
			  break;
			case 6:
			  text2 = "شاتل";
			  break;
			case 7:
			  text2 = "پارس آنلاین";
			  break;
			case 8:
			  text2 = "مبین نت";
			  break;
			case 9:
			  text2 = "رسپینا";
			  break;
			case 10:
			  text2 = "زیتل";
			  break;
			case 11:
			  text2 = "پیشگامان";
			  break;
			case 12:
			  text2 = "سامانتل";
			  break;
		  }

      bot.sendMessage(chatId, text2+": \n" + configg + " \n\n");
      count++
  }
})