const { Client, Collection, Intents } = require('discord.js');
const { readdirSync } = require('fs');
require('dotenv').config();

const client = new Client({
    intents: [
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.DIRECT_MESSAGES,
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_PRESENCES,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_WEBHOOKS,
        Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS
    ]
})

client.commands = new Collection();
const commands = []

module.exports.commands = commands
module.exports.client = client

const commandFiles = readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    commands.push(command.data.toJSON())
    client.commands.set(command.data.name, command)
}

const eventFiles = readdirSync('./events').filter(file => file.endsWith('.js'));
eventFiles.map((value) => require(`./events/${value}`))

client.login(process.env.TOKEN)