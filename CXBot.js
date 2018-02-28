const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require("./config.json");


bot.on("ready", () => {
console.log('I am ready...');
bot.user.setActivity("On CubeXNetwork",{type:"PLAYING"});
});

bot.on('message', message => {
  if (message.author.bot) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  let guild = message.guild
  const embed = new Discord.RichEmbed();

  if (command === 'ping') {
    embed.setColor("BLUE")
    embed.setDescription("PONG!\n" + Math.round(bot.ping) + "ms")
    message.channel.send({embed});
  }
  
});



bot.login(config.token);
