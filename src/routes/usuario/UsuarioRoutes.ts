import { FastifyInstance } from "fastify";
import { GetUsuarioRoutes } from "./get/getUsuarioRoutes";
import { PostUsuarioRoutes } from "./post/postUsuarioRoutes";
import { UpdateUsuarioRoutes } from "./update/updateUsuarioRoutes";

export async function UsuarioRoutes(app: FastifyInstance){
    app.register(GetUsuarioRoutes);
    app.register(PostUsuarioRoutes);
    app.register(UpdateUsuarioRoutes);
}