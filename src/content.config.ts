import { defineCollection, z } from 'astro:content';

const laptops = defineCollection({
  loader: () => [],
  schema: z.object({
    brand: z.string(),
    model: z.string(),
    cpu: z.string(),
    ram: z.string(),
    storage: z.string(),
    screen: z.string(),
    price: z.number(),
    tag: z.string().default(''),
    touch: z.boolean().default(false),
    graphics: z.string().default(''),
    gen: z.string().default(''),
    image: z.string(),
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
  }),
});

export const collections = { laptops };
