module.exports = ({
	  name: "kick",
    code: `
$color[#FF0000]
$title[Usuario Expulso]
$description[
Autor do kick: <@$authorID>
ID do autor: $authorID

Usuario Expulso: <@$mentioned[1]>
**ID do usuario: $mentioned[1]**

Motivo da Expulsão: $noMentionMessage
]
$footer[Comando ativado por: $username]

$kick[$mentioned[1]]

$onlyIf[!=$mentioned[1];Mencione alguém para expulsar] 
$onlyIf[!=$noMentionMessage;diga algum motivo para expulsar o usuario] 
$onlyPerms[kick;{description:**id:403**
motivo:**falta de permisão.**
permisão:**kick**}{thumbnail:https://rockcontent.com/br/wp-content/uploads/sites/2/2019/05/erro403-1.png}{title:|erro|}{color:RED}]`
})