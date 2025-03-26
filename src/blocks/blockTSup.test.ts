import { testBlock } from "bingo-stratum-testers";
import { describe, expect, test, vi } from "vitest";

import { blockTSup } from "./blockTSup.js";
import { optionsBase } from "./options.fakes.js";

vi.mock("../utils/resolveBin.js", () => ({
	resolveBin: (bin: string) => `path/to/${bin}`,
}));

describe("blockTSup", () => {
	test("without addons or mode", () => {
		const creation = testBlock(blockTSup, {
			options: optionsBase,
		});

		expect(creation).toMatchInlineSnapshot(`
			{
			  "addons": [
			    {
			      "addons": {
			        "sections": {
			          "Building": {
			            "contents": "
			Run [**tsup**](https://tsup.egoist.dev) locally to build source files from \`src/\` into output files in \`lib/\`:

			\`\`\`shell
			pnpm build
			\`\`\`

			Add \`--watch\` to run the builder in a watch mode that continuously cleans and recreates \`lib/\` as you save files:

			\`\`\`shell
			pnpm build --watch
			\`\`\`
			",
			          },
			        },
			      },
			      "block": [Function],
			    },
			    {
			      "addons": {
			        "beforeLint": "Note that you'll need to run \`pnpm build\` before \`pnpm lint\` so that lint rules which check the file system can pick up on any built files.",
			      },
			      "block": [Function],
			    },
			    {
			      "addons": {
			        "jobs": [
			          {
			            "name": "Build",
			            "steps": [
			              {
			                "run": "pnpm build",
			              },
			              {
			                "run": "node lib/index.js",
			              },
			            ],
			          },
			        ],
			      },
			      "block": [Function],
			    },
			    {
			      "addons": {
			        "properties": {
			          "devDependencies": {
			            "tsup": "8.4.0",
			          },
			          "scripts": {
			            "build": "tsup",
			          },
			        },
			      },
			      "block": [Function],
			    },
			  ],
			  "files": {
			    "tsup.config.ts": "import { defineConfig } from "tsup";

			export default defineConfig({
				bundle: false,
				clean: true,
				dts: true,
				entry: ["src/**/*.ts"],
				format: "esm",
				outDir: "lib",
			});
			",
			  },
			  "scripts": undefined,
			}
		`);
	});

	test("transition mode", () => {
		const creation = testBlock(blockTSup, {
			mode: "transition",
			options: optionsBase,
		});

		expect(creation).toMatchInlineSnapshot(`
			{
			  "addons": [
			    {
			      "addons": {
			        "sections": {
			          "Building": {
			            "contents": "
			Run [**tsup**](https://tsup.egoist.dev) locally to build source files from \`src/\` into output files in \`lib/\`:

			\`\`\`shell
			pnpm build
			\`\`\`

			Add \`--watch\` to run the builder in a watch mode that continuously cleans and recreates \`lib/\` as you save files:

			\`\`\`shell
			pnpm build --watch
			\`\`\`
			",
			          },
			        },
			      },
			      "block": [Function],
			    },
			    {
			      "addons": {
			        "beforeLint": "Note that you'll need to run \`pnpm build\` before \`pnpm lint\` so that lint rules which check the file system can pick up on any built files.",
			      },
			      "block": [Function],
			    },
			    {
			      "addons": {
			        "jobs": [
			          {
			            "name": "Build",
			            "steps": [
			              {
			                "run": "pnpm build",
			              },
			              {
			                "run": "node lib/index.js",
			              },
			            ],
			          },
			        ],
			      },
			      "block": [Function],
			    },
			    {
			      "addons": {
			        "properties": {
			          "devDependencies": {
			            "tsup": "8.4.0",
			          },
			          "scripts": {
			            "build": "tsup",
			          },
			        },
			      },
			      "block": [Function],
			    },
			    {
			      "addons": {
			        "dependencies": [
			          "@babel/cli",
			          "@babel/core",
			          "@babel/preset-typescript",
			          "babel",
			        ],
			      },
			      "block": [Function],
			    },
			    {
			      "addons": {
			        "files": [
			          ".babelrc*",
			          "babel.config.*",
			          "dist",
			          "lib",
			        ],
			      },
			      "block": [Function],
			    },
			    {
			      "addons": {
			        "workflows": [
			          "build",
			          "tsup",
			        ],
			      },
			      "block": [Function],
			    },
			  ],
			  "files": {
			    "tsup.config.ts": "import { defineConfig } from "tsup";

			export default defineConfig({
				bundle: false,
				clean: true,
				dts: true,
				entry: ["src/**/*.ts"],
				format: "esm",
				outDir: "lib",
			});
			",
			  },
			}
		`);
	});

	test("with addons", () => {
		const creation = testBlock(blockTSup, {
			addons: {
				entry: ["!src/**/*.test.ts"],
			},
			options: optionsBase,
		});

		expect(creation).toMatchInlineSnapshot(`
			{
			  "addons": [
			    {
			      "addons": {
			        "sections": {
			          "Building": {
			            "contents": "
			Run [**tsup**](https://tsup.egoist.dev) locally to build source files from \`src/\` into output files in \`lib/\`:

			\`\`\`shell
			pnpm build
			\`\`\`

			Add \`--watch\` to run the builder in a watch mode that continuously cleans and recreates \`lib/\` as you save files:

			\`\`\`shell
			pnpm build --watch
			\`\`\`
			",
			          },
			        },
			      },
			      "block": [Function],
			    },
			    {
			      "addons": {
			        "beforeLint": "Note that you'll need to run \`pnpm build\` before \`pnpm lint\` so that lint rules which check the file system can pick up on any built files.",
			      },
			      "block": [Function],
			    },
			    {
			      "addons": {
			        "jobs": [
			          {
			            "name": "Build",
			            "steps": [
			              {
			                "run": "pnpm build",
			              },
			              {
			                "run": "node lib/index.js",
			              },
			            ],
			          },
			        ],
			      },
			      "block": [Function],
			    },
			    {
			      "addons": {
			        "properties": {
			          "devDependencies": {
			            "tsup": "8.4.0",
			          },
			          "scripts": {
			            "build": "tsup",
			          },
			        },
			      },
			      "block": [Function],
			    },
			  ],
			  "files": {
			    "tsup.config.ts": "import { defineConfig } from "tsup";

			export default defineConfig({
				bundle: false,
				clean: true,
				dts: true,
				entry: ["src/**/*.ts","!src/**/*.test.ts"],
				format: "esm",
				outDir: "lib",
			});
			",
			  },
			  "scripts": undefined,
			}
		`);
	});
});
