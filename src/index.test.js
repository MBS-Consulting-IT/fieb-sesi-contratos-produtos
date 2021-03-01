import * as ProductInfo from './index'

it('deve retornar o nome do produto PGR NR 01', () => {
  const name = ProductInfo.getName('2.02.09.04.01.01.01')

  expect(name)
    .toBe('Programa de Gerenciamento de Riscos (PGR) - NR 01')
})

it('deve retornar o nome abreviado do produto: PGR NR 01', () => {
  const abbr = ProductInfo.getAbbr('2.02.09.04.01.01.01')

  expect(abbr)
    .toBe('PGR NR 01')
})

it('deve retornar a categoria do produto: PGR NR 01', () => {
  const category = ProductInfo.getCategory('2.02.09.04.01.01.01')

  expect(category)
    .toBe('PPRA')
})

it('deve retornar os dados produto: PGR NR 01', () => {
  const product = ProductInfo.getProduct('2.02.09.04.01.01.01')

  expect(product)
    .toEqual(expect.objectContaining({
      ids: expect.any(Array),
      name: expect.any(String),
      abbr: expect.any(String),
      category: expect.any(String)
    }))
})

it('deve informar a validade do código do produto', () => {
  const isValid = ProductInfo.isValid('2.02.09.04.01.01.01')

  expect(isValid)
    .toBe(true)
})

it('deve informar a não validade do código do produto dado o tamanho', () => {
  const isValid = ProductInfo.isValid('2.02.09.04.01.01.01.01111')

  expect(isValid)
    .toBe(false)
})

it('deve informar a não validade do código do produto dado o formato', () => {
  const isValid = ProductInfo.isValid('2.02.09.03.01.01.10.')

  expect(isValid)
    .toBe(false)
})

it('deve retornar somente os números do código do produto', () => {
  const isValid = ProductInfo.strip('2.02.09.04.01.01.01')

  expect(isValid)
    .toBe('2020904010101')
})
