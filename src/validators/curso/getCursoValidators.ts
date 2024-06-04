import { z } from "zod";

export const getCursoValidators = z.object({
    id: z.string().cuid()
})