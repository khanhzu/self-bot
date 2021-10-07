const Discord = require('discord.js-selfbot')
function randColor() {
	return Math.floor(Math.random()*16777215).toString(16);
}
module.exports = {
    name: "report",
    description: "Report cho thằng DEV",
    async execute(bot, msg, args) {
        if(!args[0]) return msg.reply('Vui lòng nhập điều bạn muốn report');
        const admin = await bot.users.fetch('806808416621559828')
        msg.reply('Đã gửi thành công')
        const srcembed = new Discord.MessageEmbed()
            .setColor(randColor())
            .setAuthor('main/misc/source', 'https://media.discordapp.net/attachments/745095165554851922/859821849545408532/lol.gif?width=447&height=447')
            .setDescription(`${args.join(' ')}`)
            .setTitle('Sourcecode v1.7')
            .setTimestamp()
            .setFooter(`${msg.author.tag}`,`${msg.author.displayAvatarURL()}`)
        admin.send(srcembed)
    }
}
