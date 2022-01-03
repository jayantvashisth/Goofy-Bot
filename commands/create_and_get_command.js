const mongoose = require('mongoose');
const msg_schema = require('../schemas/msg_schema');
const notes = require('../schemas/note_schema');


mongoose.connect(process.env.mongoDb_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then((m) => console.log("connected to database"))
    .catch((err) => console.log(err));

module.exports = async function(msg,id){
    const message = msg;
    if (message.content.toLocaleLowerCase().startsWith("~create")) {
        const index = message.content.indexOf(" ");
        const index2 = message.content.indexOf(" ", 8);

        console.log(index2);
        const title = message.content.slice(index + 1, index2);
        const description = message.content.slice(index2 + 1);

        if(await notes.find({hint : title}).count() == 0){

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
        else{
            message.channel.send("word already taken....");
        }

    }
    else if(message.content.charAt(0)== "?"){
        const msg = message.content.slice(1);
        const temp = await notes.find({hint : msg}).count();
        console.log(temp);
        if(temp>0){
            const arr = await notes.find({hint : msg});
            message.channel.send(arr[0].description)
        }
        else
            message.channel.send('command not found');
    }

}