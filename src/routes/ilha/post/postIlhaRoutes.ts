import { FastifyInstance } from "fastify";
import { prisma } from "../../../prisma/prisma";
import { PostIlhaValidators } from "../../../validators/ilha/postIlhaValidators";
import { IdIlhaValidators } from "../../../validators/ilha/idIlhaValidators";

export async function PostIlhasRoutes(app: FastifyInstance) {
    app.post('/ilha', async (req, rep) => {
      try {
        const {nome, pesoIlha, descricao, idDisciplina} = PostIlhaValidators.parse(req.body);
        const ilha = await prisma.ilhas.create({
            data: {
               descricao,
               nome,
               pesoIlha,
               Disciplina: {
                connect:{
                    id: idDisciplina
                }
               } 
            }
        })
        rep.status(201).send({message: 'Ilha criada com sucesso'})
      }
      catch (error) {
        rep.status(500).send({ error: 'Internal Server Error' })
      }
    })
    app.post("/ilha-conteudo", async (req, rep) => {
      try{
          const {id} = IdIlhaValidators.parse(req.body)
          const ilha = await prisma.ilhas.findUnique({
              where: {
                  id
              },
              select: {
                _count: true,
                conteudo: true,
                descricao: true,
                id: true,
                nome: true,
                pesoIlha: true,
                Usuario: {
                  select: {
                    id: true
                  }
                },
                Disciplina: {
                  select: {
                    id: true,
                    nome: true,
                    Conteudo: {
                      select: {
                        id: true,
                        nome: true,
                        tipoDeConteudo: true,
                        urlConteudo: true,
                      }
                    }
                  }
                }
              }
          })
          if(!ilha){
            rep.code(404).send({message: "Ilha não encontrada"})
          }
          rep.code(200).send(ilha)

      }
      catch(err){
          rep.code(500).send({message: "Internal Server Error"})
      }
  })
}