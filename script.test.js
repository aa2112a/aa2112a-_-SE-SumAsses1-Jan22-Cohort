// Import scripts file
const StandardiseMSISDNs = require('./script');

// test StandardiseMSISDNs function
describe('Test Standardise Msisdns', () => {
  it('Checks if the function is returning values as expected', () => {
    expect(() => StandardiseMSISDNs(447473676677)).toThrowError('input is not a string');
    expect(StandardiseMSISDNs('0007473676677')).toEqual('+447473676677');
    expect(StandardiseMSISDNs('007473676677')).toEqual('+447473676677');
    expect(StandardiseMSISDNs('07473676677')).toEqual('+447473676677');
    expect(StandardiseMSISDNs('447473676677')).toEqual('+447473676677');
    expect(StandardiseMSISDNs('7473676677')).toEqual('+447473676677'); 
    expect(StandardiseMSISDNs('31412345678')).toEqual('+31412345678'); 
    expect(StandardiseMSISDNs('123')).toEqual('123 is not a valid msisdn (Reason: short length)')
    expect(StandardiseMSISDNs('123456789012345')).toEqual('123456789012345 is not a valid msisdn (Reason: long length)')
  })
});