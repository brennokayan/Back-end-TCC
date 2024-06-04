import { z } from "zod";

export const getMapaDeEstudoValidators = z.object({
  id: z.string().cuid(),
});
