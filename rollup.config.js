import { terser } from "rollup-plugin-terser";
import copy from 'rollup-plugin-copy'

export default {
    input: 'src/butter.js',
    output: [
        { file: "dist/src/butter.js", format: "cjs" },
        { file: "dist/src/butter.min.js", format: "cjs", plugins: [terser()] },
        { file: "dist/src/butter.esm.js", format: "esm" },
    ],
    plugins: [
        copy({
            targets: [
              { src: 'README.md', dest: 'dist/' }
            ]
          })
    ]
  };