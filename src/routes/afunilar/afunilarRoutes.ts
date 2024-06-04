import { FastifyInstance } from "fastify";
import { GetAfunilar } from "./get/getAfunilarRoutes";
import { PostAfunilar } from "./post/postAfunilarRoutes";

export async function AfunilarRoutes(app: FastifyInstance){
    app.register(GetAfunilar);
    app.register(PostAfunilar)
}