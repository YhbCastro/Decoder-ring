// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {

  function caesar(input, shift, encode = true) {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let result = []
    input = input.toLowerCase().split('')   
    //first the cases that return false
    if (!shift || shift === 0 || shift < -25 || shift > 25 || !input) {
      return false
    }
    //cases where encode is true, encode the message
    if (encode) {
      input.forEach((character, index) => {
        if (alphabet.includes(character)) {
            alphabet.find((letter, index) => {
              if (character === letter) {
                let newIndex = index + shift //move to the right
                if (newIndex < 0) {newIndex = newIndex + 26}
                if (newIndex > 25) {newIndex = newIndex - 26}
                newCharacter = alphabet[newIndex]
                result.push(newCharacter)
              }
            })
            } else { result.push(character) }
      })
    } else { //cases where encode is false, decode message
      input.forEach((character, index) => {
        if (alphabet.includes(character)) {
          alphabet.find((letter, index) => {
            if (character === letter) {
              let newIndex = index - shift // move to the left
              if (newIndex < 0) {newIndex = newIndex + 26}
              if (newIndex > 25) {newIndex = newIndex - 26}
              newCharacther = alphabet[newIndex]
              result.push(newCharacther)
            }
          })
        } else { result.push(character) }
      })
    }
    return result.join('')
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
