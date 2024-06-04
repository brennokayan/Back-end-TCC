import { z } from "zod";

export const UpdateUltimoTesteAvaliativoValidators = z.object({
    id: z.string().cuid(),
    ultimoTesteAvaliativo: z.string().min(3).max(255),
    dataUltimoTesteAvaliativo: z.string().min(3).max(255),
});

export const UpdateUltimoConteudoEstudadoValidators = z.object({
    id: z.string().cuid(),
    ultimoConteudoEstudado: z.string().min(3).max(255),
    dataUltimoConteudoEstudado: z.string().min(3).max(255),
})

export const UpdateDataEstudo = z.object({
    id: z.string().cuid(),
    dataInicialEstudo: z.string().min(3).max(255),
    dataFinalEstudo: z.string().min(3).max(255),
})