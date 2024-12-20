import { $ } from "execa";

import { readPackageData, removeDependencies } from "../shared/packages.js";

export async function uninstallPackages(offline: boolean | undefined) {
	const packageData = await readPackageData();

	await removeDependencies(
		[
			"@clack/prompts",
			"@prettier/sync",
			"all-contributors-for-repository",
			"chalk",
			"create",
			"execa",
			"get-github-auth-token",
			"git-remote-origin-url",
			"git-url-parse",
			"input-from-file",
			"input-from-file-json",
			"js-yaml",
			"lazy-value",
			"npm-user",
			"octokit",
			"parse-author",
			"parse-package-name",
			"prettier",
			"replace-in-file",
			"rimraf",
			"sort-package-json",
			"title-case",
			"zod",
			"zod-validation-error",
		],
		packageData.dependencies,
	);

	await removeDependencies(
		[
			"@octokit/request-error",
			"@types/git-url-parse",
			"@types/js-yaml",
			"@types/parse-author",
			"all-contributors-cli",
			"c8",
			"create-testers",
			"eslint-config-prettier",
			"globby",
			"tsx",
		],
		packageData.devDependencies,
		"-D",
	);

	await $`pnpm add prettier -D${offline ? " --offline" : ""}`;
}
