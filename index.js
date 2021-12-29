console.log("hello world")

require("dotenv").config();
const Discord = require('discord.js');
const client = new Discord.Client();
const commandHandler = require("./commands");

client.login(process.env.botToken);

client.on('ready',hello);

function hello(){
    console.log("hey there!");
}

client.on("message",commandHandler);



