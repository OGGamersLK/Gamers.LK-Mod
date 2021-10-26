module.exports ={
    name: 'ban',
    run : async(client, message, args) =>{
        if(!message.guild.me.hasPermission('BAN_MEMBERS')) return message.channel.send('I do not have perms to ban a member')
        const Member = message.mentions.members.first()
        if(!Member) return message.channel.send('Please speciy a member to ban!')
        await Member.ban({ reason: args.slice(1).join(" ")})

        message.channel.send(`${Member.user.tag} was banned from the server`)
    }
}