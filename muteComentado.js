  // Chamada para o comando, definindo o nome dele.
  if (comando === 'mute') {



    //Váriavel membro é igual ao primeiro membro mencionado na mensagem.
    let membro = message.mentions.members.first();
    //Se(if) não(!) mencionar um membro(membro)...
    if (!membro) {
        //responda ('Texto')
        message.reply('Por favor, mencione um usuário!');
    }
    //Constante cargo é igual procurar cargos com o nome 'Mutado' (coloque o nome do cargo que você vai usar como mute)
    const cargoMutado = message.guild.roles.find(cargo => cargo.name === 'Mutado');
    //Se o autor da mensagem não tiver permissão de banir membros...
    if (!message.member.hasPermission('BAN_MEMBERS')) {
        //Responda ("Texto")
        message.reply('Você não tem autorização!');
    }
    //Explicação de argumento no final do code*             
    //Variável motivo é igual ao conjunto de argumentos depois do primeiro argumento(args.slice(1)) juntador por espaços (join(" ")) (que basicamente vai manter o texto na forma que você escreveu.)         
    let motivo = args.slice(1).join(" ");
    //Se não houver motivo...
    if (!motivo) {
        //Considere o motivo sendo igual ('Texto')
        motivo = 'Motivo não informado!';
    }
    //Constante canal igual aos canais com ('ID do canal') (Poderia ser find, como feito no nome do cargo, mas é preferível usar get quando for usar ID)
    const canal = client.channels.get('ID DO CANAL'); //Diferença entre pesquisar por nome ou por ID no final do code.

    //Se já defini quem é membro, defini qual cargo é o mute e o que é o motivo, hora de criar o texto em embed.

                       //Variável texto é igual a um narquivo RichEmbed (formato do texto).
                       let mutadoEmbed = new Discord.RichEmbed()

/*Título*/               .setTitle("💥🔨 Usário mutado do servidor")
/*Definir cor*/          .setColor("#0000ff") //(código em HEX)
/*Imagem em miniatura*/  .setThumbnail(membro.user.avatarURL) //Ícone do membro.
/*Espaço vazio*/         .addBlankField()
/*Campo de texto*/       .addField("`👮 Responsável:`", message.author)
                         .addField("`👤 Usuário:`", membro)
                         .addField("`📇 ID:`", membro.id)
                         .addField("`📃 Motivo:`", motivo)
/*Rodapé*/               .setFooter(client.user.name, client.user.displayAvatarURL) //Nome do bot, Ícone do seu bot.
/*Hora da mensagem*/     .setTimestamp();


/*Só para aprendermos mensagem em Embed, vamos montar outro.
O primeiro vai ser para enviar em um canal específico;
Esse de agora enviaremos no PV do membro mencionado. */
   
                         //Variável texto é igual a um narquivo RichEmbed (formato do texto). 
                         let PvEmbed = new Discord.RichEmbed()

                        .setTitle('-------------⚠ AVISO ⚠-------------')
    /*Autor*/           .setAuthor(message.guild.name) //Nome do servidor.
                        .setColor("#ff0000")
                        .setThumbnail(message.guild.iconURL) //Ícone do servidor.                                     //\n\n (pular duas linhas)...
    /*Descrição*/       .setDescription('Você foi **__mutado__** em nosso servidor🤐') //DICA: Você pode usar \n dentro do texto para pular uma linha.
                        .addField("`📃 Motivo:`", motivo)
                        .addField('Esperamos que compreenda o motivo.', 'Sinta-se à vontade para contactar o responsável.')
                        .addField("`👮 Responsável:`", message.author)
                        .setFooter(client.user.name, client.user.displayAvatarURL)
    /*Imagem*/          .setImage('https://cdn.discordapp.com/attachments/533800753752571915/534625712460529684/PicsArt_01-15-04.51.34.png') //Você pode qualquer imagem, desde que tenha o link dela, formato jpeg, png, GIF...
                        .setTimestamp();



    //Finalmente adicionando o cargo mutano no membro:              
    membro.addRole(cargoMutado);

   //Enviando mensagens:
    
    membro.send(PvEmbed); //No PV.
    canal.send(mutadoEmbed); //No canal específico.
 

    //FIM! :)
}

/* Argumentos (args):
 
!mute     @fulanoDeTal    por      ser     chato!
args0         args1      args2    args3    args4


Pego o nome ou ID?
* O nome pode mudar, se alguém renomear o nome o seu bot não vai encontrar.
* Com ID você pode mudar o nome quantas vezes quiser, a ID é sempre a mesma.
* Se usar ID e apagar o cargo ou canal e depois criar um igual, o bot não vai encontrar.
* No caso acima, usando o nome seria possível encontrar.

Eu uso material em inglês, se não souber, use uma extensão do Google Tradutor para traduzir de maneira prática os trechos :)

Material de apoio: 
args: https://anidiots.guide/first-bot/command-with-arguments
Dúvidas frequentes: https://anidiots.guide/frequently-asked-questions
Embed: https://anidiots.guide/first-bot/using-embeds-in-messages
Biblioteca: https://discord.js.org/#/docs/main/stable/general/welcome
*/
