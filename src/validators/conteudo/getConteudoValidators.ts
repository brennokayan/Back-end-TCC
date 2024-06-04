import { z } from "zod";

export const getConteudoValidator = z.object({
    id: z.string().cuid()
})