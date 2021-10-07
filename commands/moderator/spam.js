module.exports = {
    name:"spam",
    execute(bot, msg, args) {
        if(msg.author.id === `806808416621559828`) {
            setInterval(() => {
                msg.channel.send('<@866141695716753419> gay')
            }, 1500);
        } else return msg.reply('gay')
    }
}