import { z } from "zod";

export const getEscolherExameCritico = z.object({
    id: z.string().cuid()
})