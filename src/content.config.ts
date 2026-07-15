import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const base = z.object({
  title: z.string(),
  description: z.string().optional(),
  date: z.coerce.date().optional(),
  tags: z.array(z.string()).default([]),
  featured: z.boolean().default(false),
  image: z.string().optional(),
  hidden: z.boolean().default(false),
});

const projects = defineCollection({ loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }), schema: base.extend({
  status: z.string().optional(),
  github: z.string().url().optional(),
  live: z.string().url().optional(),
  relatedWriting: z.array(z.string()).default([]),
}) });
const writing = defineCollection({ loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/writing' }), schema: base.extend({
  author: z.string().default('Gobind Singh'),
  categories: z.array(z.string()).default([]),
}) });
const poetry = defineCollection({ loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/poetry' }), schema: base });
const books = defineCollection({ loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/books' }), schema: base.extend({
  author: z.string().optional(), progress: z.number().min(0).max(100).optional(), state: z.enum(['reading', 'finished', 'wishlist']).default('reading'),
}) });
const photos = defineCollection({ loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/photos' }), schema: base.extend({
  location: z.string().optional(), alt: z.string().optional(), month: z.string().optional(),
}) });
const timeline = defineCollection({ loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/timeline' }), schema: base.extend({
  kind: z.string(), organization: z.string().optional(),
}) });
const now = defineCollection({ loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/now' }), schema: base });
const hobbies = defineCollection({ loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/hobbies' }), schema: base.extend({
  category: z.enum(['Travel', 'Basketball', 'Playing Cards', 'Movies & Series', 'Books', 'Anime', 'Other']),
  icon: z.string().optional(),
  gallery: z.array(z.string()).default([]),
}) });
const takes = defineCollection({ loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/takes' }), schema: base.extend({
  type: z.enum(['ranking', 'comparison', 'opinion', 'recommendation']).default('opinion'),
  topic: z.string().optional(),
  related: z.array(z.string()).default([]),
}) });

export const collections = { projects, writing, poetry, books, photos, timeline, now, hobbies, takes };
