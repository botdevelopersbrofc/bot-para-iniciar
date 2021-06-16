module.exports = ({
	name: 'tapa',
	code: `
  $if[$mentioned[1]==$authorID]
  voce que se dar um tapa?
  $else
$image[https://api.avux.ga/batslap?avatar1=$replaceText[$authorAvatar;.webp;.png]&avatar2=$replaceText[$userAvatar[$mentioned[1]];.webp;.png]]
$onlyIf[$mentioned[1]!=;Você deve mencionar alguém.]
$endif
$color[RANDOM]
`
});