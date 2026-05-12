import { z } from "zod";

export const pokemonCollectionSchema = z.object({
  name: z.string(),
  nickname: z.string().min(1, "Nickname is required!"),
  collectionType: z.number(),
  description: z.string().optional(),
});
