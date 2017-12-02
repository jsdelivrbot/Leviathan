const Discord = require("discord.js");
const bot = new Discord.Client();
bot.login(`MzYzMDc5Mjc5MDE5NTU2ODY3.DOp3JA.mLAo-7DUKU2ZfW_QuGbbdhDar8E`);
// https://discordapp.com/oauth2/authorize?client_id=363079279019556867&scope=bot&permissions=68608
bot.on("ready", function () {
    console.log(`Initialized: ${bot.user.tag}`);
});
var dupea = 0;
var dupec = 0;
var duped = 0;
var dupes = 0;
var calla = ['c', 'd', 's'];
var callc = ['a', 'd', 's'];
var calld = ['a', 'c', 's'];
var calls = ['a', 'c', 'd'];
var actual = [];
var locatePlayer1 = 0;
// var locatePlayer2 = 0; located in levs.js
var LocatePlayer0 = 0;
var Player1;
// var Player2; located in levs.js 
var Player3;
var Player4;
var Player5;
var Player6;
var Player7;
var Player8;
var Player9;
var Player10;
var Player0;
var loca = [1, 1, 1, 'Trees', 'Rocks', 'L1', 'R1', 'L2', 'R2', 'L3', 'R3'];
var dead = [1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0];

bot.on("message", function (msg) {
    // Pleasure Gardens Part 1
    if (msg.content.toLowerCase() === "!t") { Player3 = msg.author.id; msg.channel.send(`Registered Trees`); }
    if (msg.author.id === Player3) {
        var alive = dead.map((v, i) => !v ? loca[i] : null).filter(v => v != null);
        if (msg.content.toLowerCase() === "h") { dead[3] = 0; msg.channel.send(`Help requested at Trees!`); }
        if (msg.content.toLowerCase() === "k") { dead[3] = 1; msg.channel.send(`Dogs alive: ` + alive.join(", ")); }
    }
    if (msg.content.toLowerCase() === "!r") { Player4 = msg.author.id; msg.channel.send(`Registered Rocks`); }
    if (msg.author.id === Player4) {
        var alive = dead.map((v, i) => !v ? loca[i] : null).filter(v => v != null);
        if (msg.content.toLowerCase() === "h") { dead[4] = 0; msg.channel.send(`Help requested at Rocks!`); }
        if (msg.content.toLowerCase() === "k") { dead[4] = 1; msg.channel.send(`Dogs alive: ` + alive.join(", ")); }
    }
    if (msg.content.toLowerCase() === "!l1") { Player5 = msg.author.id; msg.channel.send(`Registered L1`); }
    if (msg.author.id === Player5) {
        var alive = dead.map((v, i) => !v ? loca[i] : null).filter(v => v != null);
        if (msg.content.toLowerCase() === "h") { dead[5] = 0; msg.channel.send(`Help requested at L1!`); }
        if (msg.content.toLowerCase() === "k") { dead[5] = 1; msg.channel.send(`Dogs alive: ` + alive.join(", ")); }
    }
    if (msg.content.toLowerCase() === "!r1") { Player6 = msg.author.id; msg.channel.send(`Registered R1`); }
    if (msg.author.id === Player6) {
        var alive = dead.map((v, i) => !v ? loca[i] : null).filter(v => v != null);
        if (msg.content.toLowerCase() === "h") { dead[6] = 0; msg.channel.send(`Help requested at R1!`); }
        if (msg.content.toLowerCase() === "k") { dead[6] = 1; msg.channel.send(`Dogs alive: ` + alive.join(", ")); }
    }
    if (msg.content.toLowerCase() === "!l2") { Player7 = msg.author.id; msg.channel.send(`Registered L2`); }
    if (msg.author.id === Player7) {
        var alive = dead.map((v, i) => !v ? loca[i] : null).filter(v => v != null);
        if (msg.content.toLowerCase() === "h") { dead[7] = 0; msg.channel.send(`Help requested at L2!`); }
        if (msg.content.toLowerCase() === "k") { dead[7] = 1; msg.channel.send(`Dogs alive: ` + alive.join(", ")); }
    }
    if (msg.content.toLowerCase() === "!r2") { Player8 = msg.author.id; msg.channel.send(`Registered R2`); }
    if (msg.author.id === Player8) {
        var alive = dead.map((v, i) => !v ? loca[i] : null).filter(v => v != null);
        if (msg.content.toLowerCase() === "h") { dead[8] = 0; msg.channel.send(`Help requested at R2!`); }
        if (msg.content.toLowerCase() === "k") { dead[8] = 1; msg.channel.send(`Dogs alive: ` + alive.join(", ")); }
    }
    if (msg.content.toLowerCase() === "!l3") { Player9 = msg.author.id; msg.channel.send(`Registered L3 and Left Prism Holder: Enter 1 for L1 flower, 2 for L2, 3 for L3, and 4 for Trees`); }
    if (msg.author.id === Player9) {
        var alive = dead.map((v, i) => !v ? loca[i] : null).filter(v => v != null);
        if (msg.content.toLowerCase() === "h") { dead[9] = 0; msg.channel.send(`Help requested at L3!`); }
        if (msg.content.toLowerCase() === "k") { dead[9] = 1; msg.channel.send(`Dogs alive: ` + alive.join(", ")); }
        if (msg.content === "1") { msg.channel.send(`Active flower at L1`); }
        if (msg.content === "2") { msg.channel.send(`Active flower at L2`); }
        if (msg.content === "3") { msg.channel.send(`Active flower at L3`); }
        if (msg.content === "4") { msg.channel.send(`Active flower at Trees`); }
        if (msg.content.toLowerCase() === "!t") { msg.channel.send(`Active flower at Trees`); }
    }
    if (msg.content.toLowerCase() === "!r3") { Player10 = msg.author.id; msg.channel.send(`Registered R3 and Right Prism Holder: Enter 1 for R1 Flower, 2 for L2, 3 for L3, and 4 for Rocks`); }
    if (msg.author.id === Player10) {
        var alive = dead.map((v, i) => !v ? loca[i] : null).filter(v => v != null);
        if (msg.content.toLowerCase() === "h") { dead[10] = 0; msg.channel.send(`Help requested at R3!`); }
        if (msg.content.toLowerCase() === "k") { dead[10] = 1; msg.channel.send(`Dogs alive: ` + alive.join(", ")); }
        if (msg.content === "1") { msg.channel.send(`Active flower at R1`); }
        if (msg.content === "2") { msg.channel.send(`Active flower at R2`); }
        if (msg.content === "3") { msg.channel.send(`Active flower at R3`); }
        if (msg.content === "4") { msg.channel.send(`Active flower at Rocks`); }
        if (msg.content.toLowerCase === "!r") { msg.channel.send(`Active flower at Rocks`); }
    }
    if (msg.content.toLowerCase() === "!normal") { dead[4] = 1; dead[7] = 1; msg.channel.send(`Normal raid parameters set: ZA'AHN and GRA'ASK are not present`); }
    if (msg.content.toLowerCase() === "!prestige") { dead[4] = 0; dead[7] = 0; msg.channel.send(`Prestige raid parameters set: ZA'AHN and GRA'ASK are present`); }
    // Gauntlet
    if (msg.content.toLowerCase() === "!cup") { Player1 = msg.author.id; msg.channel.send(`Registered runner for cup!`); }
    if (msg.author.id === Player1 && (msg.content === "1" || msg.content === "2" || msg.content === "3")) { locatePlayer1++; }
    if (locatePlayer1 === 5) { locatePlayer1 = 1; }
    if (locatePlayer1 === 4 && msg.author.id === Player1) { // SUN
        if (msg.content === "1") { msg.channel.send(`Sun: Middle Bottom https://imgur.com/Rhkct9X `); }
        if (msg.content === "2") { msg.channel.send(`Sun: Top Bottom https://imgur.com/6X2QPxp `); }
        if (msg.content === "3") { msg.channel.send(`Sun: Top Middle https://imgur.com/paQy0uH `); }
    }
    if (locatePlayer1 === 3 && msg.author.id === Player1) { // DOG
        if (msg.content === "1") { msg.channel.send(`Dog: Middle Bottom https://imgur.com/l2yrbvp `); }
        if (msg.content === "2") { msg.channel.send(`Dog: Top Bottom https://imgur.com/gdupecUWvt `); }
        if (msg.content === "3") { msg.channel.send(`Dog: Top Middle https://imgur.com/ktYKqRh `); }
    }
    if (locatePlayer1 === 2 && msg.author.id === Player1) { // AXE
        if (msg.content === "1") { msg.channel.send(`Axe: Middle Bottom https://imgur.com/GpJMtrq `); }
        if (msg.content === "2") { msg.channel.send(`Axe: Top Bottom https://imgur.com/dEbIGiY `); }
        if (msg.content === "3") { msg.channel.send(`Axe: Top Middle https://imgur.com/hxKQhsb `); }
    }
    if (locatePlayer1 === 1 && msg.author.id === Player1) { // CUP
        if (msg.content === "1") { msg.channel.send(`Cup: Middle Bottom https://imgur.com/bixZl3t `); }
        if (msg.content === "2") { msg.channel.send(`Cup: Top Bottom https://imgur.com/BFWwKaQ `); }
        if (msg.content === "3") { msg.channel.send(`Cup: Top Middle https://imgur.com/RGHUoI2 `); }
    }
    if (msg.content === "info") {
        msg.channel.send(`Input "!reset" and press enter at any time to reset the bot and completely remove all prior inputs. Input "!infoguides" to see how you can quickly access the infoguide pictures for your encounter!`); msg.channel.send(`**Pleasure Gardens:** Type !location to register your dog between trees and R3. After registering, type !prestige if you're on prestige mode and have extra dogs. L3 and R3 are pre-assigned as the Prism Holders and can call out X1-X3 with just 1-3 and Trees/Rocks with 4. While attacking your dogs, use H to ask for help and K to tell the team your dog is dead.`); msg.channel.send(`**Gauntlet:** Type "!cup" and "!dog" if you want to run at each of those spots. While running, enter 1, 2, or 3 to send your team an image of your location and which buttons to hit.`); msg.channel.send(`**Calus:** Enter a, c, d, or s to call out your symbol. The bot will automatically display the image that is not mentioned! UPDATE: The bot can now take inputs from up to 5 players! 4:2 strat anyone?`); msg.channel.send(`**Future Support:** I'll be updating the infoguide pictures with DDN strats and discord commands. Good luck raiders! `);
    }
    // Calus
    if (msg.content.toLowerCase() === "a" && dupea == 0) { dupea = "a"; actual.unshift(msg.content); console.log(actual); }
    if (msg.content.toLowerCase() === "c" && dupec == 0) { dupec = "a"; actual.unshift(msg.content); console.log(actual); }
    if (msg.content.toLowerCase() === "d" && duped == 0) { duped = "a"; actual.unshift(msg.content); console.log(actual); }
    if (msg.content.toLowerCase() === "s" && dupes == 0) { dupes = "a"; actual.unshift(msg.content); console.log(actual); }
    actuals = actual.sort();
    if (actuals.join('|') === calla.join('|')) { msg.channel.send(`Melee Axe! https://imgur.com/agVmO4o `).then(actual.length = 0).then(dupea = 0).then(dupec = 0).then(duped = 0).then(dupes = 0); }
    if (actuals.join('|') === callc.join('|')) { msg.channel.send(`Melee Cup! https://imgur.com/0NOS43W `).then(actual.length = 0).then(dupea = 0).then(dupec = 0).then(duped = 0).then(dupes = 0); }
    if (actuals.join('|') === calld.join('|')) { msg.channel.send(`Melee Dog! https://imgur.com/pFHvr1c `).then(actual.length = 0).then(dupea = 0).then(dupec = 0).then(duped = 0).then(dupes = 0); }
    if (actuals.join('|') === calls.join('|')) { msg.channel.send(`Melee Sun! https://imgur.com/bB4euwu `).then(actual.length = 0).then(dupea = 0).then(dupec = 0).then(duped = 0).then(dupes = 0); }
    if (actuals.join('|') !== calla.join('|') !== callc.join('|') !== calld.join('|') !== calls.join('|') && actuals.length === 3) { console.log(actuals); msg.channel.send(`@M4V3R1C8#9851 There is no call out for the provided inputs, please enter again...`).then(actual.length = 0); }
    // InfoGuides
    if (msg.content.toLowerCase() === "!help castellum") { msg.channel.send(`https://i.imgur.com/DAOh1zC.jpg `); }
    if (msg.content.toLowerCase() === "!help garden") { msg.channel.send(`https://i.imgur.com/pQt85fw.jpg `); }
    if (msg.content.toLowerCase() === "!help dogs") { msg.channel.send(`https://i.imgur.com/pQt85fw.jpg `); }
    if (msg.content.toLowerCase() === "!help dog") { msg.channel.send(`https://i.imgur.com/pQt85fw.jpg `); }
    if (msg.content.toLowerCase() === "!help pools") { msg.channel.send(`https://i.imgur.com/2Hcbypq.jpg `); }
    if (msg.content.toLowerCase() === "!help baths") { msg.channel.send(`https://i.imgur.com/2Hcbypq.jpg `); }
    if (msg.content.toLowerCase() === "!help gauntlet") { msg.channel.send(`https://i.imgur.com/FzIGCOJ.jpg `); }
    if (msg.content.toLowerCase() === "!help calus") { msg.channel.send(`https://i.imgur.com/pxLVmj5.jpg `); }
    if (msg.content.toLowerCase() === "!help underbelly") { msg.channel.send(`https://i.imgur.com/7OTAFnr.jpg `); }
    // Reset function for the entire bot in all encounters
    if (msg.content.toLowerCase() === "!reset") {
        msg.channel.send(`Complete Reset of All Encounters: Default settings applied.`);
        Player1 = 111;
        Player2 = 222;
        Player3 = 333;
        Player4 = 444;
        Player5 = 555;
        Player6 = 666;
        Player7 = 777;
        Player8 = 888;
        Player9 = 999;
        Player10 = 101010;
        Player0 = 000;
        dead = [1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0];
        locatePlayer1 = 0;
        locatePlayer2 = 0;
        actual.length = 0;
        actuals.length = 0;
    }
    // Countdown to start encounters!
    if (msg.content.toLowerCase() === "!start") {
        var threev = setTimeout(three.bind(null, msg), 6000);
        var onev = setTimeout(one.bind(null, msg), 2000);
        var twov = setTimeout(two.bind(null, msg), 4000);
        async function two(msg) {
            msg.channel.sendFile("https://i.imgur.com/JZOCg5l.png ");
        }
        async function one(msg) {
            msg.channel.sendFile("https://i.imgur.com/gTK3Vhn.png ");
        }
        async function three(msg) {
            msg.channel.sendFile("https://i.imgur.com/3iVfYIR.png ");
        }
        msg.channel.sendFile("https://i.imgur.com/kOoyoZQ.png ").then(onev).then(twov).then(threev);
    }
    if (msg.content.toLowerCase() === "damage") {
        var threev = setTimeout(three.bind(null, msg), 29000);
        var onev = setTimeout(one.bind(null, msg), 24000);
        var twov = setTimeout(two.bind(null, msg), 27000);
        async function two(msg) {
            msg.channel.send("Trees and R2 time to go back! 7 seconds left!");
        }
        async function one(msg) {
            msg.channel.send("L3 and R3 time to go back! 10 seconds left!");
        }
        async function three(msg) {
            msg.channel.send("Everyone get inside now! 5 seconds left!");
        }
        msg.channel.send("https://i.imgur.com/3bapPNg.png").then(onev).then(twov).then(threev);
    }
    if (msg.content.toLowerCase() === "!nuke" ) {
        nuke().then(() => {
            console.log("Nuclear Bomb Detonated");
            return;
        });
        async function nuke() {
            msg.delete();
            msg.channel.send("Nuclear Launch System Initiated: 1 Minute until Total Annihilation").then(
                setTimeout(function () {
                    for (i = 0; i < 10; i++) {
                        msg.delete();
                        msg.channel.fetchMessages(100)
                            .then(function (fetched) {
                                msg.channel.bulkDelete(fetched);
                            });
                    }
                }, 3000));
        }
    }
    // Help Function
    function Replace(a, b, c) {
        return a.split(b).join(c);
    }
    function StringFormat(a, b) {
        var count = b.length;
        var newstr = a;
        for (var i = 0; i < count; i++) {
            var currentelement = "{" + i + "}";
            newstr = Replace(newstr, currentelement, b[i]);
        }
        return newstr;
    }
    var UserCommands = {
        "!Help": {
            name: "!Help",
            description: "Displays this help documentation",
            usage: "!Help"
        },
        "!Help X": {
            name: "!Help X",
            description: "Display info guides with the encounter name after help: !Help Pools",
            usage: "!Help X"
        },
        "!Reset": {
            name: "!Reset",
            description: "Resets all bot functions, positions, and call outs",
            usage: "!Reset"
        },
        "!Start": {
            name: "!Start",
            description: "Command to syncronize the start of encounters",
            usage: "!Start"
        },
        "Pleasure Gardens": {
            name: "Pleasure Gardens",
            description: "",
            usage: "Pleasure Gardens"
        },
        "!Normal": {
            name: "!Normal",
            description: "Registers normal mode and kills ZA'AHN and GRA'ASK before the encounter",
            usage: "!Normal"
        },
        "!Prestige": {
            name: "!Prestige",
            description: "Registers prestige mode and resurrects ZA'AHN and GRA'ASK for the encounter",
            usage: "!Prestige"
        },
        "Damage": {
            name: "Damage",
            description: "Pretype this command and hit enter when you get caught. The bot will tell you when to get to safety!",
            usage: "Damage"
        },
        "!X1-!X3, !Trees, !Rocks": {
            name: "!X1-!X3, !t, !r",
            description: "Assigns your position within the Pleasure Gardens according to the info guide",
            usage: "!X1-!X3, !t, !r"
        },
        "H": {
            name: "H",
            description: "Ask for help at your assigned position",
            usage: "H"
        },
        "K": {
            name: "K",
            description: "Let everyone know that your dog is dead",
            usage: "K"
        },
        "1, 2, 3, 4": {
            name: "1, 2, 3, 4",
            description: "Active flowers linked to your position 1, 2, 3 call X1, X2, and X3. 4 calls Rocks or Trees",
            usage: "1, 2, 3, 4"
        },
        "Gauntlet": {
            name: "Gauntlet",
            description: "",
            usage: "Gauntlet"
        },
        "!Cup/!Dog": {
            name: "!Cup/!Dog",
            description: "Registers you as the runner for Cup or Dog",
            usage: "!Cup/!Dog"
        },
        "1, 2, or 3": {
            name: "1, 2, 3",
            description: "Call out your position and red circle. 1 = Top, 2 = Middle, 3 = Bottom. Use ASAP to avoid wiping",
            usage: "1, 2, 3"
        },
        "Calus": {
            name: "Calus",
            description: "",
            usage: "Calus"
        },
        "a, c, d, s": {
            name: "a, c, d, s",
            description: "Call out Axe, Cup, Dog, or Sun. Displays the missing psion",
            usage: "a, c, d, s"
        }
    }
    if (msg.content.toLowerCase() === "!help") {
        var longestc = 0;
        var list = new Array();
        for (var key in UserCommands) {
            if (UserCommands[key].name.length > longestc) longestc = UserCommands[key].name.length;
            if (UserCommands[key].name === UserCommands[key].usage) {
                list.push([StringFormat("{nameins}{spaceins}: {0}", ([UserCommands[key].description])), UserCommands[key].name]);
            } else {
                list.push([StringFormat("{nameins}{spaceins}: {0}", ([UserCommands[key].description])), UserCommands[key].name]);
            }
        }
        var fs = "\n```\n";
        for (var i = 0; i < list.length; i++) {
            var cname = list[i][1];
            var nspaces = longestc - cname.length;
            var tspaces = "";
            var uspaces = "   ";
            for (var j = 0; j < nspaces; j++) tspaces += " ";
            for (var j = 0; j < longestc; j++) uspaces += " ";
            fs += (list[i][0] + "\n").replace("{nameins}", cname).replace("{spaceins}", tspaces).replace("{usagespaceins}", uspaces);
        }
        fs += "```\n";
        msg.reply(fs);
    }
});
    /* More support for Pleasure Gardens :(
    if (msg.author.id === Player0 && LocatePlayer0 === 0) {
        if (msg.content === "L1") { LocatePlayer0 = 5; msg.channel.send(`Safe Route to L1 From Safe Room`); }
        if (msg.content === "L2") { LocatePlayer0 = 7; msg.channel.send(`Safe Route to L2 From Safe Room`); }
        if (msg.content === "L3") { LocatePlayer0 = 9; msg.channel.send(`Safe Route to L3 From Safe Room`); }
        if (msg.content === "T") { LocatePlayer0 = 3; msg.channel.send(`Safe Route to Trees From Safe Room`); }
        if (msg.content === "R1") { LocatePlayer0 = 6; msg.channel.send(`Safe Route to R1 From Safe Room`); }
        if (msg.content === "R2") { LocatePlayer0 = 8; msg.channel.send(`Safe Route to R2 From Safe Room`); }
        if (msg.content === "R3") { LocatePlayer0 = 10; msg.channel.send(`Safe Route to R3 From Safe Room`); }
        if (msg.content === "R") { LocatePlayer0 = 4; msg.channel.send(`Safe Route to Rocks From Safe Room`); }
    }
    if (msg.author.id === Player0 && LocatePlayer0 === 5) {
        if (msg.content === "S") { LocatePlayer0 = 0; msg.channel.send(`Safe Route to Safe Room From L1`); }
        if (msg.content === "L2") { LocatePlayer0 = 7; msg.channel.send(`Safe Route to L2 From L1`); }
        if (msg.content === "L3") { LocatePlayer0 = 9; msg.channel.send(`Safe Route to L3 From L1`); }
        if (msg.content === "T") { LocatePlayer0 = 3; msg.channel.send(`Safe Route to Trees From L1`); }
        if (msg.content === "R1") { LocatePlayer0 = 6; msg.channel.send(`Safe Route to R1 From L1`); }
        if (msg.content === "R2") { LocatePlayer0 = 8; msg.channel.send(`Safe Route to R2 From L1`); }
        if (msg.content === "R3") { LocatePlayer0 = 10; msg.channel.send(`Safe Route to R3 From L1`); }
        if (msg.content === "R") { LocatePlayer0 = 4; msg.channel.send(`Safe Route to Rocks From L1`); }
    }
    if (msg.author.id === Player0 && LocatePlayer0 === 7) {
        if (msg.content === "L1") { LocatePlayer0 = 5; msg.channel.send(`Safe Route to L1 From L2`); }
        if (msg.content === "S") { LocatePlayer0 = 0; msg.channel.send(`Safe Route to Safe Room From L2`); }
        if (msg.content === "L3") { LocatePlayer0 = 9; msg.channel.send(`Safe Route to L3 From L2`); }
        if (msg.content === "T") { LocatePlayer0 = 3; msg.channel.send(`Safe Route to Trees From L2`); }
        if (msg.content === "R1") { LocatePlayer0 = 6; msg.channel.send(`Safe Route to R1 From L2`); }
        if (msg.content === "R2") { LocatePlayer0 = 8; msg.channel.send(`Safe Route to R2 From L2`); }
        if (msg.content === "R3") { LocatePlayer0 = 10; msg.channel.send(`Safe Route to R3 From L2`); }
        if (msg.content === "R") { LocatePlayer0 = 4; msg.channel.send(`Safe Route to Rocks From L2`); }
    }
    if (msg.author.id === Player0 && LocatePlayer0 === 9) {
        if (msg.content === "L1") { LocatePlayer0 = 5; msg.channel.send(`Safe Route to L1 From L3`); }
        if (msg.content === "L2") { LocatePlayer0 = 7; msg.channel.send(`Safe Route to L2 From L3`); }
        if (msg.content === "S") { LocatePlayer0 = 0; msg.channel.send(`Safe Route to Safe Room From L3`); }
        if (msg.content === "T") { LocatePlayer0 = 3; msg.channel.send(`Safe Route to Trees From L3`); }
        if (msg.content === "R1") { LocatePlayer0 = 6; msg.channel.send(`Safe Route to R1 From L3`); }
        if (msg.content === "R2") { LocatePlayer0 = 8; msg.channel.send(`Safe Route to R2 From L3`); }
        if (msg.content === "R3") { LocatePlayer0 = 10; msg.channel.send(`Safe Route to R3 From L3`); }
        if (msg.content === "R") { LocatePlayer0 = 4; msg.channel.send(`Safe Route to Rocks From L3`); }
    }
    if (msg.author.id === Player0 && LocatePlayer0 === 3) {
        if (msg.content === "L1") { LocatePlayer0 = 5; msg.channel.send(`Safe Route to L1 From Trees`); }
        if (msg.content === "L2") { LocatePlayer0 = 7; msg.channel.send(`Safe Route to L2 From Trees`); }
        if (msg.content === "L3") { LocatePlayer0 = 9; msg.channel.send(`Safe Route to Safe Room From Trees`); }
        if (msg.content === "S") { LocatePlayer0 = 0; msg.channel.send(`Safe Route to Trees From Trees`); }
        if (msg.content === "R1") { LocatePlayer0 = 6; msg.channel.send(`Safe Route to R1 From Trees`); }
        if (msg.content === "R2") { LocatePlayer0 = 8; msg.channel.send(`Safe Route to R2 From Trees`); }
        if (msg.content === "R3") { LocatePlayer0 = 10; msg.channel.send(`Safe Route to R3 From Trees`); }
        if (msg.content === "R") { LocatePlayer0 = 4; msg.channel.send(`Safe Route to Rocks From Trees`); }
    }
    if (msg.author.id === Player0 && LocatePlayer0 === 6) {
        if (msg.content === "L1") { LocatePlayer0 = 5; msg.channel.send(`Safe Route to L1 From R1`); }
        if (msg.content === "L2") { LocatePlayer0 = 7; msg.channel.send(`Safe Route to L2 From R1`); }
        if (msg.content === "L3") { LocatePlayer0 = 9; msg.channel.send(`Safe Route to L3 From R1`); }
        if (msg.content === "T") { LocatePlayer0 = 3; msg.channel.send(`Safe Route to Trees From R1`); }
        if (msg.content === "S") { LocatePlayer0 = 0; msg.channel.send(`Safe Route to Safe Room From R1`); }
        if (msg.content === "R2") { LocatePlayer0 = 8; msg.channel.send(`Safe Route to R2 From R1`); }
        if (msg.content === "R3") { LocatePlayer0 = 10; msg.channel.send(`Safe Route to R3 From R1`); }
        if (msg.content === "R") { LocatePlayer0 = 4; msg.channel.send(`Safe Route to Rocks From R1`); }
    }
    if (msg.author.id === Player0 && LocatePlayer0 === 8) {
        if (msg.content === "L1") { LocatePlayer0 = 5; msg.channel.send(`Safe Route to L1 From R2`); }
        if (msg.content === "L2") { LocatePlayer0 = 7; msg.channel.send(`Safe Route to L2 From R2`); }
        if (msg.content === "L3") { LocatePlayer0 = 9; msg.channel.send(`Safe Route to L3 From R2`); }
        if (msg.content === "T") { LocatePlayer0 = 3; msg.channel.send(`Safe Route to Trees From R2`); }
        if (msg.content === "R1") { LocatePlayer0 = 6; msg.channel.send(`Safe Route to R1 From R2`); }
        if (msg.content === "S") { LocatePlayer0 = 0; msg.channel.send(`Safe Route to Safe Room From R2`); }
        if (msg.content === "R3") { LocatePlayer0 = 10; msg.channel.send(`Safe Route to R3 From R2`); }
        if (msg.content === "R") { LocatePlayer0 = 4; msg.channel.send(`Safe Route to Rocks From R2`); }
    }
    if (msg.author.id === Player0 && LocatePlayer0 === 10) {
        if (msg.content === "L1") { LocatePlayer0 = 5; msg.channel.send(`Safe Route to L1 From R3`); }
        if (msg.content === "L2") { LocatePlayer0 = 7; msg.channel.send(`Safe Route to L2 From R3`); }
        if (msg.content === "L3") { LocatePlayer0 = 9; msg.channel.send(`Safe Route to L3 From R3`); }
        if (msg.content === "T") { LocatePlayer0 = 3; msg.channel.send(`Safe Route to Trees From R3`); }
        if (msg.content === "R1") { LocatePlayer0 = 6; msg.channel.send(`Safe Route to R1 From R3`); }
        if (msg.content === "R2") { LocatePlayer0 = 8; msg.channel.send(`Safe Route to R2 From R3`); }
        if (msg.content === "S") { LocatePlayer0 = 0; msg.channel.send(`Safe Route to Safe Room From R3`); }
        if (msg.content === "R") { LocatePlayer0 = 4; msg.channel.send(`Safe Route to Rocks From R3`); }
    }
    if (msg.author.id === Player0 && LocatePlayer0 === 4) {
        if (msg.content === "L1") { LocatePlayer0 = 5; msg.channel.send(`Safe Route to L1 From Rocks`); }
        if (msg.content === "L2") { LocatePlayer0 = 7; msg.channel.send(`Safe Route to L2 From Rocks`); }
        if (msg.content === "L3") { LocatePlayer0 = 9; msg.channel.send(`Safe Route to L3 From Rocks`); }
        if (msg.content === "T") { LocatePlayer0 = 3; msg.channel.send(`Safe Route to Trees From Rocks`); }
        if (msg.content === "R1") { LocatePlayer0 = 6; msg.channel.send(`Safe Route to R1 From Rocks`); }
        if (msg.content === "R2") { LocatePlayer0 = 8; msg.channel.send(`Safe Route to R2 From Rocks`); }
        if (msg.content === "R3") { LocatePlayer0 = 10; msg.channel.send(`Safe Route to R3 From Rocks`); }
        if (msg.content === "S") { LocatePlayer0 = 0; msg.channel.send(`Safe Route to Safe Room From Rocks`); }
    }
}); */
