const fetch = require('node-fetch');
const Discord = require('discord.js');
const client = new Discord.Client();
module.exports = async function (msg,id,arr){
    console.log("shut up");
    console.log(arr[1]);
    if(arr[1]>99){
        msg.reply(`can't delete more than 100 msgs at a time`);
    }
    await msg.channel.messages.fetch({limit: arr[1]}).then(messages=>{
        msg.channel.bulkDelete(messages);
    });
}