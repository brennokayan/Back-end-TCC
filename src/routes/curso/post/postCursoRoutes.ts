import { FastifyInstance } from "fastify";
import { prisma } from "../../../prisma/prisma";
import { postCursoValidators } from "../../../validators/curso/postCursoValidators";

export async function PostCurso(app: FastifyInstance){
    app.post("/curso", async(req, rep) => {
        const {
            nome,
            conteudoId
        } = postCursoValidators.parse(req.body)
        try {
            const curso = await prisma.curso.create({
                data: {
                    nome
                }
            })
            rep.status(200).send({message: "Curso criado com sucesso"})
        }
        catch(error) {
            rep.status(500).send({error: error})
        }
    })
}