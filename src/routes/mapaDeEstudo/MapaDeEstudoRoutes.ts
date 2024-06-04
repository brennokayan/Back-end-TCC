import { FastifyInstance } from "fastify";
import { GetMapaDeEstudo } from "./get/getMapaDeEstudoRoutes";
import { PostMapaDeEstudo } from "./post/postMapaDeEstudoRoutes";

export async function MapaDeEstudoRoutes(app: FastifyInstance){
    app.register(GetMapaDeEstudo);
    app.register(PostMapaDeEstudo)
}