module.exports = ({
	name: 'ship',
	code: `
  $if[$mentioned[2]==$authorID]
  não vai rolar menciona outra pessoa
  $else
$title[Ship]
$description[Será que <@$mentioned[1]> tem chance com <@$mentioned[2]> 
resultado:
$randomText[0% 😭 quase impossível;10% 😔 muito difícil;20% 😩 difícil;30% ☺️ talvez role alguma coisa;40% 🙂 as chances são grandes;50% 😌 quase certeza que vai rolar!;60% 😁 pode ser amor verdadeiro 💕;70% 😃 eles parecem almas gêmeas;80% 😀 amor verdadeiro ❤️;90% 😚 eles tem que ficar juntos;100% eles se amam totalmente! 😍 💕]]
$argsCheck[>2;Você precisa mencionar duas pessoas]

$image[
https://api.avux.ga/ship?avatar1=$replaceText[$userAvatar[$mentioned[1]];.webp;.png]&avatar2=$replaceText[$userAvatar[$mentioned[2]];.webp;.png]]
$color[RANDOM]

$endif
`
});