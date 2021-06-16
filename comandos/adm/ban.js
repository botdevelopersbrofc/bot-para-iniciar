module.exports = ({
      name: "ban",
 code:`
$color[#FF0000]
$title[Usuario Banido]
$description[
Autor do Ban: <@$authorID>
**ID do autor: $authorID**

\`Usuario Banido:\` <@$mentioned[1]>

**ID do usuario: $mentioned[1]**
\`Motivo do Ban: $noMentionMessage\`
]
$footer[Comando ativado por: $username]

$ban[$mentioned[1]]
$onlyIf[!=$mentioned[1];jeito errado de banir use $getservervar[prefix]ban(motivo|quem sera banido)] 
$onlyIf[!=$noMentionMessage;jeito errado de banir use $getservervar[prefix]ban(motivo|quem sera banido)]
$onlyPerms[ban;{description:**id:403**
motivo:**falta de permisão.**
permisão:**ban**}{thumbnail:https://rockcontent.com/br/wp-content/uploads/sites/2/2019/05/erro403-1.png}{title:|erro|}{color:RED}]

`
})