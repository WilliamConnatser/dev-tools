import { terser } from "rollup-plugin-terser";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import ts from "rollup-plugin-ts";

export default {
  input: "src/cli.ts",
  output: [
    {
      dir: "lib",
      format: "esm",
    },
  ],
  plugins: [ts(), nodeResolve(), terser()],
  external: ["undici"],
};
