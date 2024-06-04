import { FastifyInstance } from "fastify";
import { prisma } from "../../../prisma/prisma";
import { getEscolherExameCritico } from "../../../validators/escolher exame critico/getEscolherExameCriticoValidator";

export async function GetEscolherExameCriticoRoutes(app: FastifyInstance) {
    app.get("/escolher-exames-criticos", async (req, rep) =>{
        try{
            const escolherExameCritico = await prisma.escolherExameCritico.findMany()
            rep.status(200).send({data: escolherExameCritico})
        }
        catch(error){
            rep.status(500).send({error: error})
        }
    })
    app.get("/escolher-exame-criticos/:id", async(req, rep) => {
        const { id } = getEscolherExameCritico.parse(req.params)
        try{
            const escolherExameCritico = await prisma.escolherExameCritico.findUnique({
                where: {
                    id
                }
            })
            rep.status(200).send({data: escolherExameCritico})
        }
        catch(error){
            rep.status(500).send({error: error})
        }
    })
}