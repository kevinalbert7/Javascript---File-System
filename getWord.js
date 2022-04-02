var randomWordFR = require('random-word-fr');

function getWord(numberOfLetters) {
    var has7Letters = false
    var word = ""
  
    while (!has7Letters) {
      word = randomWordFR()
      has7Letters = word.length === numberOfLetters
    }

    word = word.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    return word
  }

  module.exports = getWord

  function display(str) {
      var mysteryWord = word.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g,'_')
  }

  console.log(word)