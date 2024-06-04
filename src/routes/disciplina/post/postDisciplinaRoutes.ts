import { FastifyInstance } from "fastify";
import { prisma } from "../../../prisma/prisma";
import { postDisciplinaValidators } from "../../../validators/disciplina/postDisciplinaValidators";

export async function PostDisciplina(app: FastifyInstance){
    app.post("/disciplina", async(req, rep) => {
        try{
            const { nome, pesoDisciplina, cursoId } = postDisciplinaValidators.parse(req.body)
            const disciplina = await prisma.disciplina.create({
                data: {
                    nome,
                    pesoDisciplina,
                    Curso: {
                        connect: {
                            id: cursoId
                        }
                    }
                }
            })
            rep.status(201).send({message: "Disciplina criada com sucesso"})
        }
        catch(error) {
            rep.status(500).send({error: error})
        }
    })
}