const peerDepsExternal = require("rollup-plugin-peer-deps-external");
const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const typescript = require("@rollup/plugin-typescript");
const terser = require("@rollup/plugin-terser");
const postcss = require("rollup-plugin-postcss");
const image = require("@rollup/plugin-image");

const packageJson = require("./package.json");

module.exports = [
  {
    input: "src/index.ts",
    output: {
      format: "cjs",
      file: packageJson.main,
    },
    plugins: [
      peerDepsExternal({
        includeDependencies: true,
      }),
      image(),
      resolve(),
      commonjs(),
      terser(),
      typescript({
        tsconfig: "./tsconfig.json",
      }),
      postcss({
        extensions: [".css"],
      }),
    ],
  },
  {
    input: "src/index.ts",
    output: {
      format: "esm",
      sourcemap: true,
      file: packageJson.module,
    },
    plugins: [
      peerDepsExternal({
        includeDependencies: true,
      }),
      image(),
      resolve(),
      commonjs(),
      terser(),
      typescript({
        tsconfig: "./tsconfig.json",
      }),
      postcss({
        extensions: [".css"],
      }),
    ],
  },
];
