import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const note = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/notes', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			isPublished: z.boolean().optional().default(false),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
			featured: z.boolean().optional().default(false),
		}),
});

export const collections = { note };
