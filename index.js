const mineflayer = require('mineflayer')

const config = {
  host: 'mineproness.aternos.me', // example: hypixel.net
  port: 25565,
  username: 'MinepronessAFK', // cracked = any name
  password: undefined, // only if premium account
  version: "1.21.11"

}

let bot

function createBot() {
  bot = mineflayer.createBot(config)

  bot.on('login', () => {
    console.log('✅ Bot joined the server')
  })

  bot.on('spawn', () => {
    console.log('🌍 Spawned in world')
  })

  bot.on('end', () => {
    console.log('❌ Disconnected! Reconnecting...')
    reconnect()
  })

  bot.on('kicked', (reason) => {
    console.log('⚠️ Kicked:', reason)
  })

  bot.on('error', (err) => {
    console.log('⚠️ Error:', err.message)
    createBot()
  })
}

function reconnect() {
  setTimeout(() => {
    createBot()
  }, 5000) // wait 5 seconds before reconnect
}

createBot()
