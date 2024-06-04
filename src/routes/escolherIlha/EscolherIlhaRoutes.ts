import { FastifyInstance } from "fastify";
import { PostEscolherIlha } from "./post/PostEscolherIlha";

export async function EscolherIlhaRoutes(app: FastifyInstance){
    app.register(PostEscolherIlha)
}