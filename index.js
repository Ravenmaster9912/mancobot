const Discord = require('discord.js')
require('dotenv').config()
const i18n = require('i18n')

const client = Discord.client({ intents: [Intents.FLAGS.GUILDS] })

client.once('ready', () => {
    console.log('To listo')
})

client.login(process.env.token)