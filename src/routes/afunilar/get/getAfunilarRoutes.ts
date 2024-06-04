import { FastifyInstance } from "fastify";
import { prisma } from "../../../prisma/prisma";
import { getAfunilarValidators } from "../../../validators/afunilar/getAfunilarValidators";

export async function GetAfunilar(app: FastifyInstance){
    app.get("/afunilar", async (_, rep) => {
        try{
            const afunilar = await prisma.afunilar.findMany({

            })
            rep.send({data: afunilar}).status(200)
        }catch(error){
            rep.send({error: error}).status(500)
        }
    })
    app.get("/afunilar/:id", async(req, rep) => {
        try{
            const {id} = getAfunilarValidators.parse(req.params)
            const afunilar = await prisma.afunilar.findUnique({
                where: {
                    id: id
                }
            })
            rep.send({data: afunilar}).status(200)
        }catch(error) {
            rep.send({error: error}).status(500)
        }
    })
}