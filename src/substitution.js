// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  

  function substitution(input, alphabet, encode = true) {
    let normalAlphabet = "abcdefghijklmnopqrstuvwxyz"
    let result = ""
    let secondResult = []
    let inputMessage = input.toLowerCase()
      //first the case where will return false
    if (!input || !alphabet || alphabet.length !== 26) {
      return false
    }
   for (let characters in alphabet) {
      if (secondResult.indexOf(alphabet[characters]) < 0) {
          secondResult.push(alphabet[characters])
          } else { return false }
    }
    for (let i = 0; i < inputMessage.length; i++) {
      if (inputMessage[i] === " ") {//keep the spaces
        result += " "
      }
      else {
        let updatedNormalAlphabet = normalAlphabet
        let updatedAlphabet = alphabet
        if(!encode) { //cases where encode = false, decode message
          updatedNormalAlphabet = alphabet
          updatedAlphabet = normalAlphabet
        }
        for (let j = 0; j < updatedNormalAlphabet.length; j++) {
          if(inputMessage[i] === updatedNormalAlphabet[j]) {
            result += updatedAlphabet[j]
          }
        }
     }
    }
    return result
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
