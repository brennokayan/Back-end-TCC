import { z } from "zod";

export const getExameCriticoValidators = z.object({
    id: z.string().cuid(),
})