module.exports = ({
	name: 'Triggered',
	code: `
$description[ta bravinho]
$image[https://api.avux.ga/triggered?avatar=$replaceText[$userAvatar[$mentioned[1]];.webp;.png]]
$onlyIf[$mentioned[1]!=;Você deve mencionar alguém.]
$color[RANDOM]
`
});