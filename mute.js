if (command === "mute") {
    let membro = message.mentions.members.first();
    if (!membro) {
        return message.reply('Por favor, mencione um usuário!');
    }

    if (!message.member.hasPermission('BAN_MEMBERS')) {
        return message.reply('Você não tem autorização!');
    }

    const cargoMutado = message.guild.roles.find(cargo => cargo.name === 'Mutado');

    if (!cargoMutado) {
        return message.reply("O cargo `Mutado` não existe");
    }

    let motivo = args.slice(1).join(" ");
    if (!motivo) {
         motivo = 'Motivo não informado!';
    }

    const canal = client.channels.get('ID do canal');

    let mutadoEmbed = new Discord.RichEmbed()
        .setTitle("💥🔨 Usuário mutado do servidor")
        .setColor("#0000ff")
        .setThumbnail(membro.user.avatarURL)
        .addBlankField()
        .addField("`👮 Responsável:`", `${message.author.tag}, ID: (${message.author.id})`)
        .addField("`👤 Usuário:`", membro)
        .addField("`📇 ID:`", membro.id)
        .addField("`📃 Motivo:`", motivo)
        .setFooter(client.user.username, client.user.displayAvatarURL)
        .setTimestamp();

    let PvEmbed = new Discord.RichEmbed()
        .setTitle('-------------⚠ AVISO ⚠-------------')
        .setAuthor(message.guild.name)
        .setColor("#ff0000")
        .setThumbnail(message.guild.iconURL)
        .setDescription('Você foi **__mutado__** em nosso servidor🤐')
        .addField("`📃 Motivo:`", motivo)
        .addField('Esperamos que compreenda o motivo.', 'Sinta-se à vontade para contactar o responsável.')
        .addField("`👮 Responsável:`", `${message.author.tag}, ID: (${message.author.id})`)
        .setFooter(client.user.username, client.user.displayAvatarURL)
        .setImage('https://cdn.discordapp.com/attachments/533800753752571915/534625712460529684/PicsArt_01-15-04.51.34.png')
        .setTimestamp();

    membro.addRole(cargoMutado)
        .then(() => {
            membro.send(PvEmbed).catch(()=>{})
            canal.send(mutadoEmbed).catch(()=>{});
        })
        .catch(() => message.reply("Não foi possível mutar o usuário"));
}
