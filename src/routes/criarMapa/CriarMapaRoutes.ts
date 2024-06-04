import { FastifyInstance } from "fastify";
import { GetCriarMapa } from "./get/getCriarMapaRoutes";
import { PostCriarMapa } from "./post/postCriarMapaRoutes";

export async function CriarMapasRoutes(app: FastifyInstance){
    app.register(GetCriarMapa);
    app.register(PostCriarMapa)
}