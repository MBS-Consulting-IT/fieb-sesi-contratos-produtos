var products = [
    {
    ids: [
      '2.02.09.03.01.01.07'
    ],
    name: 'Assessoria do médico do trabalho na empresa',
    abbr: 'Assessoria Médica',
    category: 'Visitas'
  },
  {
  ids: [
    '2.02.09.03.01.01.08'
  ],
  name: 'Serviços de enfermagem do trabalho',
  abbr: 'Serviços de Enfermagem',
  category: 'Visitas'
  },
  {
    ids: [
      '2.02.09.03.01.01.16'
    ],
    name: 'Programa de Conservação Auditiva - PCA / PPPA',
    abbr: 'PCA / PPPA',
    category: 'PCA'
  },
  {
    ids: [
      '2.02.09.05.01.01.01'
    ],
    name: 'Auditoria de Conformidade às NR',
    abbr: 'Auditoria NR',
    category: 'Consultoria SST'
  },
  {
    ids: [
      '2.02.09.05.01.02.01'
    ],
    name: 'Consultoria para Adequação às NR',
    abbr: 'Consultoria NR',
    category: 'Consultoria SST'
  },
  {
    ids: [
      '2.02.09.05.01.05.01'
    ],
    name: 'Consultoria para Implantação de Sistema de Gestão em SST (ISO 45001)',
    abbr: 'Consultoria NR - ISO 45001',
    category: 'Consultoria SST'
  },
  {
    ids: [
      '2.02.09.05.01.06.01'
    ],
    name: 'Consultoria para Gestão de SST para Cadeia de Fornecedores',
    abbr: 'Consultoria NR - Fornecedores',
    category: 'Consultoria SST'
  },
  {
    ids: [
      '2.02.09.05.01.04.02'
    ],
    name: 'Consultoria em Gestão de Risco em Máquinas e Equipamentos (NR 12)',
    abbr: 'Consultoria NR 12',
    category: 'Demais NR'
  },
  {
    ids: [
      '2.02.09.03.01.01.13'
    ],
    name: 'Projeto/Laudo Técnico das Instalações Elétricas (NR 10)',
    abbr: 'Projeto/Laudo NR 10',
    category: 'Demais NR'
  },
  {
    ids: [
      '2.02.09.03.01.01.14'
    ],
    name: 'Projeto de Proteção Contra Incêndio e Pânico (NR 23)',
    abbr: 'Projeto NR 23',
    category: 'Demais NR'
  },
  {
    ids: [
      '2.02.09.03.01.01.15'
    ],
    name: 'Plano de Resposta à Emergência',
    abbr: 'Plano de Resposta',
    category: 'Demais NR'
  },
  {
    ids: [
      '2.02.09.03.01.01.17'
    ],
    name: 'Programa de Proteção Respiratória - PPR',
    abbr: 'PPR',
    category: 'Demais NR'
  },
  {
    ids: [
      '2.02.09.03.01.04.01'
    ],
    name: 'Realização do Inventário, Plano de Adequação e cronograma das máquinas e equipamentos de acordo com a NR 12',
    abbr: 'Inventário/Plano NR 12',
    category: 'Demais NR'
  },
  {
    ids: [
      '2.02.09.03.01.04.02'
    ],
    name: 'Elaboração do manual de máquinas e equipamentos - NR 12',
    abbr: 'Manual de Máquinas NR 12',
    category: 'Demais NR'
  },
  {
    ids: [
      '2.02.09.03.01.04.03'
    ],
    name: 'Elaboração de laudo técnico de conformidade - NR 12',
    abbr: 'Laudo NR 12',
    category: 'Demais NR'
  },
  {
    ids: [
      '2.02.01.03.01.01.19'
    ],
    name: 'Projeto Sistema de Proteção contra Descargas Atmosféricas (SPDA) - NR 10',
    abbr: 'SPDA NR 10',
    category: 'Demais NR'
  },
  {
    ids: [
      '2.02.01.03.01.01.18'
    ],
    name: 'Análise e Investigação de Acidentes',
    abbr: 'Investigação de Acidentes',
    category: 'Demais NR'
  },
  {
    ids: [
      '2.02.09.04.01.01.01'
    ],
    name: 'Programa de Gerenciamento de Riscos (PGR) - NR 01',
    abbr: 'PGR NR 01',
    category: 'PPRA'
  },
  {
    ids: [
      '2.02.01.01.03.001.001',
      '2.02.09.03.01.01.02'
    ],
    name: 'Programa de Prevenção de Riscos Ambientais (PPRA) - NR 09',
    abbr: 'PPRA NR 09',
    category: 'PPRA'
  },
  {
    ids: [
      '2.02.01.01.06.002.001',
      '2.02.09.03.01.01.09'
    ],
    name: 'Programa de Gerenciamento de Riscos na Mineração (PGR) - NR 22',
    abbr: 'PGR NR 22',
    category: 'PPRA'
  },
  {
    ids: [
      '2.02.01.01.02.003.001',
      '2.02.09.03.01.01.10'
    ],
    name: 'Programa de Condições de Meio Ambiente de Trabalho na Indústria da Construção (PCMAT) - NR 18',
    abbr: 'PCMAT NR 18',
    category: 'PPRA'
  },
  {
    ids: [
      '2.02.01.01.06.003.005',
      '2.02.09.03.01.01.11'
    ],
    name: 'Programa de Gerenciamento de Riscos no Trabalho Rural (PGRTR) - NR 31',
    abbr: 'PGRTR NR 31',
    category: 'PPRA'
  },
  {
    ids: [
      '2.02.01.01.03.002.008',
      '2.02.09.03.01.02.01'
    ],
    name: 'Avaliação ambiental - agentes físicos',
    abbr: 'Agente Físico',
    category: 'Higiene Ocupacional'
  },
  {
    ids: [
      '2.02.01.01.03.002.009',
      '2.02.09.03.01.02.02'
    ],
    name: 'Avaliação ambiental - agentes químicos',
    abbr: 'Agente Químico',
    category: 'Higiene Ocupacional'
  },
  {
    ids: [
      '2.02.01.01.07.001.004',
      '2.02.09.03.01.02.03'
    ],
    name: 'Laudos (LTCAT / Insalubridade / Periculosidade)',
    abbr: 'Laudos',
    category: 'Higiene Ocupacional'
  },
  {
    ids: [
      '2.02.01.01.05.003.001',
      '2.02.09.03.01.03.03'
    ],
    name: 'AET - Análise ergonômica do trabalho (NR 17)',
    abbr: 'AET NR 17',
    category: 'Ergonomia'
  },
  {
    ids: [
      '2.02.09.03.01.03.04'
    ],
    name: 'Laudo de iluminância (NHO 11)',
    abbr: 'Iluminância NHO 11',
    category: 'Ergonomia'
  },
  {
    ids: [
      '2.02.01.01.05.002.002',
      '2.02.01.01.05.002.001',
      '2.02.09.05.01.03.01'
    ],
    name: 'Consultoria em Ergonomia',
    abbr: 'Consultoria',
    category: 'Ergonomia'
  },
  {
    ids: [
      '2.02.01.01.08.001.001',
      '2.02.09.03.01.01.03'
    ],
    name: 'Programa de Controle Médico de Saúde Ocupacional (PCMSO) - NR 07',
    abbr: 'PCMSO NR 07',
    category: 'PCMSO'
  },
  {
    ids: [
      '2.02.01.01.08.001.006',
      '2.02.09.03.01.01.04'
    ],
    name: 'Programa de Controle Médico de Saúde Ocupacional (PCMSO) sem Coordenação Médica- NR 07',
    abbr: 'PCMSO NR 07 - Sem Coordenação Médica',
    category: 'PCMSO'
  },
  {
    ids: [
      '2.02.01.01.08.001.004',
      '2.02.09.03.01.01.05'
    ],
    name: 'Relatório Anual do Programa de Controle Médico de Saúde Ocupacional (PCMSO)',
    abbr: 'Relatório Anual PCMSO',
    category: 'Atendimento InCompany'
  },
  {
    ids: [
      '2.02.01.01.09.001.001',
      '2.02.09.03.01.01.12'
    ],
    name: 'Consultas e Exames Ocupacionais',
    abbr: 'Consultas e Exames Ocup.',
    category: 'Atendimento InCompany'
  },
  {
    ids: [
      '2.02.01.01.10.001.001'
    ],
    name: 'Consultas e Exames Ocupacionais',
    abbr: 'Consultas e Exames Ocup. Desativ',
    category: 'Atendimento InCompany'
  }
];

const ORIGINAL_PRODUCT_LENGTH = 15;
const ORIGINAL_PRODUCT_REGEX =
  /\d{1}\.\d{2}\.\d{2}\.\d{2}\.\d{2}\.\d{3}\.\d{3}$/;

const NEW_PRODUCT_LENGTH = 13;
const NEW_PRODUCT_REGEX =
  /\d{1}\.\d{2}\.\d{2}\.\d{2}\.\d{2}\.\d{2}\.\d{2}$/;

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
const getProduct = id =>
  findProduct(id);

/**
 * @public
 * @param {String} id - código do produto no CRM
 * @return {String} nome completo do produto
 */
const getName = id =>
  findProduct(id)?.name || null;

/**
 * @public
 * @param {String} id - código do produto no CRM
 * @return {String} nome abreviado do produto
 */
const getAbbr = id =>
  findProduct(id)?.abbr || null;

/**
 * @public
 * @param {String} id - código do produto no CRM
 * @return {String} categoria do produto
 */
const getCategory = id =>
  findProduct(id)?.category || null;

/**
 * @public
 * @param {String} id - código do produto no CRM
 * @return {Boolean} validade do código de produto
 */
const isValid = id => {
  const stripped = strip(id);

  const validPattern =
    ORIGINAL_PRODUCT_REGEX.test(id) ||
    NEW_PRODUCT_REGEX.test(id);

  const validLength =
    stripped.length === ORIGINAL_PRODUCT_LENGTH ||
    stripped.length === NEW_PRODUCT_LENGTH;

  return validPattern && validLength
};

/**
 * @public
 * @param {String} id - código do produto no CRM
 * @return {String} nome abreviado do produto
 */
const strip = id =>
  (id || '').toString().replace(/[^\d]/g, '');

/**
 * 🔒 Métodos Privados
 */

/**
 * @private
 * @param {String} id - código do produto no CRM
 * @return {Product} informações do produto
 */
function findProduct (id) {
  if (!id || id === '') {
    console.info('Código de produto vazio.');
    return null
  }

  if (!isValid(id)) {
    return handleErrors(
      'Código Inválido. O código deve respeitar os formatos: ' +
      '0.00.00.00.00.000.000 ou 0.00.00.00.00.00.00. ' +
      `O código informado foi: ${id}`
    )
  }

  const product = products.find(({ ids }) =>
    ids.includes(id)
  );

  if (!product) {
    console.info(`Código de produto não identificado. Código: ${id}`);
  }

  return product
}

function handleErrors (message) {
  const codflow = getElementValue('#inpCodFlow');
  const codflowExecute = getElementValue('#inpCodFlowExecute');
  const codflowExecuteTask = getElementValue('#inpCodFlowExecuteTask');

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
  const element = document.querySelector(qs);

  return element
    ? element.value
    : null
}

/**
 * @private
 */
function ProductException ({ message, codflow, codflowExecute, codflowExecuteTask }) {
  this.name = 'ProductInfo';
  this.message = message;
  this.codflow = codflow;
  this.codflowExecute = codflowExecute;
  this.codflowExecuteTask = codflowExecuteTask;
}

export { getAbbr, getCategory, getName, getProduct, isValid, strip };
//# sourceMappingURL=ProductInfo.esm.js.map
