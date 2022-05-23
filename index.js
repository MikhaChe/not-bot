const telegramApi = require('node-telegram-bot-api');
const { options } = require('nodemon/lib/config');

const token = '5143688751:AAHFn_TOEIvbarqZhoSWVN2GnSeTq_ozoqQ';

const bot = new telegramApi(token, {polling: true});

bot.on('message', async msg => {
    const textChat = msg.text;
    const chatId = msg.chat.id;

    await bot.sendMessage ('-1001681074061', `Пользователь M. Ch. написал: ${textChat}`);
    if (textChat === '/info') {
        await bot.sendSticker ('-1001681074061', 'https://tlgrm.ru/_/stickers/e64/7ac/e647ac51-77fc-40ee-989c-5abb6ca25ea9/11.webp');
    }
});

