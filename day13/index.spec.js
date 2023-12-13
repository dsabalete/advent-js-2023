const calculateTime = require('./index.js')

describe('calculateTime', () => {
    it('returns -02:20:00 for an array', () => {
        expect(calculateTime(['00:10:00', '01:00:00', '03:30:00'])).toEqual('-02:20:00')
    })

    it('returns 00:30:00 for an array', () => {
        expect(calculateTime(['02:00:00', '05:00:00', '00:30:00'])).toEqual('00:30:00')
    })

    it('returns -05:29:00 for an array', () => {
        expect(calculateTime([
            '00:45:00',
            '00:45:00',
            '00:00:30',
            '00:00:30'
        ])).toEqual('-05:29:00')
    })
})
