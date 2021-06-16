module.exports = ({
name: "unlock",
  code: `
$color[#FF0000]
$title[unlock]
$description[este canal foi desbloqueado :unlock:
para bloquear-lo novamente usse $getservervar[prefix]lock
]
$modifyChannelPerms[$channelID;+sendmessages;$guildID]
$footer[destrancado por: $username]
$onlyPerms[managechannels;{description:**id:403**
motivo:**falta de permisão.**
permisão:**MANAGE_CHANNELS**}{thumbnail:https://rockcontent.com/br/wp-content/uploads/sites/2/2019/05/erro403-1.png}{title:|erro|}{color:RED}]`
});
//MANAGE_CHANNELS