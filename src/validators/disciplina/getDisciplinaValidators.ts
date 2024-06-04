import { z } from "zod";

export const getDisciplinaValidators = z.object({
    id: z.string().cuid()
})