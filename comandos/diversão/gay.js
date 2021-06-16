module.exports = ({
name: "gay",
  code: `
$description[o <@$mentioned[1]> pareçe ter $random[1;100]% de ser gay]
$color[#ff00fa]
$thumbnail[https://api.avux.ga/gay?avatar=$replaceText[$userAvatar[$mentioned[1]];.webp;.png]]
$onlyIf[$mentioned[1]!=;{description:$username você tem $random[1;100]% de ser gay}{thumbnail:https://api.avux.ga/gay?avatar=$replaceText[$userAvatar[$authorID];.webp;.png]}{color:#ff00fa}]
`
  
  })

