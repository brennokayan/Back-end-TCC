import { FastifyInstance } from "fastify";
import { prisma } from "../../../prisma/prisma";
import { getMapaDeEstudoValidators } from "../../../validators/mapa de Estudo/getMapaDeEstudoValidators";

export async function GetMapaDeEstudo(app: FastifyInstance) {
  app.get("/mapas-de-estudo", async (req, rep) => {
    try {
      const mapaDeEstudo = await prisma.mapaDeEstudo.findMany({
        select: {
          id: true,
          CriarMapa: true,
          ilhaAtual: true,
          progresso: true,
          qtdeDeIlhas: true,
          _count: true,
        },
      });
      rep.status(200).send({ data: mapaDeEstudo });
    } catch (error) {
      rep.status(500).send({ error: error });
    }
  });
  app.get("/mapa-de-estudo/:id", async (req, rep) => {
    try {
        const mapaDeEstudo = await prisma.mapaDeEstudo.findUnique({
            where: {
                id: getMapaDeEstudoValidators.parse(req.params).id
            }
        })
    }
    catch(error) {
        rep.status(500).send({error: error})
    }
  })
}
