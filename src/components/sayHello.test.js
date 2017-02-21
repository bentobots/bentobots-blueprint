import sayHello from './sayHello'

it('says Hello with no name', () => {
  const result = sayHello()
  expect(result).toEqual({PHRASE: 'Hello stranger'})
})

it('says Hello with a name', () => {
  const result = sayHello({NAME: () => ('WORLD')})
  expect(result).toEqual({PHRASE: 'Hello WORLD'})
})
