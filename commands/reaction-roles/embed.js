const { MessageEmbed } = require('discord.js')

module.exports ={
    name: 'reactionrole',
    run: async(client, message) =>{
        const embed = new MessageEmbed()
        .setTitle('Reaction Role')
        .setDescription('React to obtain a role \nšµ - Blue Team Role\nš” - Yellow Team Role')
        .setColor('RANDOM')

    const msg = await message.channel.send(embed)
    await msg.react('šµ')
    await msg.react('š”')
    }
}