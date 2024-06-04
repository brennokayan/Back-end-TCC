import { FastifyInstance } from "fastify";
import { prisma } from "../../../prisma/prisma";
import { getExameCriticoValidators } from "../../../validators/exame critico/getExameCriticoValidators";

export async function GetExameCritico(app: FastifyInstance){
    app.get("/exame-criticos", async (req, rep) => {
        try {
            const examesCriticos = await prisma.exameCritico.findMany({
                select: {
                    id: true,
                    nome: true,
                    CriarMapa: true,
                    EscolherExameCritico: true,
                }
            })
            rep.status(200).send({ data: examesCriticos });
        }
        catch(error) {
            rep.status(500).send({ error: "Erro ao buscar exames criticos" });  
        }
    })
    app.get("/exame-critico/:id", async (req, rep) => {
        try {
            const { id } = getExameCriticoValidators.parse(req.params);
            const exameCritico = await prisma.exameCritico.findUnique({
                where: {
                    id: id,
                },
                select: {
                    id: true,
                    nome: true,
                    CriarMapa: true,
                    EscolherExameCritico: true,
                }
            })
            rep.status(200).send({ data: exameCritico });
        }
        catch(error) {
            rep.status(500).send({ error: "Erro ao buscar exame critico" });
        }
    })
}