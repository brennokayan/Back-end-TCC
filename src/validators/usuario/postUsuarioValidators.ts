import { z } from "zod";

export const CreateUsuarioValidators = z.object({
  nome: z.string().min(3).max(255),
  email: z.string().email(),
  senha: z.string().min(6).max(255),
  idade: z.number().int().positive(),
});
export const TokenUsuarioValidators = z.object({
    email: z.string().email(),
    senha: z.string().min(6).max(255),
})
export const AuthUsuarioValidators = z.object({
    token: z.string().uuid(),
})