/**
 * My solution: 
 * - cognitive complexity: 16
 * - points earned: 25
 */
// function checkIsValidCopy(original, copy) {
//   const arrOriginal = [...original]
//   const arrCopy = [...copy]

//   const isDegradedChar = (string) => /^(\#|\+|\:|\.|\s)$/.test(string)
//   const isValidDegradation = ( orig, cp ) => {
//     if (/^[A-Z]*$/.test(orig)) {
//       return orig === cp.toUpperCase() || isDegradedChar(cp)
//     }
//     if (/^[a-z]*$/.test(orig)) {
//       return isDegradedChar(cp)
//     }
//     if (isDegradedChar(orig)) {
//       return isDegradedChar(cp) && orig !== ' '
//     }
//   }

//   for (let i = 0; i < arrOriginal.length; i++) {
//     let o = arrOriginal[i], c = arrCopy[i]
//     if (o !== c && !isValidDegradation(o, c)) return false
//   }

//   return true
// }

/**
 * Good solution found at https://github.com/iswilljr/adventjs
 * - cognitive complexity: 1
 * - points earned: 290
 */
function checkIsValidCopy(original, copy) {
  let isValidCopy = true
  let index = 0

  for (const letter of original) {
    const copyLetter = copy[index++]

    const isValidLetter = [
      letter.toLowerCase(),
      '#',
      '+',
      ':',
      '.',
      ' ',
    ].includes(copyLetter)

    const isCopyLetterBlankSpace = copyLetter === ' '
    const isLetterBlankSpace = letter === ' '

    const isValidCharacter = [isValidLetter, isCopyLetterBlankSpace][
      +isLetterBlankSpace
    ]

    isValidCopy = [isValidCopy, isValidCharacter][+isValidCopy]
  }

  return isValidCopy
}


// console.log(checkIsValidCopy('3 #egalos', '3 .+:# #:'))

module.exports = checkIsValidCopy
