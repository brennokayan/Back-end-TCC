import { FastifyInstance } from "fastify";
import { prisma } from "../../../prisma/prisma";
import { getEscolherCursoValidators } from "../../../validators/escolher curso/getEscolherCursoValidators";

export async function GetEscolherCursoRoutes(app: FastifyInstance) {
    app.get("/escolher-cursos", async(req, rep) => {
        try{
            const escolherCurso = await prisma.escolherCurso.findMany()
            rep.status(200).send({data: escolherCurso})
        }
        catch(error){
            rep.status(500).send({error: error})
        }
    })
    app.get("/escolher-curso/:id", async(req, rep) => {
        const {id} = getEscolherCursoValidators.parse(req.params)
        try{
            const escolherCurso = await prisma.escolherCurso.findUnique({
                where: {
                    id
                }
            })
            rep.status(200).send({data: escolherCurso})
        }
        catch(error){
            rep.status(500).send({error: error})
        }
    })
}