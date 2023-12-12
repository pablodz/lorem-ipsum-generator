<template>
	<div>
		<p class="lorem-ipsum-text">{{ loremIpsumText }}</p>
	</div>
</template>

<script>
import { LoremIpsum } from "lorem-ipsum";

export default {
	props: {
		textLength: {
			type: Number,
			default: 100, // Default length if not provided
		},
	},
	data() {
		return {
			loremIpsumText: "",
		};
	},
	created() {
		// Generate Lorem Ipsum text when the component is created
		this.generateLoremIpsum();
	},
	updated() {
		// DONT APPLY ON PRODUCTION
		let env = "development";
		if (env === "development" || env === "") {
			this.generateLoremIpsum();
		}
	},
	methods: {
		generateLoremIpsum() {
			const lorem = new LoremIpsum({
				sentencesPerParagraph: {
					max: 8,
					min: 4,
				},
				wordsPerSentence: {
					max: 16,
					min: 4,
				},
			});

			let text = lorem.generateWords(this.textLength);
			// first letter to uppercase
			text = text.charAt(0).toUpperCase() + text.slice(1);

			console.log("Lorem Ipsum text len generated: ", text.length);
			this.loremIpsumText = text;
		},
	},
};
</script>