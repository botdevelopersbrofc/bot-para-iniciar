module.exports = ({
  name: 'lixo',
	code: `
$color[RANDOM]
$image[https://api.avux.ga/trash?avatar=$replaceText[$userAvatar[$mentioned[1]];.webp;.png]]
$onlyIf[$mentioned[1]!=;Você deve mencionar alguém.]

`
});