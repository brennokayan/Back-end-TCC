import { FastifyInstance } from "fastify";
import { postCriarMapaValidators } from "../../../validators/criar mapa/postCriarMapaValidators";
import { prisma } from "../../../prisma/prisma";

export async function PostCriarMapa(app: FastifyInstance) {
  app.post("/criar-mapa", async (req, rep) => {
    try {
      const { idUsuario, idCurso, idExameCritico, idMapaDeEstudo } =
        postCriarMapaValidators.parse(req.body);
      const criarMapa = await prisma.criarMapa.create({
        data: {
            idUsuario,
            idCurso,
            idExameCritico,
            idMapaDeEstudo,
        }
      })

        rep.status(201)
        .send({ message: "Mapa criado com sucesso" });
    } catch (error) {
      rep.status(500).send({ error: error });
    }
  });
}
