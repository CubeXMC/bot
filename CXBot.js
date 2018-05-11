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
  let args = message.content.split(" ")


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

bot.on('message', async message => { 
    let guild = message.guild
    var embed = new Discord.RichEmbed();

    
        const args = message.content.split(" ").slice(1);
      
        if (message.content.startsWith(prefix + "eval")) {
          if(message.author.id !== "335893092756488205") return;
          try {
            const code = args.join(" ");
            let evaled = eval(code);
      
            if (typeof evaled !== "string")
              evaled = require("util").inspect(evaled);
            embed.setDescription(evaled, {code:"xl"});
	    embed.setAuthor("Eval", message.author.displayAvatarURL)
	    embed.setColor("#1196F4")
            message.channel.send({embed});
          } catch (err) {
	   embed.setAuthor("Error", message.author.displayAvatarURL)
           embed.setDescription(`\`ERROR\` \`\`\`xl\n${err}\n\`\`\``);
	   embed.setColor("#FF0000")
           message.channel.send({embed});

          }
        }
      });


bot.login(process.env.TOKEN);
