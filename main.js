const Discord = require("discord.js");
const client = new Discord.Client();

const prefix = "!jao ";

client.once("ready", () => {
    console.log("Jarano is online!")
    client.user.setActivity("github.com", {type: "PLAYING", url:"https://github.com/emefji/Jarano"})
})

client.once("disconnect", () => {
    console.log("Jarano is offline!")
})

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot)
    return;

    const args = message.content.slice(prefix.length).split(/ +/)
    const command = args.shift().toLowerCase();
    
    if (command === "ping") {
        message.channel.send("pong")
    }

    if (command === "tetto") {
        message.channel.send("times")
    }

    if (command === "help") {
        message.channel.send("test")
    }
    
    if (command === "github") {
        message.channel.send("https://github.com/emefji/Jarano")
    }
    
})


client.login("ODI2ODI1OTc2MjU2MTM1MjE4.YGSHsg.l4x0VrlAtauZDxmbVjLj04jZtKU")