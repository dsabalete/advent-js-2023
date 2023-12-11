/**
 * My solution didn't pass secret test #13 :-(
 */
// function getIndexsForPalindrome(word) {
//   function isPalindrome(s) {
//     return s === s.split('').reverse().join('')
//   }

//   // If it is already a palindrome, an empty array.
//   if (isPalindrome(word)) return []

//   const chars = word.split('')

//   let i = 0
//   let j = word.length - 1
//   let pair = []
//   while (i < j) {
//     if (chars[i] !== chars[j]) {
//       let k = chars.indexOf(chars[j])
//       if (k < j && k != -1) {
//         pair = [i, k]
//         break
//       }

//       if (k === j) {
//         const m = Math.floor(word.length / 2)
//         pair = [m, k]
//         break
//       }
//     }
//     i++
//     j--
//   }

//   if (pair.length > 0) {
//     const changed = [...chars]
//     changed[pair[0]] = chars[pair[1]]
//     changed[pair[1]] = chars[pair[0]]
//     return isPalindrome(changed.join('')) ? pair : null
//   }
// }

// Alternative solution
function getIndexsForPalindrome(word) {
  function isPalindrome(s) {
    return s === s.split('').reverse().join('')
  }

  if (isPalindrome(word)) return []

  let i = 0
  for (const char1 of word) {
    let j = i + 1
    for (const char2 of word.slice(j)) {
      const changed = [...word]
      changed[i] = char2
      changed[j] = char1
      if (isPalindrome(changed.join(''))) return [i, j]
      j++
    }
    i++
  }

  return null
}

// getIndexsForPalindrome('rotaratov')

module.exports = getIndexsForPalindrome
