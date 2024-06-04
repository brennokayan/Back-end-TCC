import { FastifyInstance } from "fastify";
import { prisma } from "../../../prisma/prisma";
import { postEscolherCursoValidators } from "../../../validators/escolher curso/postEscolherCursoValidators";

export async function PostEscolherCursoRoutes(app: FastifyInstance){
    app.post("/escolher-curso", async(req, rep) => {
        try{
            const {idUsuario, idCurso} = postEscolherCursoValidators.parse(req.body)
            const escolherCurso = await prisma.escolherCurso.create({
                data: {
                    idUsuario,
                    idCurso
                }
            })
            rep.status(200).send({data: escolherCurso})
        }
        catch(error){
            rep.status(500).send({error: error})
        }
    })
}