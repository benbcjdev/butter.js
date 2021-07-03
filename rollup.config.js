import { terser } from "rollup-plugin-terser";

export default {
    input: 'src/butter.js',
    output: [
        { file: "dist/butter.js", format: "cjs" },
        { file: "dist/butter.min.js", format: "cjs", plugins: [terser()] },
        { file: "dist/butter.esm.js", format: "esm" },
    ],
    plugins: [terser()]
  };