const express = require('express')
const app = express()
app.get('/', function (req, res) {
  res.send(`<center><p class="nome">music bot 🟢online</p><br><img src="https://api.avux.ga/circle?avatar=https://cdn.discordapp.com/avatars/767072495869886474/0c2aeab871950efa4559d84cf214ec2c.png?size=2048"style="border-radius: 50%;max-height: 100px;border-width: medium;
border-style: solid;
border-color: #F00;border-top-color: #54ff00;border-right-color: #54ff00;
}"></center>
  <style>
  .online {
    color: #54ff00;
    max-height: 50px;
  }
.nome {
    color: #fff;
    max-height: 50px;
  }
body {
    background: url(https://cdn.discordapp.com/attachments/810690445641383936/836942493756817408/background.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
  </style>`)
})
app.listen(3000)
const variables = require("./variables")
const Aoijs = require('aoi.js');
const config = require('./config.json');
const bot = new Aoijs.Bot({
	sharding: false,
	shardAmount: 2,
	token: config.token,
	prefix: ['$getServerVar[prefix]', '!']
});

//canal warn

bot.onMessage({
	guildOnly: true
});


const fs = require('fs');

const folders = fs.readdirSync('./comandos/');

for (const files of folders) {
	const folder = fs
		.readdirSync(`./comandos/${files}/`)
		.filter(file => file.endsWith('.js'));

	for (const commands of folder) {
		const command = require(`./comandos/${files}/${commands}`);
		bot.command({
			name: command.name,
			aliases: command.aliases,
			code: command.code
		});
  }
}






// variaveis
bot.variables(variables)

    bot.command({
	name: '<@!820441070412365825>',//id do bot
	code: `$title[meu nome e $username[$clientID]]
$description[meu prefixo e \`$getServerVar[prefix]\`
o meu criador e o <@!$botOwnerID>]
$footer[$getServerVar[prefix]help para ver minha lista de comandos]
$color[RANDOM]
	`,
	nonPrefixed: true
});

bot.readyCommand({
  channel: "824266947054927924",
    code: `
$log[]
$log[criado por appmakerparana]
    `
})

bot.status({
  text: "use $getvar[prefix]help",
  type: "PLAYING",
  time: 5
})
//eventos
bot.musicStartCommand({
	channel: '$channelID',
	code: `
 $author[tocando agora;https://cdn.discordapp.com/attachments/812081910532538419/812082048432341052/cd.gif]
$color[RANDOM]
$thumbnail[$songInfo[thumbnail]]
$addField[Duração;\`$songInfo[duration]\`;yes]
$addField[infos;[link da musica]($songInfo[url])
**artista**
[$songInfo[publisher]]($songInfo[publisher_url]);yes]
$addField[titulo;\`$songInfo[title]\`;yes]
`
});

bot.musicEndCommand({
	channel: '$channelID',
	code: `
  $description[musica acabou]
  $footer[saindo da call;https://cdn.discordapp.com/attachments/812081910532538419/812082048432341052/cd.gif]
  $color[RANDOM]
  `
})

bot.command({
	name: 'setprefixo',
	code: `$setServerVar[prefix;$message] $description[o novo prefixo do server e  \`$message\`]
  $onlyPerms[admin; <@$authorID> \`verificamos que voce não tem permissao de adm\`]
  $argsCheck[1;informe um argumento valido]
  `
});

//reagidos NÃO APAGAR NADA
bot.awaitedCommand({
	name: 'home',
	code: ` $editMessage[$message[1];{title:Help} {description:
\`$getvar[ala]\`
administração 
🛠
\`$getvar[ala]\`
diversão
🎮
\`$getvar[ala]\`
musica
💿
\`$getvar[ala]\`
}
{thumbnail:$authorAvatar}] `
});

bot.awaitedCommand({
	name: 'musica',
	code: ` $editMessage[$message[1];{title:musica} {description:**minha lista de ajuda**}
 {field:livre:
 $getservervar[prefix]play (nome da musica ou link)
 $getservervar[prefix]bass (numero ate 70)
 $getservervar[prefix]info
 $getservervar[prefix]queue
 $getservervar[prefix]skip
 $getservervar[prefix]stop
 $getservervar[prefix]volume (numero ate 150)
 :yes}
{field:adm:
 $getservervar[prefix]voladm (numero ate 500)
 $getservervar[prefix]setprefixo (argumento)
 :yes}
{thumbnail:$authorAvatar}] `
});

bot.awaitedCommand({
	name: 'diversão',
	code: ` $editMessage[$message[1];{title:diversão} {description:

**$getServerVar[prefix]gay**

**$getServerVar[prefix]lixo**

**$getServerVar[prefix]say**

**$getServerVar[prefix]ship**

**$getServerVar[prefix]tapa**

**$getServerVar[prefix]Triggered**

}
{thumbnail:$authorAvatar}] `
});

bot.awaitedCommand({
	name: 'administração',
	code: ` $editMessage[$message[1];{title:administração} {description:

}
{thumbnail:$authorAvatar}] `
});


bot.command({
 name: "stats",
 description: "Shows the bot's stats",
 code: `
 $editMessage[$get[msgid];{author:$username[$clientID] Status:$userAvatar[$clientID]}
 {field:Ping:\`$ping\`:yes}
 {field:Database Ping:\`$dbPing\`:yes}
 {field:CPU:\`$cpu\`:yes}
 {field:RAM:\`$ram\`:yes}
 {field:Runtime:\`$uptime\`:yes}
 {field:Version:\`$packageVersion\`:yes}
 {field:Developer:\`$userTag[$botOwnerID]\`:yes}
 {color:ORANGE}]
 
 $wait[3s]
 
 $botTyping
 
 $editMessage[$get[msgid];{author:Loading:https://media.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif}
 {description:\`Fetching RAM...\`}
 {color:ORANGE}]
 $wait[$textSlice[a$findNumbers[$ram];1;5]ms]
 
 $editMessage[$get[msgid];{author:Loading:https://media.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif}
 {description:\`Fetching CPU...\`}
 {color:ORANGE}]
 $wait[$textSlice[a1$findNumbers[$cpu]00;1;5]ms]
 
 $editMessage[$get[msgid];{author:Loading:https://media.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif}
 {description:\`Fetching Ping...\`}
 {color:RED}]
 $wait[$textSlice[x$ping000;1;5]ms]
 
 $botTyping
 
 $let[msgid;$sendMessage[{author:Loading:https://media.giphy.com/media/xTk9ZvMnbIiIew7IpW/giphy.gif}
 {color:RED};yes]]
 
 $serverCooldown[10s;Please wait %time%.]`
})


