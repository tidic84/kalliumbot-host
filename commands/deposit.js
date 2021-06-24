const { MessageEmbed } = require('discord.js');
const { blue, green, yellow, red } = require('../colors.json')

module.exports = {
    name: 'deposit',
    aliases: ["dep", "dp"],
    description: 'Retirer de l\'argent a la banque',
    
    async execute(client, message, settings, args, cmd, profileData) { 

        var amount = args[0];
        var amountW = "";
        var amountB = "";



        if (isNaN(amount) && amount != "all") {

            const embed = new MessageEmbed()
                    .setTitle('Erreur')
                    .setDescription(` **'${args[0]}'** n'est pas un nombre valide`)
                    .setColor(`${red}`)
                return message.channel.send(embed);

        } else if (amount == "all") { 

            amountW = 0
            amountB = parseInt(profileData.coins) + parseInt(profileData.bank)

            const embed = new MessageEmbed()
                .setTitle('Dépot réussi')
                .setDescription(`$${profileData.coins} ont été déposés avec succès.`)
                .setColor(`${green}`)
            message.channel.send(embed);

            return client.updateProfile(message.author, { coins: amountW, bank: amountB}, message.member.guild.id)
        } else if (amount > profileData.coins) {
                const embed = new MessageEmbed()
                    .setTitle('Erreur')
                    .setDescription(` Vous n'avez pas assez d'argent sur vous !`)
                    .setColor(`${red}`)
                return message.channel.send(embed);
        }

        amountW = parseInt(profileData.coins) - parseInt(amount);
        amountB = parseInt(profileData.bank) + parseInt(amount);
        client.updateProfile(message.author, { coins: amountW, bank: amountB}, message.member.guild.id)

        const embed = new MessageEmbed()
            .setTitle('Retrait réussi')
            .setDescription(`$${args[0]} ont été déposés avec succès.`)
            .setColor(`${green}`)
        message.channel.send(embed);
    }
};