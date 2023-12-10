function createChristmasTree(ornaments, height) {
  const ornts = [...ornaments]
  const tree = []
  let index = 0

  for (let i = 0; i < height; i++) {
    let numItems = i + 1
    let items = []
    for (let j = 0; j < numItems; j++) {
      items.push(ornts[index])
      index++
      if (index === ornts.length) {
        index = 0
      }
    }
    tree.push(' '.repeat(height - 1 - i) + items.join(' '))
  }

  tree.push(' '.repeat(height - 1) + '|\n')

  return tree.join('\n')
}

// console.log(createChristmasTree('*@o', 3))

module.exports = createChristmasTree
