const fetch = require('node-fetch');

module.exports = function(msg){
    fetch('https://v2.jokeapi.dev/joke/Any?safe-mode')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if (data.type === 'twopart') {
            msg.reply(data.setup + '\n' + data.delivery);
            // msg.channel.send(data.delivery);
        }
        else if (data.type === 'single') {
            msg.reply(data.joke);

        }
    })
}