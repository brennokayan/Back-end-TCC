import { FastifyInstance } from "fastify";
import { prisma } from "../../../prisma/prisma";
import { postMapaDeEstudoValidators } from "../../../validators/mapa de Estudo/postMapaDeEstudoValidators";

export async function PostMapaDeEstudo(app: FastifyInstance){
    app.post("/mapa-de-estudo", async(req, rep) => {
        try{
            const {ilhaAtual, progresso, qtdeDeIlhas} = postMapaDeEstudoValidators.parse(req.body);
            const mapaDeEstudo = await prisma.mapaDeEstudo.create({
                data:{
                    ilhaAtual,
                    progresso,
                    qtdeDeIlhas,
                    
                }
            })
            rep.status(201).send({message: "Mapa de Estudo criado com sucesso"})
        }
        catch(error){
            rep.status(500).send({error: error})
        }
    })
}