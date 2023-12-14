/** 
 * First attempt doesn't work for all cases although it passes the test mentioned in the problem
 */


function maxGifts(houses) {

  if (houses.length === 1) {
    return houses[0]
  }

  let maxValue = Math.max(...houses)
  let iMax = houses.indexOf(maxValue)
  // console.log(houses, iMax)

  let total = maxValue

  // search right
  let right = houses.slice(iMax + 2)
  // console.log('right', right)
  while (right.length > 0) {
    let maxValue = Math.max(...right)
    // console.log('maxValue', maxValue)

    let iMax = right.indexOf(maxValue)
    // console.log('iMax', iMax)

    total += maxValue
    // console.log('total', total)

    right = right.length > 2 ? right.slice(iMax + 2) : []
  }

  // search left
  let left = iMax > 1 ? houses.slice(0, iMax - 1) : []
  // console.log('left', left)
  while (left.length > 0) {
    let maxValue = Math.max(...left)
    let iMax = left.indexOf(maxValue)
    total += maxValue
    left = iMax > 1 ? left.slice(0, iMax - 2) : []
  }

  return total
}



/**
 * Solution found at https://github.com/tswistak/programming-riddles
 */
// function maxGifts(houses) {
//   let n = houses.length;
//   if (n === 1) {
//     return houses[0];
//   }

//   let dp = new Array(n);
//   dp[0] = houses[0];
//   dp[1] = Math.max(houses[0], houses[1]);

//   for (let i = 2; i < n; i++) {
//     dp[i] = Math.max(dp[i - 1], houses[i] + dp[i - 2]);
//   }

//   return dp[n - 1];
// }

module.exports = maxGifts