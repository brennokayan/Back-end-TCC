import { z } from "zod";

export const postCursoValidators = z.object({
    nome: z.string().min(4).max(255),
    conteudoId: z.string().cuid(),
})