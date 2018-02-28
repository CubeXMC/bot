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

  if (command === 'ping') {
    message.channel.send('pong');
    
  if(command === 'kick') {
  let member = message.mentions.members.first();
  let reason = args.slice(1).join(" ");
  member.kick(reason);
}
  }
});



bot.login(config.token);
