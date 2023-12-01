function findFirstRepeated(gifts) {
    const giftIds = {}
    for (let i = 0; i < gifts.length; i++) {
        const giftId = gifts[i]
        if (giftIds[giftId]) {
            return giftId
        }
        giftIds[giftId] = true
    }
    return -1
}

module.exports = findFirstRepeated