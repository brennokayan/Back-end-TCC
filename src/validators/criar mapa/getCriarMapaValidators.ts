import { z } from "zod";

export const getCriarMapasValidators = z.object({
    id: z.string().cuid()
})