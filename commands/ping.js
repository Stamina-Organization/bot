const { Client, CommandInteraction } = require('discord.js')
const { SlashCommandBuilder } = require('@discordjs/builders')

module.exports = {
    data: new SlashCommandBuilder()
        .setName(`ping`)
        .setDescription(`Retourne le temps de latence entre le bot et le serveur.`),
    /**
     * @param {CommandInteraction} interaction
     * @param {Client} client
     */
    async execute(interaction, client) {
        const ping = await client.ws.ping()
        interaction.reply({ content: `Pong! \`${ping}ms\`` })
    }
}