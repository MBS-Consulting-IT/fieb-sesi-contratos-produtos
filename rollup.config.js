import pkg from './package.json'

export default {
  input: './src/index.js',
  output: [
    {
      file: pkg.module,
      format: 'esm',
      sourcemap: true
    },
    {
      name: 'ProductInfo',
      file: pkg.browser,
      format: 'umd',
      sourcemap: true
    }
  ]
}
