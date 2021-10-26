import { terser } from "rollup-plugin-terser";
import copy from 'rollup-plugin-copy'

const umdModuleMetadata = {
    format: "umd",
    name: 'butter'
};

export default {
    input: 'src/butter.js',
    output: [
        { file: "dist/butter.js", format: "cjs", exports: "auto" },
        { file: "dist/butter.esm.js", format: "esm", exports: "auto" },
        { file: "dist/cdn/butter.js", ...umdModuleMetadata },
        { file: "dist/cdn/butter.min.js", ...umdModuleMetadata, plugins: [terser()] },
        { file: "sample/cdn/butter.js", ...umdModuleMetadata }
    ],
    plugins: [
        copy({
            targets: [
              { src: 'README.md', dest: 'dist/' }
            ]
          })
    ]
  };