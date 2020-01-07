const request = require('request')
const fs = require('fs')
const SteamBot = require('./src/scripts/Steam')
const account = require('./src/config/accounts/alanderlt')
const bot = new SteamBot(account.userName, account.password, account.sharedSecret, account.identitySecret)
bot.setSteamId(account.steamid)
bot.setMachineAuth(account.machineAuth)
bot
  .login()
  .then(() => bot.getAllTradeOffers())
  .then(confirms => {
    console.log(confirms)
    bot.acceptTradeOffer(confirms[0].id, confirms[0].pid)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err, 'err')
      })
  })
  .catch(err => {
    console.log(err)
  })
// bot.get2faCode().then(code => console.log(code))
// bot.login().then(() => bot.acceptTradeOffer(3859075404))


// TODO1: 确认发送报价 https://steamcommunurl, ity.com/mobileconf/ajaxop?
// op=allow&
// p=android:6a7b4936-4fbc-4768-8a2d-0af30a4d2247&
// a=76561198972540829&
// k=k0YEK%2bGmQ5jtdi5Ak9UjmnCf3cU%3d&
// t=1578317312&
// m=android&
// tag=allow&
// cid=7247382612&
// ck=3218265602348734156

// TODO2: 获取所有的交易报价 https://steamcommunity.com/profiles/{steamid}/tradeoffers

// TODO3: 接受报价 https://steamcommunity.com/tradeoffer/{tradeofferid}/accept