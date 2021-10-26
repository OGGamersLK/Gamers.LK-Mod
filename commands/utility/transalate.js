const translate = require('translate-google')

module.exports= {
    name : 'translate',
    aliases: ['trans'],
    description: 'translate other languages to english',
    run : async(client, message, args) => {
        translate(args.join(" "), {to : 'en'}).then(res => {
            message.channel.send(res)
        }).catch(err => {
            message.channel.send('An error has occured')
            console.log(err)
        })
    }
}