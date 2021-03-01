import products from './products'

const ORIGINAL_PRODUCT_LENGTH = 15
const ORIGINAL_PRODUCT_REGEX =
  /\d{1}\.\d{2}\.\d{2}\.\d{2}\.\d{2}\.\d{3}\.\d{3}$/

const NEW_PRODUCT_LENGTH = 13
const NEW_PRODUCT_REGEX =
  /\d{1}\.\d{2}\.\d{2}\.\d{2}\.\d{2}\.\d{2}\.\d{2}$/

/**
 * 🔑 Métodos Públicos
 */

/**
 * @typedef {"PPRA" | "Higiene Ocupacional" | "Ergonomia" | "PCMSO" | "Atendimento InCompany"} ProductCategory
 *
 * @typedef {String[]} ProductIds
 *
 * @typedef {Object} Product
 * @property {ProductIds} ids - Lista de códigos de um determinado produto
 * @property {String} name - Nome completo do produto
 * @property {String} abbr - Nome abreviado do produto
 * @property {ProductCategory} category - Categoria do produto
 */

/**
 * @public
 * @param {String} id - código do produto no CRM
 * @return {Product} informações do produto
 */
export const getProduct = id =>
  findProduct(id)

/**
 * @public
 * @param {String} id - código do produto no CRM
 * @return {String} nome completo do produto
 */
export const getName = id =>
  findProduct(id).name

/**
 * @public
 * @param {String} id - código do produto no CRM
 * @return {String} nome abreviado do produto
 */
export const getAbbr = id =>
  findProduct(id).abbr

/**
 * @public
 * @param {String} id - código do produto no CRM
 * @return {String} categoria do produto
 */
export const getCategory = id =>
  findProduct(id).category

/**
 * @public
 * @param {String} id - código do produto no CRM
 * @return {Boolean} validade do código de produto
 */
export const isValid = id => {
  const stripped = strip(id)

  const validPattern =
    ORIGINAL_PRODUCT_REGEX.test(id) ||
    NEW_PRODUCT_REGEX.test(id)

  const validLength =
    stripped.length === ORIGINAL_PRODUCT_LENGTH ||
    stripped.length === NEW_PRODUCT_LENGTH

  return validPattern && validLength
}

/**
 * @public
 * @param {String} id - código do produto no CRM
 * @return {String} nome abreviado do produto
 */
export const strip = id =>
  (id || '').toString().replace(/[^\d]/g, '')

/**
 * 🔒 Métodos Privados
 */

/**
 * @private
 * @param {String} id - código do produto no CRM
 * @return {Product} informações do produto
 */
function findProduct (id) {
  if (!isValid(id)) {
    return handleErrors(
      'Código Inválido. O código deve respeitar os formatos: ' +
      '0.00.00.00.00.000.000 ou 0.00.00.00.00.00.00. ' +
      `O código informado foi: ${id}`
    )
  }

  const product = products.find(({ ids }) =>
    ids.includes(id)
  )

  if (!product) {
    return handleErrors(`Código não identificado. Código: ${id}`)
  }

  return product
}

function handleErrors (message) {
  const codflow = getElementValue('#inpCodFlow')
  const codflowExecute = getElementValue('#inpCodFlowExecute')
  const codflowExecuteTask = getElementValue('#inpCodFlowExecuteTask')

  throw new ProductException({
    message,
    codflow,
    codflowExecute,
    codflowExecuteTask
  })
}

/**
 * @private
 * @param {String} qs - selector query string
 * @returns {String|Null} element value
 */
function getElementValue (qs) {
  const element = document.querySelector(qs)

  return element
    ? element.value
    : null
}

/**
 * @private
 */
function ProductException ({ message, codflow, codflowExecute, codflowExecuteTask }) {
  this.name = 'ProductInfo'
  this.message = message
  this.codflow = codflow
  this.codflowExecute = codflowExecute
  this.codflowExecuteTask = codflowExecuteTask
}
