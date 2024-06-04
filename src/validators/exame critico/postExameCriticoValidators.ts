import { z } from "zod";

export const postExameCriticoValidators = z.object({
    nome: z.string().min(5).max(255)
})