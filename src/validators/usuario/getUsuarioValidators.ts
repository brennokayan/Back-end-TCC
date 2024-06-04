import { z } from "zod";

export const getIdParams = z.object({
    id: z.string().cuid(),
  });