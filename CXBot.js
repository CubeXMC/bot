const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require("./config.json");

const prefix = 'CX:'

bot.on("ready", () => {
console.log('I am ready...');
bot.user.setActivity("On CubeXNetwork",{type:"PLAYING"});
});

bot.on('message', message => {
  if (message.author.bot) return;

  let guild = message.guild
  var embed = new Discord.RichEmbed();

  if (message.content.toLowerCase() == prefix + 'ping'){
    embed.setColor("BLUE");
    embed.setDescription("PONG!\n" + Math.round(bot.ping) + "ms");
    message.channel.send({embed});
  }
  
});



bot.login(config.token);
