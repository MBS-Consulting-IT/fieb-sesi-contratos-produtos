export default {
  input: './src/index.js',
  output: [
    {
      name: 'ProductInfo',
      file: 'dist/ProductInfo.js',
      format: 'umd',
      sourcemap: true
    },
    {
      name: 'ProductInfo',
      file: 'dist/ProductInfo.esm.js',
      format: 'esm',
      exports: 'named',
      sourcemap: true
    },
    {
      name: 'ProductInfo',
      file: 'dist/ProductInfo.cjs.js',
      format: 'cjs',
      exports: 'named',
      sourcemap: true
    }
  ]
}
