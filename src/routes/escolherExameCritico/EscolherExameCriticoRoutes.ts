import { FastifyInstance } from "fastify";
import { GetEscolherExameCriticoRoutes } from "./get/EscolherExameCriticoRoutes";
import { PostEscolherExameCriticoRoutes } from "./post/postEscolherExameCriticoRoutes";

export async function EscolherExameCriticoRoutes(app: FastifyInstance){
    app.register(GetEscolherExameCriticoRoutes);
    app.register(PostEscolherExameCriticoRoutes)
}