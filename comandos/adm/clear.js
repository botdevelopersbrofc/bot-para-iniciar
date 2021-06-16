module.exports = ({
  name: "clear",
  aliases: ['limpar'],
  code: `$clear[$message]
$argsCheck[1;ei você ai! Para limpar eu preciso que coloque números de 1 a 100,obrigado🖌️🙃]
 $onlyIf[$message[1]<101;voce so pode apagar 100 mensagens.]
 $suppressErrors[parece que essas mensagens foi mandada a mais de duas semanas então não posso apagalas]
$onlyIf[$isNumber[$message[1]]==true;ensira numeros de 1/100]
$onlyPerms[managemessages;{description:**id:403**
motivo:**falta de permisão.**
permisão:**managemessages**}{thumbnail:https://rockcontent.com/br/wp-content/uploads/sites/2/2019/05/erro403-1.png}{title:|erro|}{color:RED}]

$description[Bot Limpou $message Mensagens pedido por:$username]
$color[RANDOM]
$footer[comando executado com sucesso $username]
  `
})
  