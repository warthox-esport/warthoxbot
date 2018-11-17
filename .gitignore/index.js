const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('NTEzNDgxNzYwNjM0MzA2NTcx.DtIqAw.Q6kcRO_Ub7oAxME_ILdYx7U7PAs');
