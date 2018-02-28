const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require("./config.json");

let guild = message.guild

bot.on("ready", () => {
console.log('I am ready...');
bot.user.setActivity("On CubeXNetwork",{type:"PLAYING"});
});

bot.on('message', message => {
  if (message.author.bot) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  const embed = new Discord.RichEmbed();

  if (command === 'ping') {
    embed.setColor("BLUE")
    embed.setDescription("PONG!\n" + Math.round(bot.ping) + "ms")
    message.channel.send({embed});
  }
  
 const warns = member.guild.channels.find('name' , 'warns')
 bot.channels.get(warns.id).send();

if(!message.guild.member(message.author).hasPermission('MANAGE_SERVER') {
  return;
} else { if (command === 'warn') {
  let member = message.mentions.members.first();
  message.warns('```User Warned: ${member}```');
  message.channel.send('```User Warned: ${member}```');
}} else return;
});



bot.login(config.token);
