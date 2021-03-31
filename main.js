const Discord = require("discord.js");
const client = new Discord.Client();

client.once("ready", () => {
    console.log("Jarano is online!")
})

client.on('message', msg => {
    if (msg.content === '/jaran tetto') {
      msg.reply('=gay!');
    }
});






client.login("j4f8fs4hrgOH2T9i42dyjoMFAwA7Js9L");