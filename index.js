console.log("hello world")

require("dotenv").config();
const Discord = require('discord.js');
const client = new Discord.Client();
const commandHandler = require("./commands");

const mongoose = require('mongoose');
const msg_schema = require('./schemas/msg_schema');
const notes = require('./schemas/note_schema');

mongoose.connect(process.env.mongoDb_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then((m) => console.log("connected to database"))
    .catch((err) => console.log(err));


client.login(process.env.botToken);

client.on('ready', hello);

function hello() {
    console.log("hey there!");
}

// client.on("message",commandHandler);


// const newmsg = await msg_schema.create({
//     username :message.author.username,
//     discordId :message.author.id,
//     message : title
// })

let today = new Date('03-01-2022 08:37:00');
today.setHours(8);
today.setMinutes(45);
today.setSeconds(00);
console.log(today);

client.on("message", async (message) => {
    if (message.content.toLocaleLowerCase().startsWith("~create")) {
        const index = message.content.indexOf(" ");
        const index2 = message.content.indexOf(" ", 8);

        console.log(index2);
        const title = message.content.slice(index + 1, index2);
        const description = message.content.slice(index2 + 1);

        try {

            await notes.create({
                username: message.author.username,
                discordId: message.author.id,
                hint: title,
                description
            });
            message.channel.send("message saved");
        } catch (err) {
            console.log(err);
            message.channel.send("failed to save note");
        }

    }
    else if(message.content.charAt(0)== "?"){
        const msg = message.content.slice(1);
        console.log(notes.find({hint : msg}).count());
        if(notes.find({hint : msg}).count()){
            const arr = await notes.find({hint : msg});
            message.channel.send(arr[0].description)
        }
        else
            message.channel.send('command not found');
    }



})
