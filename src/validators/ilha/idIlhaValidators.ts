import { z } from "zod";

export const IdIlhaValidators = z.object({
    id: z.string().cuid()
})