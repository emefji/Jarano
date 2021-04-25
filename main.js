require('dotenv').config()
const Discord = require("discord.js");
const client = new Discord.Client();
const path = require("path")

const express = require("express");
const { json } = require('express');
const app = express()

const prefix = "!jao ";

client.once("ready", () => {
    console.log("Jarano is online!")
    console.log("Web is running")
    client.user.setActivity("!jao", {type: "WATCHING", url:"https://github.com/emefji/Jarano"})
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

    if (command === "tettoegay") {
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
        const json_objects = {
            command1 = "´!jao help`",
            command2 = "´!jao github`"
        }
    }

        for (let i; i < json_objects.length; i++) {
            message.channel.send(json_objects)
        }
    
    if (command === "github") {
        message.channel.send("https://github.com/emefji/Jarano")
    }
    
    if (command === "test") {
        message.channel.send("`det fungerar`")
    }
})

app.use(express.static(path.join(path.resolve(), "website/build")))
app.get("*", (req, res) => {
	res.sendFile(path.join(path.resolve() + "/website/build/index.html"))
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening at http://localhost:${process.env.PORT}`)
})

var http = require("http");
setInterval(function() {
    http.get("http://jarano.herokuapp.com");
}, 300000); // every 5 minutes (300000)

client.login(process.env.TOKEN)