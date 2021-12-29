const fetch = require('node-fetch');
module.exports = function(msg,id){
    let memes = [];
            let after = '';
           fetch(`https://www.reddit.com/r/memes.json?after=${after}`)
           .then(type=>type.json())
           .then(res=>{
               after=res.data.after;
               for(let i = 0; i< res.data.children.length;i++){
                if(res.data.children[i].data.post_hint==='image'){
                    memes.push(res.data.children[i].data.url_overridden_by_dest);
                }
               }
               let index = Math.floor(Math.random()*memes.length);
               msg.reply(memes[index]);
               console.log(memes.length);
           })
}