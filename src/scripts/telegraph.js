const { Telegraf } = require('telegraf')

const bot = new Telegraf('1722799720:AAElWY7jJhf9xWrbvluOv9UREkvEYcxQGhQ');

bot.start((ctx) => {
	console.log('CTX: ', ctx.update.message.chat)
	ctx.reply('Ghbdtn')}
)
bot.on('sticker', (ctx) => ctx.reply('net'))
bot.hears('hi', (ctx) => ctx.reply('Xnj nt,t ye;yj?'))

module.exports = bot