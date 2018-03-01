const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require("./config.json");

var prefix = 'CX:'

bot.on("ready", () => {
console.log('I am ready...');
bot.user.setActivity("On CubeXNetwork",{type:"PLAYING"});
});

bot.on('message', message => {
  if (message.author.bot) return;

  const args = message.content.slice(prefix).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  let guild = message.guild
  const embed = new Discord.RichEmbed();

  if (message.content.toLowerCase() === (prefix) + 'ping') {
    embed.setColor("BLUE")
    embed.setDescription("PONG!\n" + Math.round(bot.ping) + "ms")
    message.channel.send({embed});
  }
  
});



bot.login(config.token);
