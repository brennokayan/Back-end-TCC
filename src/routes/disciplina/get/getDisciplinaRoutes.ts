import { FastifyInstance } from "fastify";
import { prisma } from "../../../prisma/prisma";
import { getDisciplinaValidators } from "../../../validators/disciplina/getDisciplinaValidators";

export async function GetDisciplina(app: FastifyInstance) {
  app.get("/disciplinas", async (req, rep) => {
    try {
      const disciplinas = await prisma.disciplina.findMany({
        select: {
          _count: true,
          id: true,
          nome: true,
          Conteudo: true,
          pesoDisciplina: true,
        },
      });
      rep.status(200).send({ data: disciplinas });
    } catch (error) {
      rep.status(500).send({ error: error });
    }
  });
  app.get("/disciplina/:id", async (req, rep) => {
    try {
      const disciplina = await prisma.disciplina.findUnique({
        where: {
          id: getDisciplinaValidators.parse(req.params).id,
        },
        select: {
            _count: true,
            id: true,
            nome: true,
            Conteudo: true,
            pesoDisciplina: true,
        }
      });
      rep.status(200).send({
        data: disciplina,
      });
    } catch (error) {
      rep.status(500).send({ error: error });
    }
  });
}
