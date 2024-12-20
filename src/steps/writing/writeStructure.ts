import { $ } from "execa";

import { isUsingCreateEngine } from "../../shared/isUsingCreateEngine.js";
import { Options } from "../../shared/types.js";
import { createStructure } from "./creation/index.js";
import { writeStructureWorker } from "./writeStructureWorker.js";

export async function writeStructure(options: Options) {
	await writeStructureWorker(
		await createStructure(options, isUsingCreateEngine()),
		".",
	);

	try {
		// https://github.com/JoshuaKGoldberg/create-typescript-app/issues/718
		await $`chmod ug+x .husky/pre-commit`;
	} catch {
		// https://github.com/JoshuaKGoldberg/create-typescript-app/issues/1195
	}
}
