import LoremIpsumGenerator from "./LoremIpsumGenerator.vue";

export default {
	install(app, options) {
		app.component("lorem-ipsum-generator", LoremIpsumGenerator);
	},
};
