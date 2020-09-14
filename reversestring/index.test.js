const reverse = require('./index');

it('Reverce function existe', () => {
    expect(reverse).toBeDefined();
})
it('Reverse reverses a string', () => {
    expect(reverse('abcd')).toEqual('dcba');
})

it('Reverse reverses a string', () => {
    expect(reverse('  abcd')).toEqual('dcba  ');
});