function breakLines(){
    console.log("")
}

// ## 01 - File System

// - Créez un fichier `jour07.txt` contenant le code suivant :
// - Créer un fichier index.js
// - Dans le fichier `index.js`, à l'aide du module `fs`, affichez le contenu de `jour07.txt` dans la console
// - Modifier le contenu du fichier et l'afficher
// - Supprimer le fichier

// var fs = require("fs")

// fs.readFile("jour07.txt", function (err, data) {
	
// 	if (err) {
// 	   console.error(err)
// 	   return
// 	}
 
// 	console.log("Lecture en différé : " + data.toString())
// })

// fs.writeFile("jour07.txt", "Hello Word",  function(err) {

// 	if (err) {
// 		return console.error(err)
// 	}
// })

// fs.unlink("jour07.txt", function(err){

// 	if (err) {
// 		return console.error(err)
// 	}
// })

// breakLines()

// ## 02 - Map Double

// - Créez une variable `array` contenant un tableau qui contiendra les valeurs `1`, `2`, `3`, `4` et `5`
// - Créez une variable `double` qui appellera la méthode `.map()` pour contenir les doubles des valeurs de `array`
// - Affichez les valeurs de `double` dans la console

// const array = [1, 2, 3, 4, 5]

// const double = array.map(function(number) {
// 		return number * 2
// })

// console.log(double)

breakLines()

// ## 03 - Map Names

// - Créez une variable `longNames` contenant la valeur suivante :
// - Créez une variable `shortNames` qui appellera la méthode `.map()` pour contenir une version compacte de `longNames` :
// - Affichez les valeurs de `shortNames` dans la console

const longNames = [
	{
		firstName: "Jane",
		lastName: "Doe"
	},
	{
		firstName: "John",
		lastName: "Smith"
	}
]

const shortNames = longNames.map(function(people) {
	return `${people.firstName} ${people.lastName}`
})

console.log(shortNames)

breakLines()

// ## 04 - Filter Numbers

// - Créez une variable `array` contenant un tableau qui contiendra les valeurs `1`, `"toto"`, `34`, `"javascript"` et `8`
// - Créez une variable `numbers` qui appellera la méthode `.filter()` pour contenir les **nombres** de `array`
// - Affichez les valeurs de type `number` dans la console

// const array = [1, "toto", 34, "javascript", 8]
// const numbers = array.filter(function(number) {
// 	return typeof(number) === "number"
// })

// console.log(numbers)

breakLines()

// ## 05 - Filter Even

// - Créez une variable `numbers` contenant un tableau qui contiendra les valeurs `1`, `2`, `3`, `4`, `5`, `6`, `7` et `8`
// - Créez une variable `even` qui appellera la méthode `.filter()` pour contenir les nombres **pairs** de `numbers`
// - Affichez les valeurs de `even` dans la console

const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
const even = numbers.filter(function(number) {
	return number % 2 === 0
})

console.log(even)

breakLines

// ## 06 - Cakes

// - Créez une variable `cakes` contenant la valeur suivante :
// - À l'aide des méthodes `.filter()` et `.map()`, vous donnerez le statut "sold out !" aux gâteaux au chocolat
// - Ces deux gâteaux doivent être stockés dans une nouvelle variable, affichez-la dans la console

const cakes = [
	{
		name: "cake",
		flavor: "vanilla",
		status: "available"
	},
	{
		name: "brownie",
		flavor: "chocolate",
		status: "available"
	},
	{
		name: "pie",
		flavor: "strawberry",
		status: "available"
	},
	{
		name: "muffin",
		flavor: "pistachio",
		status: "available"
	},
	{
		name: "donut",
		flavor: "chocolate",
		status: "available"
	},
]

const cakesSoldOut = cakes
	.filter(function(cake) {
		return cake.flavor === "chocolate"
	})

	.map(function(cake) {
		return {
			...cake,
			status: "sold out !"
		}
	})

	
console.log(cakesSoldOut)

breakLines

// ## ⭐ Bonus

// Vous connaissez le jeu du **Pendu** ? Aujourd'hui on va le coder en utilisant le module npm prompt ! Petit rappel des règles :

// - Un mot mystère est proposé, chaque lettre est indiquée par un tiret bas `_`
// - Le joueur a dix tentatives pour deviner le mot mystère, et pour chaque tentative il propose une lettre :
//     - Si la lettre est dans le mot mystère, chaque lettre correspondante est affichée
//     - Si la lettre n'est pas dans le mot, le message suivant s'affiche : "oups... plus que x chances !" (x sera remplacé par le nombre de tentatives restantes)

// ⇒ Afficher un message en cas de victoire ou défaite 

const prompt = require("prompt");

const word = "Matin"
const guesses = []
const solution = []

while(word.length !== 5) {
	word = randomWord()
	word = word.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
}

console.log(word)

prompt.start()

const attempts = 0

const play = () => {

	prompt.get({ name: "input", description: "proposer une lettre", pattern: /^\w{1}$/ }, function(err, res) {
		attempts = attempts + 1
		guesses.push(res.input)

		if (attempts === 10) {
			console.log("Plus de tentatives restantes")
		} else {
			solution = word.split("").map(function(letter) {
				return guesses.includes(letter) ? letter : "_"
			})

			play()
		}
	})

	console.log(attempts)
	console.log(guesses)
	console.log(solution)
	console.log(solution.join(""))

	if (solution.join("") === word) {
		console.log("Vous avez gagné !")
	}
}

play()






// var prompt = require("prompt")
// var beep = require("beepbeep")

// var getWord = require("./getWord")

// var mysteryWord = getWord(10)
// var attempts = 10

// prompt.start()

// function play() {
//     prompt.get({ name: "input", description: `Trouver le mot mystère` }, function(err, result) {
//     if (attempts === 0) {
//         console.log("T'es nul")
//     }

//     if (result.input === mysteryWord) {
//         console.log("Bravo")
//         beep(3, 500)
//     }

//     var str =  ""

//     if (result.input.length !== 7) {
//         console.log("Pas le bon nombre de lettres")
//         play()
    
//     } else {
//         for (var i = 0; i < mysteryWord.length; i++) {
//           var letter = result.input[i]
  
//         if (mysteryWord[i] === letter || mysteryWord.includes(letter)) {
//             str = str + letter
//         }
//     }

//     play()
// }

// attempts = attempts - 1

// console.log(str)
// })
// }

// play()

