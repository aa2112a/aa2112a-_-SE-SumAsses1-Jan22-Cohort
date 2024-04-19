const StandardiseMSISDNs = require('./script');

describe('Test Standardise Msisdns', () => {
  it('Checks if the function is returning values as expected', () => {
    expect(() => StandardiseMSISDNs(447473676677)).toThrowError('input is not a string');
    expect(StandardiseMSISDNs('07473676677')).toEqual('+447473676677');
    expect(StandardiseMSISDNs('447473676677')).toEqual('+447473676677');
    expect(StandardiseMSISDNs('7473676677')).toEqual('+447473676677');
  })
});