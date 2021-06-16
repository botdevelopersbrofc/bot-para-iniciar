module.exports = ({
name: "lock",
  code: `
$color[#FF0000]
$title[Lock]
$description[Este canal foi trancado :lock:
para desbloquear o canal usse $getservervar[prefix]unlock
]
$modifyChannelPerms[$channelID;-sendmessages;$guildID]
$onlyPerms[managechannels;{description:**id:403**
motivo:**falta de permisão.**
permisão:**MANAGE_CHANNELS**}{thumbnail:https://rockcontent.com/br/wp-content/uploads/sites/2/2019/05/erro403-1.png}{title:|erro|}{color:RED}]
$footer[trancado por: $username]  `
});