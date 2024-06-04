import { z } from "zod";

export const postEscolherExameCriticoValidators = z.object({
    idExameCritico: z.string().cuid(),
    idUsuario: z.string().cuid()
})