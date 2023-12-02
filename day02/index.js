function manufacture(gifts, materials) {
  return gifts.filter((gift) => {
    const giftLetters = [...gift]
    return giftLetters.every((letter) => materials.includes(letter))
  })
}

module.exports = manufacture
