import * as z from 'zod';

export const HitEntitySchema = z.object({
  collections: z.number(),
  comments: z.number(),
  downloads: z.number(),
  id: z.number(),
  imageHeight: z.number(),
  imageSize: z.number(),
  imageWidth: z.number(),
  isAiGenerated: z.boolean(),
  isGRated: z.boolean(),
  isLowQuality: z.boolean(),
  largeImageUrl: z.string(),
  likes: z.number(),
  name: z.string(),
  noAiTraining: z.boolean(),
  pageUrl: z.string(),
  previewHeight: z.number(),
  previewUrl: z.string(),
  previewWidth: z.number(),
  tags: z.string(),
  type: z.string(),
  userId: z.number(),
  user: z.string(),
  userImageUrl: z.string(),
  userUrl: z.string(),
  views: z.number(),
  webformatHeight: z.number(),
  webformatUrl: z.string(),
  webformatWidth: z.number(),
});
export type HitEntityType = z.infer<typeof HitEntitySchema>;

export const PicturesResponseSchema = z.object({
  hits: z.array(HitEntitySchema),
  total: z.number(),
  totalHits: z.number(),
});
export type PicturesResponseType = z.infer<typeof PicturesResponseSchema>;
