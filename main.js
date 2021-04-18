require('dotenv').config()
const Discord = require("discord.js");
const client = new Discord.Client();

const express = require("express")
const app = express()

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

    // kolla om andra variabeln är ett nummer, om inte så skrik användaren eller nåt

    if (command === "tetto") {
        let input = args[0]
        
        if (isNaN(input) && input != undefined) {
            message.channel.send("Please use a number")
        }

        else {
            let times = 0
            if (input == undefined) {
                times = 1;
            }

            else {
                times = input
            } 
            
            if (times > 13) {
                message.channel.send("To many messages (< 13)")
                return;
            }            
            
            for (let i = 0; i < times; i++) {
                message.channel.send("tetto")
            }
        }
    }

    if (command === "help") {
        message.channel.send("test")
    }
    
    if (command === "github") {
        message.channel.send("https://github.com/emefji/Jarano")
    }
    
})

app.get('/', (req, res) => {
    res.send("Hejsan svejsan jarano yes")
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening at http://localhost:${process.env.PORT}`)
})

//heroku yye
client.login(process.env.TOKEN)