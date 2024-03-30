const Bot = require('node-telegram-bot-api');
const {Configuration,OpenAiApi} = require('openai')
require('dotenv').config();
const TOKENS = process.env.TOKEN;
const configurations = new Configuration({apiKey:process.env.chatapi});
const telegramBot = new Bot(TOKENS, {polling: true});
const openai = new OpenAiApi(configurations);


telegramBot.on('message',async (message)=>{
    const question = message.text;
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: question,
      temperature: 0.9,
      max_tokens: 150,
      n: 1
    })
    console.log(response);
});