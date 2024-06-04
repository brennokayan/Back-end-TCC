import { FastifyInstance } from "fastify";
import { prisma } from "../../../prisma/prisma";
import { getCursoValidators } from "../../../validators/curso/getCursoValidators";

export async function GetCurso(app: FastifyInstance) {
  app.get("/cursos", async (req, rep) => {
    const cursos = await prisma.curso.findMany({
      select: {
        _count: true,
        Afunilar: true,
        conteudo: true,
        id: true,
        nome: true,
        conteudoId: true,
        EscolherCurso: true,
        Disciplina: true,
      },
    });
    rep.status(200).send(cursos);
  });
  app.get("/curso/:id", async (req, rep) => {
    const { id } = getCursoValidators.parse(req.params);
    try {
      const curso = await prisma.curso.findUnique({
        where: {
          id,
        },
        select: {
          nome: true,
          conteudo: true,
          _count: true,
          id: true,
          conteudoId: true,
          Afunilar: true,
          Disciplina: true,
          EscolherCurso: true,
        },
      });
      rep.status(200).send({ data: curso });
    } catch (error) {
      rep.status(500).send({
        error: error,
      });
    }
  });
}
