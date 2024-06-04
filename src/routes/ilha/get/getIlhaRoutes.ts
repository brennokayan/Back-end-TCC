import { FastifyInstance } from "fastify";
import { prisma } from "../../../prisma/prisma";
export async function GetIlhasRoutes(app: FastifyInstance){
    app.get("/ilhas", async (req, rep) => {
        try{
            const ilhas = await prisma.ilhas.findMany({
                select: {
                    id: true,
                    nome: true,
                    descricao: true,
                }
            })
            rep.code(200).send(ilhas)
        }
        catch(err){
            rep.code(500).send({message: "Internal Server Error"})
        }
    })
}