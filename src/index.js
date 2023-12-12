import LoremIpsumGenerator from "./components/LoremIpsumGenerator.vue";

export default {
	install(app, options) {
		app.component("LoremIpsumGenerator", LoremIpsumGenerator);
	},
};
