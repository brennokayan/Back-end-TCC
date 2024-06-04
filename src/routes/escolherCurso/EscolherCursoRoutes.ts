import { FastifyInstance } from "fastify";
import { GetEscolherCursoRoutes } from "./get/getEscolherCursoRoutes";
import { PostEscolherCursoRoutes } from "./post/postEscolherCursoRoutes";

export async function EscolherCursoRoutes(app: FastifyInstance){
    app.register(GetEscolherCursoRoutes);
    app.register(PostEscolherCursoRoutes)
}