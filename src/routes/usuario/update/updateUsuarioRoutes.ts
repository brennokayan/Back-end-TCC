import { FastifyInstance } from "fastify";
import { prisma } from "../../../prisma/prisma";
import { UpdateDataEstudo, UpdateUltimoConteudoEstudadoValidators, UpdateUltimoTesteAvaliativoValidators } from "../../../validators/usuario/updateUsuarioValidators";

export async function UpdateUsuarioRoutes(app: FastifyInstance) {
  app.patch("/ultimo-teste", async (req, rep) => {
    try {
      const { id, ultimoTesteAvaliativo, dataUltimoTesteAvaliativo } =
        UpdateUltimoTesteAvaliativoValidators.parse(req.body);
      const usuario = await prisma.usuario.update({
        where: {
          id: id,
        },
        data: {
          ultimoTesteAvaliativo,
          dataUltimoTesteAvaliativo
        },
      });
      rep.status(200).send({ message: "ultimo teste avaliativo do usuario atualizado com sucesso!" });
    } catch (error) {
      rep.status(500).send({ error: "Erro ao atualizar usuario" });
    }
  });
  app.patch("/ultimo-conteudo", async (req, res) => {
    const {
      id,
      ultimoConteudoEstudado,
      dataUltimoConteudoEstudado
    } = UpdateUltimoConteudoEstudadoValidators.parse(req.body);
    
    try {
      const existUser = await prisma.usuario.findUnique({
        where: {
          id
        }
      });
      if(existUser){
        const usuario = await prisma.usuario.update({
          where: {
            id
          },
          data: {
            ultimoConteudoEstudado,
            dataUltimoConteudoEstudado
          }
        });
        res.status(200).send({ message: "Ultimo conteudo estudado do usuario atualizado com sucesso!",usuario });
      }else{
        res.status(404).send({ error: "Usuario não encontrado" });
      }
    } catch (error) {
      console.error("Erro ao atualizar usuario:", error);
      res.status(500).send({ error: "Erro ao atualizar usuario" });
    }
  });
  app.patch("/data-estudo", async (req, res) => {
    const {
      id,
      dataInicialEstudo,
      dataFinalEstudo
    } = UpdateDataEstudo.parse(req.body)
    
    try{
      const ususario = await prisma.usuario.update({
        where: {
          id
        },
        data: {
          dataFinalEstudo,
          dataInicialEstudo
        }
      })
      res.status(200).send({message: "Ultimo data para estudar do usuario atualizado com sucesso!"})
    }
    catch(error){
      res.status(500).send({error: "Erro ao atualizar usuario"})
    }
  })
}
