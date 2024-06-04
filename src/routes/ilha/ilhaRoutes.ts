import { FastifyInstance } from "fastify";
import { PostIlhasRoutes } from "./post/postIlhaRoutes";
import { GetIlhasRoutes } from "./get/getIlhaRoutes";

export async function IlhaRoutes(app: FastifyInstance){
    app.register(PostIlhasRoutes)
    app.register(GetIlhasRoutes)
}