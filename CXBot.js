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
  let args = message.content.split(" ").slice(1);


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
  if(message.author.id === `335893092756488205` || message.author.id === `320792865888534539` || message.author.id === `314146155564892160` || message.author.id === `332454451845660673` || message.author.id === `257330370490531840` || message.author.id === `334777598758617090` || message.author.id === `323908416248610817`) {
  if(message.content.toLowerCase().startsWith(prefix + 'general announcement')) {
    embed.setAuthor(`Announcement`,message.guild.iconURL)
    embed.setColor('#ed1c1c')
    embed.setDescription(`${args}`)
    bot.channels.get(`391052574842945548`).send({embed})
  }}
  
});



bot.login(config.token);
