import "dotenv/config";
import { Inngest } from "inngest";

export const inngest = new Inngest({
	id: "stonks",
	ai: {
		gemini: {
			apiKey: process.env.GEMINI_AI_KEY,
		},
	},
});

