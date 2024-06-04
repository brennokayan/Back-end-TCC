import { z } from "zod";

export const postDisciplinaValidators = z.object({
    nome: z.string().min(3).max(255),
    pesoDisciplina: z.number(),
    cursoId: z.string().cuid(),
})