const Discord = require("discord.js");
const client = new Discord.Client();

const prefix = "!jao ";

client.once("ready", () => {
    console.log("Jarano is online!")
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
        message.channel.send("tetto är såkallat gay")
    }

    if (command === "help") {
        message.channel.send("test")
    }
    
})


client.login("ODI2ODI1OTc2MjU2MTM1MjE4.YGSHsg.in9yJlWAjzvrsCud6vJgJlDqufA")