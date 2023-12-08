function organizeGifts(gifts) {
    const items = [...gifts]
    const groups = []
    let number = []
    const gfts = []

    items.forEach(item => {
        if (!isNaN(item)) {
            number.push(item)
        } else {
            groups.push([ item, parseInt(number.join('')) ])
            number = []
        }
    })
    
    groups.forEach(group => {
        const g = group[0]
        const pallets = Math.trunc(group[1] / 50)
        if (pallets) {
            gfts.push(`[${g}]`.repeat(pallets))
        }
        let remain = group[1] % 50
        const boxes = Math.trunc(remain / 10)
        if (boxes) {
            gfts.push(`{${g}}`.repeat(boxes))
        }
        remain = remain % 10
        if (remain) {
            gfts.push(`(${g.repeat(remain)})`)
        }
    })

    return gfts.join('')
}

// console.log(organizeGifts('76a11b'))

module.exports = organizeGifts