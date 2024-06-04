import { FastifyInstance } from "fastify";
import { prisma } from "../../../prisma/prisma";
import { z } from "zod";
import { getIdParams } from "../../../validators/usuario/getUsuarioValidators";

export async function GetUsuarioRoutes(app: FastifyInstance) {
  app.get("/usuarios", async (req, rep) => {
    try {
      const usuarios = await prisma.usuario.findMany({
        select: {
          id: true,
          nome: true,
          email: true,
          senha: false,
          _count: true,
          idade: true,
          token: true,
        },
      });
      rep.status(200).send({ data: usuarios });
    } catch (error) {
      rep.status(500).send({ error: "Erro ao buscar usuarios" });
    }
  });
  app.get("/usuario/:id", async (req, rep) => {
    try {
      const { id } = getIdParams.parse(req.params);
      const usuario = await prisma.usuario.findUnique({
        where: {
          id: id,
        },
        select: {
          id: true,
          nome: true,
          email: true,
          senha: false,
          _count: true,
          idade: true,
        },
      });
      rep.status(200).send({ data: usuario });
    } catch (error) {
      rep.status(500).send({ error: "Erro ao buscar usuario" });
    }
  });
}
