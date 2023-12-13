function calculateTime(deliveries) {
    function twoChars(time) {
        if (time < 10) {
            return `0${time}`
        }
        return time
    }
    const maxTime = 7 * 3600 // 7 hours in seconds
    const deliveryTime = deliveries.reduce((acc, delivery) => {
        const [hh, mm, ss] = delivery.split(':')
        return acc + Number(hh) * 3600 + Number(mm) * 60 + Number(ss)
    }, 0)

    const timeLeft = maxTime - deliveryTime
    const absTimeLeft = Math.abs(timeLeft)

    const hours = twoChars(Math.floor(absTimeLeft / 3600))
    const minutes = twoChars(Math.floor((absTimeLeft % 3600) / 60))
    const seconds = twoChars(absTimeLeft % 60)

    return `${timeLeft > 0 ? '-' : ''}${hours}:${minutes}:${seconds}`
}

module.exports = calculateTime