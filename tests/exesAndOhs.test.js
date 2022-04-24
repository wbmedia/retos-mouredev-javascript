const exesAndOhs = require('../exesAndOhs')

test('exesAndOhs', () => {
  expect(exesAndOhs('xo')).toBe(true)
  expect(exesAndOhs('xxOo')).toBe(true)
  expect(exesAndOhs('xxm')).toBe(false)
  expect(exesAndOhs('Oo')).toBe(false)
  expect(exesAndOhs('ooom')).toBe(false)
  expect(exesAndOhs('xooxxoo')).toBe(false)
  expect(exesAndOhs('lxXxOojo')).toBe(true)
})
