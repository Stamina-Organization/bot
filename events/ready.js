const { commands, client } = require("../index")

client.on(`ready`, async () => {
    await client.application.commands.set(commands)

    console.log(`${client.user.tag} is ready!`)
})