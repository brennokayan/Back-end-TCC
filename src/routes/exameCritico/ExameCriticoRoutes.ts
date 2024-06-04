import { FastifyInstance } from "fastify";
import { GetExameCritico } from "./get/getExameCriticoRoutes";
import { PostExameCritico } from "./post/postExameCriticoRoutes";

export async function ExameCriticoRoutes(app: FastifyInstance){
    app.register(GetExameCritico);
    app.register(PostExameCritico)
}