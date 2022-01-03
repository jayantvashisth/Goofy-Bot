const hello  = require("./commands/greets");
const joke   = require("./commands/jokes");
const meme   = require("./commands/meme");
const clear   = require("./commands/clear");
const create_and_get_command  = require("./commands/create_and_get_command");
const invalid_command  = require("./commands/invalid_command");

const PREFIX = '~';


module.exports = function (msg) {
    let id = msg.author.id;

    if(msg.content.charAt(0)== PREFIX){

        let message = msg.content.slice(1);
        console.log(message);
        if (message === 'hello' ||message === 'hi' ||message === 'hey' || message === 'yoo' ) {
           hello(msg,id);
        }
    
        else if (message === 'joke') {
           joke(msg);
        }

        else if (message === 'meme' ||message === 'memes') {
            meme(msg,id);
        }
        else if(message.split(" ").shift() === 'clear'){
           let arr = message.split(" ");
           clear(msg,id,arr);
        }
        else if(msg.content.toLocaleLowerCase().startsWith("~create")){
            create_and_get_command(msg,id);
        }
        else{
            invalid_command(msg,id);
        }
       
    }
    else if(msg.content.charAt(0)== "?"){
        create_and_get_command(msg,id);
    }
    

    


}







//comics command

// client.on('message', (msg) => {
//     if (msg.content === '~comic') {
//         fetch("https://pnpninja-daily-comicstrips-v1.p.rapidapi.com/getComicLinks", {
//             "method": "GET",
//             "headers": {
//                 "x-rapidapi-host": "pnpninja-daily-comicstrips-v1.p.rapidapi.com",
//                 "x-rapidapi-key": "63176fff22msh058d77c80b610bcp1777b6jsnb09480b3b191"
//             }
//         })
//         .then(response => {
//             msg.reply(response.url);
//         })
//         .catch(err => {
//             console.error(err);
//         });
//     }
// })