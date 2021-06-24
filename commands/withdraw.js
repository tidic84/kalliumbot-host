const { MessageEmbed } = require('discord.js');
const { blue, green, yellow, red } = require('../colors.json')

module.exports = {
    name: 'withdraw',
    aliases: ["with", "wd"],
    description: 'Retirer de l\'argent a la banque',
    
    async execute(client, message, settings, args) { 

        const embed = new MessageEmbed()
            .setTitle('Pong !')
            .setColor(`${blue}`)
        message.channel.send(embed);
    }
};
