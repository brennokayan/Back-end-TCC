import { z } from "zod";

export const getAfunilarValidators = z.object({
    id: z.string().cuid()
})