import { testBlock } from "create-testers";
import { describe, expect, test } from "vitest";

import { blockTSup } from "./blockTSup.js";
import { optionsBase } from "./options.fakes.js";

describe("blockTSup", () => {
	test("without addons", () => {
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
			                "run": "node ./lib/index.js",
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
			            "tsup": "8.3.5",
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
				sourcemap: true,
			});
			",
			  },
			  "scripts": undefined,
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
			                "run": "node ./lib/index.js",
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
			            "tsup": "8.3.5",
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
				sourcemap: true,
			});
			",
			  },
			  "scripts": undefined,
			}
		`);
	});
});
