module.exports = ({
  name: "help",
  code: `
$reactionCollector[$splitText[1];everyone;1m;⬅,🛠,🎮,💿;home,administração,diversão,musica;yes]
$textSplit[$sendMessage[{title:Help} {description:
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
{thumbnail:$authorAvatar}
{color:FFACF5};yes]; ]
`
})



