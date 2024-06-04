import { z } from "zod";

export const PostEscolherIlhaIdUsuarioValidators = z.object({
  idUsuario: z.string().cuid(),
});

export const PostEscolherIlhaValidators = 
  z.object({ilhas: z.array(z.string().cuid())});
