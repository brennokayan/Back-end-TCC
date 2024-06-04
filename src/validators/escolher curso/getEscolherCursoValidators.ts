import { z } from "zod";

export const getEscolherCursoValidators = z.object({
    id: z.string().cuid()
})