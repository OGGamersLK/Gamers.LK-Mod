const { MessageEmbed, DiscordAPIError } = require('discord.js');

module.exports ={
    name: 'server',
    run: async(clinet, message) =>{
        const embed = new MessageEmbed()
        .setTitle('Mikeshs test Discord Bot server')
        .setDescription('Please join our official Discord Server `OG Gamers.LK`')
        .setColor('RANDOM')
        .setThumbnail()

        message.channel.send(embed)
    }
}