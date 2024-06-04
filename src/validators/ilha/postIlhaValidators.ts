import { z } from "zod";

export const PostIlhaValidators = z.object({
    nome: z.string().min(3).max(255),
    descricao: z.string().min(3).max(255),
    pesoIlha: z.number().int().positive(),
    idDisciplina: z.string().cuid()
})