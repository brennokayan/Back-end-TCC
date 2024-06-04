import { z } from "zod";

export const postAfunilarValidators = z.object({
  idCurso: z.string().cuid(),
  idDisciplina: z.string().cuid(),
  idConteudo: z.string().cuid(),
});
