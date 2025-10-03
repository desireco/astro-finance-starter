import { defineCollection, z } from 'astro:content';

const pagesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    language: z.enum(['en', 'es']),
    metatags: z.object({
      title: z.string().optional(),
      description: z.string().optional(),
      og_title: z.string().optional(),
      og_description: z.string().optional(),
      og_image: z.string().optional(),
      twitter_title: z.string().optional(),
      twitter_description: z.string().optional(),
      twitter_image: z.string().optional(),
    }).optional(),
  }),
});

const reportsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),
    date: z.string(),
    language: z.enum(['en', 'es']),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    metatags: z.object({
      title: z.string().optional(),
      description: z.string().optional(),
      og_title: z.string().optional(),
      og_description: z.string().optional(),
      og_image: z.string().optional(),
      twitter_title: z.string().optional(),
      twitter_description: z.string().optional(),
      twitter_image: z.string().optional(),
    }).optional(),
  }),
});

export const collections = {
  pages: pagesCollection,
  reports: reportsCollection,
};
