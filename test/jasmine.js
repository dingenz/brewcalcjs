describe('gravityAreometer tests', function () {
    it('returns correct value', function () {
        var value = BrewCalc.gravityAreometer(12, 20);
        expect(value).toBe(12);
    });
});