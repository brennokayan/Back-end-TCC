import { FastifyInstance } from "fastify";
import { prisma } from "../../../prisma/prisma";
import { PostEscolherIlhaIdUsuarioValidators, PostEscolherIlhaValidators } from "../../../validators/escolherIlha/postEscolherIlhaValidators";

export async function PostEscolherIlha(app: FastifyInstance) {
    app.post("/escolher-ilha", async (req, rep) => {
        const {
            idUsuario
        } = PostEscolherIlhaIdUsuarioValidators.parse(req.body);
        const idIlha = PostEscolherIlhaValidators.parse(req.body);
        try{
            for (let i = 0; i < idIlha.ilhas.length; i++) {
                await prisma.escolherIlha.create({
                    data: {
                        idUsuario,
                        idIlha: idIlha.ilhas[i]
                    }
                })
                console.log(idIlha.ilhas[i]);
            }
            rep.status(200).send({message: "Ilha escolhida com sucesso"});
        }catch(err) {
            if(err instanceof Error) {
                rep.status(400).send({message: err.message});
                console.log(err.message);
            }
            else if(err == "zodError"){
                rep.status(400).send({message: "Erro de validação"});
                console.log("Erro de validação");

            }
            else{
                rep.status(500).send({message: "Erro interno"});
            }
        }

    });
}
