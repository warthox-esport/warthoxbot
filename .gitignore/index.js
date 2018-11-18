const Discord = require('discord.js');
const client = new Discord.Client();
const { Client, Attachment } = require('discord.js');

var prefix = "!";

client.on('ready', () => {
  console.log(`Connection réussi ! [${client.user.tag}!]`);
  client.user.setGame("warthox-esport.fr");
 
});

// ADDONS 'Vérification' 18/11/2018
client.on('message', msg => {
  if (msg.content === prefix + "ok") {
    msg.reply('Warthox BOT est disponible | Commandes: !help');
  }
});


// ADDONS 'Bienvenue' 18/11/2018
client.on('guildMemberAdd', member => 
		  {
  			const channel = member.guild.channels.find(ch => ch.name === 'member-log');
  			if (!channel) return;
  			channel.send(`Bienvenue sur le serveur ${member} !`);
		  });


// ADDONS '!KICK' 18/11/2018
client.on('message', message => 
		  {
  		  	if (!message.guild) return;
  			if (message.content.startsWith(prefix +'kick')) 
				{
    				const user = message.mentions.users.first();
    				if (user) 
						{
      						const member = message.guild.member(user);
      						if (member) 
								{
        							member.kick('Optional reason that will display in the audit logs').then(() => 
										{
          									message.reply(`Kick effectué ${user.tag}`);
        								}).catch(err => 
												 {
          											message.reply('Cette action ne pas être effectué !' );
          											console.error(err);
        										 });
      							} 
							else 
								{
        							message.reply('That user isn\'t in this guild!');
								}
    					} 
				     else 
					 	{
      						message.reply('You didn\'t mention the user to kick!');
    					}
  				}
		  });


// ADDONS '!bannière' 18/11/2018
client.on('message', message => {
   
    if (message.content === prefix + 'twitter') {
        
        const attachment = new Attachment('https://imgur.com/a/go1k9f9');
        message.channel.send(attachment);
    }
});


client.login('process.env.TOKEN');
