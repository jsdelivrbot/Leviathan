const Discord = require("discord.js");
const bot = new Discord.Client();
bot.login(`Mzg2MTY4MDQzNjM5NjY4NzM4.DQL-iA.pNq5KYiDsoOtoL0VJNt6Nv_RTN0`);
// https://discordapp.com/oauth2/authorize?client_id=386168043639668738&scope=bot&permissions=68608
bot.on("ready", function () {
    console.log(`Initialized: ${bot.user.tag} for gauntlet`);
});
var locatePlayer2 = 0;
var Player2;

bot.on("message", function (msg) {
    // Gauntlet
    if (msg.content.toLowerCase() === "!dog") { Player2 = msg.author.id; msg.channel.send(`Registered runner for dog!`); }
    if (msg.author.id === Player2 && (msg.content === "1" || msg.content === "2" || msg.content === "3")) { locatePlayer2++; }
    if (locatePlayer2 === 5) { locatePlayer2 = 1; }
    if (locatePlayer2 === 4 && msg.author.id === Player2) { // AXE
        if (msg.content === "1") { msg.channel.send(`Axe: Middle Bottom https://imgur.com/GpJMtrq `); }
        if (msg.content === "2") { msg.channel.send(`Axe: Top Bottom https://imgur.com/dEbIGiY `); }
        if (msg.content === "3") { msg.channel.send(`Axe: Top Middle https://imgur.com/hxKQhsb `); }
    }
    if (locatePlayer2 === 3 && msg.author.id === Player2) { // CUP
        if (msg.content === "1") { msg.channel.send(`https://imgur.com/bixZl3t `); }
        if (msg.content === "2") { msg.channel.send(`https://imgur.com/BFWwKaQ `); }
        if (msg.content === "3") { msg.channel.send(`https://imgur.com/RGHUoI2 `); }
    }
    if (locatePlayer2 === 2 && msg.author.id === Player2) { // SUN
        if (msg.content === "1") { msg.channel.send(`Sun: Middle Bottom https://imgur.com/Rhkct9X `); }
        if (msg.content === "2") { msg.channel.send(`Sun: Top Bottom https://imgur.com/6X2QPxp `); }
        if (msg.content === "3") { msg.channel.send(`Sun: Top Middle https://imgur.com/paQy0uH `); }
    }
    if (locatePlayer2 === 1 && msg.author.id === Player2) { // DOG
        if (msg.content === "1") { msg.channel.send(`Dog: Middle Bottom https://imgur.com/l2yrbvp `); }
        if (msg.content === "2") { msg.channel.send(`Dog: Top Bottom https://imgur.com/gdupecUWvt `); }
        if (msg.content === "3") { msg.channel.send(`Dog: Top Middle https://imgur.com/ktYKqRh `); }
    }
    // Reset function for the entire bot in all encounters
    if (msg.content.toLowerCase() === "!reset") {
        Player2 = 222;
        locatePlayer2 = 0;
    }
});