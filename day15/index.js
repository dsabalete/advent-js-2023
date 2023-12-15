function autonomousDrive(store, movements) {

  function initPos(store) {
    for (let i = 0; i < store.length; i++) {
      const col = store[i].indexOf('!')
      if (col !== -1) {
        return { row: i, col }
      }
    }
    return null
  }

  let pos = initPos(store)
  const rows = store.length
  const cols = store[0].length

  for (const movement of movements) {
    let r = pos.row
    let c = pos.col

    switch (movement) {
      case 'R':
        c++
        break
      case 'L':
        c--
        break
      case 'U':
        r--
        break
      case 'D':
        r++
        break
    }

    if (r >= 0 && r < rows && c >= 0
      && c < cols && store[r][c] !== '*') {
      store[pos.row] = store[pos.row].substring(0, pos.col) +
        '.' + store[pos.row].substring(pos.col + 1)
      store[r] = store[r].substring(0, c) +
        '!' + store[r].substring(c + 1)
      pos.row = r
      pos.col = c
    }
  }

  return store
}

// Example usage:
// const store = ['..!....', '...*.*.'];
// const movements = ['R', 'R', 'D', 'L'];
// const result = autonomousDrive(store, movements);
// console.log(result);


module.exports = autonomousDrive