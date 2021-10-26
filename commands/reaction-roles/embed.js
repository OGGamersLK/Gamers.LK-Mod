const { MessageEmbed } = require('discord.js')

module.exports ={
    name: 'reactionrole',
    run: async(client, message) =>{
        const embed = new MessageEmbed()
        .setTitle('Reaction Role')
        .setDescription('React to obtain a role \n🔵 - Blue Team Role\n🟡 - Yellow Team Role')
        .setColor('RANDOM')

    const msg = await message.channel.send(embed)
    await msg.react('🔵')
    await msg.react('🟡')
    }
}