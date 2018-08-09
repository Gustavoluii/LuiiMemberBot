
const Discord = require("discord.js");
const bot = new Discord.Client();
const PREFIX = "!";

bot.login(process.env.BOT_TOKEN);



bot.on("ready", function() {
    console.log("Estou online!");
});

bot.on('ready', () => {
    bot.user.setGame(`www.mineluii.com`);
});

bot.on('guildMemberAdd', member => {
    bot.guilds.get(member.guild.id).members.get(member.id).sendMessage("Olá "+member+", você ainda não possui Minecraft Original? Te apresento a melhor loja do BRASIL!\n\n:fire: 100% Seguro\n:fire: Suporte 24/7\n\n`Conheça alguns de nossos produtos abaixo:`\n\n• Minecraft Unmigrated FULL ACESSO - :moneybag: R$24,99\n• Minecraft Original Alternativo 4 Contas - :moneybag: R$9,99\n• Capa da Optifine - :moneybag: R$29,99\n• Regedit OP + DNS - :moneybag: R$29,99\n\nTwitter: @LojaMineLuii\nSite: www.mineluii.com\nDiscord: https://discord.gg/p3cyMCp\n");

});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
  
    let prefix = PREFIX;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
  
    if (cmd === `${prefix}ping`){
        if(!message.member.hasPermission("MANAGE_MESSAGES"));
        const ms = await message.channel.send("Calculando...");
        const clientms = ms.createdTimestamp - message.createdTimestamp;
        ms.edit('Meu Ping: ' + Math.round(bot.ping) + 'ms');
    }

});
