function getStaircasePaths(steps, maxJump) {
  const results = []

  function jump(curr, stepsLeft) {
    if (stepsLeft === 0) {
      results.push(curr.slice()) // slice() to make a copy of curr
      return
    }

    // jump 1 step, 2 steps, 3 steps, ... maxJump steps
    for (let i = 1; i <= Math.min(stepsLeft, maxJump); i++) {
      curr.push(i)
      jump(curr, stepsLeft - i)
      curr.pop() // backtrack
    }
  }

  jump([], steps)
  return results
}

module.exports = getStaircasePaths