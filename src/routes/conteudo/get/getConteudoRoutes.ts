import { FastifyInstance } from "fastify";
import { prisma } from "../../../prisma/prisma";
import { getConteudoValidator } from "../../../validators/conteudo/getConteudoValidators";

export async function GetConteudo(app: FastifyInstance) {
  app.get("/conteudos", async (req, rep) => {
    try {
      const conteudos = await prisma.conteudo.findMany({
        select: {
          _count: true,
          Afunilar: true,
          CriarMapa: true,
          Curso: true,
          cursoId: true,
          id: true,
          nome: true,
          urlConteudo: true,
          Disciplina: true,
          disciplinaId: true,
          tipoDeConteudo: true,
        },
      });
      rep.status(200).send({
        data: conteudos,
      });
    } catch (error) {
      rep.status(500).send({ error: error });
    }
  });
  app.get("/conteudo/:id", async (req, rep) => {
    const { id } = getConteudoValidator.parse(req.params);
    try {
      const conteudo = await prisma.conteudo.findUnique({
        where: {
          id,
        },
      });
    } catch (error) {
      rep.status(500).send({ error: error });
    }
  });
}
