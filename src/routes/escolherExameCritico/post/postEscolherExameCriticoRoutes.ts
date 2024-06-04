import { FastifyInstance } from "fastify";
import { prisma } from "../../../prisma/prisma";
import { postEscolherExameCriticoValidators } from "../../../validators/escolher exame critico/postEscolherExameCriticoValidator";

export async function PostEscolherExameCriticoRoutes(app: FastifyInstance) {
    app.post("/escolher-exame-critico", async (req, rep) => {
        try {
            const { idExameCritico, idUsuario } = postEscolherExameCriticoValidators.parse(req.body);
            const escolherExameCritico = await prisma.escolherExameCritico.create({
                data:{
                    idExameCritico,
                    idUsuario
                }
            })
            rep.status(200).send({ message: "Exame critico escolhido com sucesso" });
        }
        catch (error) {
            rep.status(500).send({ error: error });
        }
    })
}