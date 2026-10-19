// const Discord = require('discord.js')
require('dotenv').config()
const i18n = require('i18n')

const { Client, ActivityType, Collection } = require('discord.js')
const client = new Client({ intents: 53608447 })

const config = require('./config.json')

client.once('ready', () => {
    console.log(`Todo listo. ClientTag: ${client.user.tag}`)

    client.user.setActivity("Games", {
        type: ActivityType.Playing
    })
})

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return

    const { commandName } = interaction

    if (commandName == 'ping') {
        await interaction.reply('Pong!')
    }
})

// client.login(process.env.token)
client.login(config.token)