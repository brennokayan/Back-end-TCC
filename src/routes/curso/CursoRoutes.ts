import { FastifyInstance } from "fastify";
import { GetCurso } from "./get/getCursoRoutes";
import { PostCurso } from "./post/postCursoRoutes";

export async function CursoRoutes(app: FastifyInstance){
    app.register(GetCurso);
    app.register(PostCurso)
}