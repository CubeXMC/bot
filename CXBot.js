const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require("./config.json");
const fs = require('fs');

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
  
  if (message.content.toLowerCase().startsWith('test') {
      config.prefix = boom;
      
      fs.writeFile("./config.json", JSON.stringify(config), (err) => {
        if (err) console.error(err)
    });
      }
  
});



bot.login(config.token);
