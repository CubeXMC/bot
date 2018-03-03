const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require("./config.json");

const prefix = 'cx:'

bot.on("ready", () => {
console.log('I am ready...');
bot.user.setActivity("On CubeXNetwork",{type:"PLAYING"});
});

bot.on('message', message => {
  if (message.author.bot) return;

  let guild = message.guild
  var embed = new Discord.RichEmbed();

  if (message.content.toLowerCase() === prefix + 'ping') {
    embed.setColor("BLUE");
    embed.setDescription("PONG!\n" + Math.round(bot.ping) + "ms");
    message.channel.send({embed});
  }
  if(message.content.toLowerCase() === prefix + 'serverinfo') {
    embed.setColor('#7CFC00')
    embed.setDescription('')
    message.channel.send({embed});
  }
  
});

client.on('message', message => {
var embed = new Discord.RichEmbed()
    if (message.content === ',serverinfo'){
embed.setThumbnail(message.guild.iconURL)
embed.addField('Server Name', message.guild.name)
embed.addField('Member Count', message.guild.members.size)
embed.setColor(3447003) 
embed.addField('server Owner', message.guild.owner)
embed.addField('Server Creation Date', message.guild.createdAt)
message.channel.send({embed});
}});



bot.login(config.token);
