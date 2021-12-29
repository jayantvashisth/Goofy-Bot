module.exports = function(msg,id){
    console.log(msg.content);
    console.log(msg.author.id);

    if(id == 769520879520317461){
        
        msg.reply(`i don't say hi to dumb people like you!`);
    }
    else
        msg.reply(`Hey there Goofy this side!`);

}