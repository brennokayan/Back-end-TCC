import { z } from "zod";

export const postEscolherCursoValidators = z.object({
    idUsuario: z.string().cuid(),
    idCurso: z.string().cuid()
})