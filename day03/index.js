function findNaughtyStep(original, modified) {

  const longest = original.length > modified.length ? original : modified
  const shortest = original.length > modified.length ?  modified : original

  for (var i = 0; i < longest.length ; i++) {
    if ( longest[i] !== shortest[i] ) return longest[i]
  }

  return ''
}

module.exports = findNaughtyStep
