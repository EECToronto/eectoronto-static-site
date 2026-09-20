import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const devotions = defineCollection({
	loader: glob({ base: "./src/content/devotions", pattern: "**/*.md" }),
	schema: z.object({
		title: z.string(),
		date: z.coerce.string(),
		category: z.string().optional(),
		lang: z.enum(["en", "am"]).default("am"),
	}),
});

export const collections = { devotions };
