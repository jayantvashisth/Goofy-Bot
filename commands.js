const hello  = require("./commands/greets");
const joke   = require("./commands/jokes");
const meme   = require("./commands/meme");
const clear   = require("./commands/clear");


const PREFIX = '~';


module.exports = function (msg) {

    if(msg.content.charAt(0)== PREFIX){

        let message = msg.content.slice(1);
        console.log(message);
        let id = msg.author.id;
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