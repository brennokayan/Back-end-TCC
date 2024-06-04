import { z } from "zod";

export const postMapaDeEstudoValidators = z.object({
    ilhaAtual: z.string().min(3).max(255),
    progresso: z.number(),
    qtdeDeIlhas: z.number(),
})