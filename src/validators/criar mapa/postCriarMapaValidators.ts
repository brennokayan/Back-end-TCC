import { z } from "zod";

export const postCriarMapaValidators = z.object({
    idUsuario: z.string().cuid(),
    idCurso: z.string().cuid(),
    idExameCritico: z.string().cuid(),
    idMapaDeEstudo: z.string().cuid(),
})