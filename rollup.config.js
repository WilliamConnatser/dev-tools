import { terser } from "rollup-plugin-terser";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import ts from "rollup-plugin-ts";

export default {
  input: "src/cli.ts",
  output: [
    {
      dir: "lib",
      format: "esm",
    },
  ],
  plugins: [json(), ts(), nodeResolve(), commonjs(), terser()],
};
