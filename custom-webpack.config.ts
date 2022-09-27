import type { Configuration } from "webpack";

module.exports = {
	entry: {
		serviceWorker: "src/scripts/serviceWorker.ts",
		contentPage: "src/scripts/contentPage.ts",
	},
} as Configuration;
