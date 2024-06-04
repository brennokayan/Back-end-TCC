import { FastifyInstance } from "fastify";
import { prisma } from "../../../prisma/prisma";
import { postConteudoValidator, postManyConteudoValidator } from "../../../validators/conteudo/postConteudoValidators";
import { ZodError } from "zod";

export async function PostConteudo(app: FastifyInstance) {
  app.post("/conteudo", async (req, rep) => {
    try {
      const { nome, tipoDeConteudo, disciplinaId, urlConteudo} = postConteudoValidator.parse(req.body);
      const conteudo = await prisma.conteudo.create({
        data: {
          nome,
          tipoDeConteudo,
          urlConteudo,
          Disciplina: {
            connect: {
              id: disciplinaId,
            },
          }
        }
      });
      rep.status(201).send({
        data: conteudo,
      });
    } catch (error) {
      rep.status(500).send({ error: error });
    }
  });
  app.post("/many-conteudo", async (req, rep) => {
    try {
      const conteudo = postManyConteudoValidator.parse(req.body);
      const createdConteudos = [];
      
      for (let i = 0; i < conteudo.length; i++) {
        const createdConteudo = await prisma.conteudo.create({
          data: {
            nome: conteudo[i].nome,
            tipoDeConteudo: conteudo[i].tipoDeConteudo,
            urlConteudo: conteudo[i].urlConteudo,
            Disciplina: {
              connect: {
                id: conteudo[i].disciplinaId,
              },
            }
          }
        });
        createdConteudos.push(createdConteudo);
      }
      
      rep.status(201).send({
        data: createdConteudos,
      });
    } catch (error) {
      if (error instanceof ZodError) { // Assumindo que você está usando Zod para validação
        rep.status(400).send({ error: error.errors });
      } else {
        rep.status(500).send({ error: 'Internal Server Error' });
      }
    }
  });
  
}
