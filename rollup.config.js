import {copy} from '@web/rollup-plugin-copy';
import resolve from '@rollup/plugin-node-resolve';
import {terser} from 'rollup-plugin-terser';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import summary from 'rollup-plugin-summary';
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/main.ts',
  plugins: [
    typescript({
      target: 'es2020',
      experimentalDecorators: true,
    }),
    resolve(),
    minifyHTML(),
    terser({
      ecma: 2020,
      module: true,
      warnings: true,
    }),
    summary(),
    copy({
      patterns: ['manifest.json'],
    }),
  ],
  output: {
    file: 'dist/main.js',
    format: 'esm',
  },
  preserveEntrySignatures: 'strict',
};
