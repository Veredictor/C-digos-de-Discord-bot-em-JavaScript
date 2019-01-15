    if (comando === 'mute') {


    let membro = message.mentions.members.first();
    if (!membro) {
         message.reply('Por favor, mencione um usuário!');
    }

    let cargoMutado = message.guild.roles.find(cargo => cargo.name === 'Mutado');
    if (!message.member.hasPermission('BAN_MEMBERS')) {
         message.reply('Você não tem autorização!');
    }


    let motivo = args.slice(1).join(" ");
    if (!motivo) {
         motivo = 'Motivo não informado!';
    }

    const canal = client.channels.get('ID DO CANAL');


    let mutadoEmbed = new Discord.RichEmbed()

        .setTitle("💥🔨 Usário mutado do servidor")
        .setColor("#0000ff")
        .setThumbnail(membro.user.avatarURL)
        .addBlankField()
        .addField("`👮 Responsável:`", message.author)
        .addField("`👤 Usuário:`", membro)
        .addField("`📇 ID:`", membro.id)
        .addField("`📃 Motivo:`", motivo)
        .setFooter(client.user.name, client.user.displayAvatarURL)
        .setTimestamp();

        let PvEmbed = new Discord.RichEmbed()

        .setTitle('-------------⚠ AVISO ⚠-------------')
        .setAuthor(message.guild.name)
        .setColor("#ff0000")
        .setThumbnail(message.guild.iconURL)
        .setDescription('Você foi **__mutado__** em nosso servidor🤐')
        .addField("`📃 Motivo:`", motivo)
        .addField('Esperamos que compreenda o motivo.' ,'Sinta-se à vontade para contactar o responsável.')
        .addField("`👮 Responsável:`", message.author)
        .setFooter(client.user.name, client.user.displayAvatarURL)
        .setImage('https://cdn.discordapp.com/attachments/533800753752571915/534625712460529684/PicsArt_01-15-04.51.34.png')
        .setTimestamp();

    membro.addRole(cargoMutado);
    membro.send(PvEmbed);
    canal.send(mutadoEmbed);
}