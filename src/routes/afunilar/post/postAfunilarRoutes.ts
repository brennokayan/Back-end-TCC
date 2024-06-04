import { FastifyInstance } from "fastify";
import { postAfunilarValidators } from "../../../validators/afunilar/postAfunilarValidators";
import { prisma } from "../../../prisma/prisma";

export async function PostAfunilar(app: FastifyInstance){
    app.post("/afunilar", async(req, rep) => {
        try{
            const { idCurso, idDisciplina, idConteudo } = postAfunilarValidators.parse(req.body)
            const afunilar = await prisma.afunilar.create({
                data: {
                    Curso: {
                        connect: {
                            id: idCurso
                        }
                    },
                    Disciplina: {
                        connect: {
                            id: idDisciplina
                        }
                    },
                    Conteudo: {
                        connect: {
                            id: idConteudo
                        }
                    }
                }
            })
            rep.send({message: "Afunilamento criado com sucesso"}).status(201)
        }
        catch(error){
            rep.send({error: error}).status(500)
        }
    })
}