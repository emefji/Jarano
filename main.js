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

    if (command === "help") {
        message.channel.send("```!jao github ```\n``` !jao test```");
    }
    
    if (command === "github") {
        message.channel.send("https://github.com/emefji/Jarano")
    }
})

app.use(express.static(path.join(path.resolve(), "website/build")))
app.get("*", (req, res) => {
	res.sendFile(path.join(path.resolve() + "/website/build/index.html"))
})

app.listen(process.env.PORT, () => {
    console.log(`Link: http://localhost:${process.env.PORT}`)
})

var http = require("http");
setInterval(function() {
    http.get("http://jarano.herokuapp.com");
}, 300000); // every 5 minutes (300000)

client.login(process.env.TOKEN)