import { FastifyInstance } from "fastify";
import { GetConteudo } from "./get/getConteudoRoutes";
import { PostConteudo } from "./post/postConteudoRoutes";

export async function ConteudoRoutes(app: FastifyInstance){
    app.register(GetConteudo);
    app.register(PostConteudo)
}