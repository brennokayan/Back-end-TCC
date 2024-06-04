import { FastifyInstance } from "fastify";
import { prisma } from "../../../prisma/prisma";
import { getCriarMapasValidators } from "../../../validators/criar mapa/getCriarMapaValidators";

export async function GetCriarMapa (app: FastifyInstance) {
    app.get("/criar-mapa", async(req, rep) => {
        try{
            const criarMapa = await prisma.criarMapa.findMany({
                
            })
            rep.send({data: criarMapa}).status(200)
        }
        catch(error){
            rep.send({error: error}).status(500)
        }
    })
    app.get("/criar-mapa/:id", async(req, rep) => {
        try{
            const {id} = getCriarMapasValidators.parse(req.params)
            const criarMapa = await prisma.criarMapa.findUnique({
                where: {
                    id: id
                }
            })
            rep.send({data: criarMapa}).status(200)
        }catch(error) {
            rep.send({error: error}).status(500)
        }
    })
}