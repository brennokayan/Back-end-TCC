import { FastifyInstance } from "fastify";
import { GetDisciplina } from "./get/getDisciplinaRoutes";
import { PostDisciplina } from "./post/postDisciplinaRoutes";

export async function DisciplinaRoutes(app: FastifyInstance){
    app.register(GetDisciplina);
    app.register(PostDisciplina)
}