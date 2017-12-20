import babel from 'rollup-plugin-babel';
import pkg from './package.json';

export default [
  {
    input: 'src/main.js',
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.browser, format: 'umd' },
      { file: pkg.module, format: 'es' },
    ],
    name: 'VanillaSharing',
    plugins: [
      babel(),
    ],
  },
];
