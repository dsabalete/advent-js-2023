function maxDistance(movements) {
  const dic = { '>': 1, '<': -1, '*': 0 }
  const known = [...movements].reduce((ac, cu) => ac + dic[cu], 0)
  const unknown = [...movements].filter(i => i === '*').length
  return Math.abs(known) + unknown
}

module.exports = maxDistance