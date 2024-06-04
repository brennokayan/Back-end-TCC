import { FastifyInstance } from "fastify";
import { prisma } from "../../../prisma/prisma";
import { postExameCriticoValidators } from "../../../validators/exame critico/postExameCriticoValidators";

export async function PostExameCritico(app: FastifyInstance) {
  app.post("/exame-critico", async (req, rep) => {
    const { nome } = postExameCriticoValidators.parse(req.body);
    try {
      const exameCritico = await prisma.exameCritico.create({
        data: {
          nome,
        },
      });
      rep.status(201).send({ message: "Exame critíco criado com sucesso!" });
    } catch (error) {
      rep.status(500).send({ error: error });
    }
  });
}
