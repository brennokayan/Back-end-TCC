import { z } from "zod";

export const postConteudoValidator = z.object({
    nome: z.string(),
    urlConteudo: z.string(),
    disciplinaId: z.string().cuid(),
    tipoDeConteudo: z.string(),
})
export const postManyConteudoValidator = z.array(
    z.object({
        nome: z.string(),
        urlConteudo: z.string(),
        disciplinaId: z.string(),
        tipoDeConteudo: z.string(),
    })
)