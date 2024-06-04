import { FastifyInstance } from "fastify";
import { prisma } from "../../../prisma/prisma";
import {
  AuthUsuarioValidators,
  CreateUsuarioValidators,
  TokenUsuarioValidators,
} from "../../../validators/usuario/postUsuarioValidators";

export async function PostUsuarioRoutes(app: FastifyInstance) {
  app.post("/usuario", async (req, rep) => {
    try {
      const { nome, email, senha, idade } = CreateUsuarioValidators.parse(
        req.body
      );
      const usuario = await prisma.usuario.create({
        data: {
          nome,
          email,
          senha,
          idade,
        },
      });
      rep.status(201).send({ message: "Usuário criado com sucesso!" });
    } catch (error) {
      rep.status(500).send({ error: "Erro ao criar usuario" });
    }
  });

  app.post("/token", async (req, rep) => {
    try {
      const { email, senha } = TokenUsuarioValidators.parse(req.body);
      const authUsuario = await prisma.usuario.findUnique({
        where: {
          email,
          AND: {
            senha,
          },
        },
      });
      if (!authUsuario) {
        rep.status(401).send({ error: "Usuário não encontrado" });
      }
      rep.status(200).send({ data: authUsuario?.token });
    } catch (error) {
      rep.status(500).send({ error: "Erro ao autenticar usuario" });
    }
  });
  app.post("/auth", async (req, rep) => {
    try {
      const { token } = AuthUsuarioValidators.parse(req.body);
      const authUsuario = await prisma.usuario.findFirst({
        where: {
          token,
        },
        select: {
          id: true,
          nome: true,
          email: true,
          senha: false,
          idade: true,
          CriarMapa: true,
          dataUltimoConteudoEstudado: true,
          dataUltimoTesteAvaliativo: true,
          ultimoConteudoEstudado: true,
          ultimoTesteAvaliativo: true,
          dataFinalEstudo: true,
          dataInicialEstudo: true,
          escolherIlha: {
            select: {
              Ilhas: {
                select: {
                  id: true,
                  nome: true,
                  descricao: true,
                  pesoIlha: true,
                  _count: true,
              }
              }
            },
            orderBy: {
              Ilhas: {
                pesoIlha: 'desc'
              }
            }
          },
          ilhas: {
            select: {
              id: true,
              nome: true,
              descricao: true,
              pesoIlha: true,
              _count: true,
          }
        },
          EscolherCurso: {
            include: {
              Curso: {
                select: {
                  Disciplina: {
                    select: {
                      id: true,
                      nome: true,
                      _count: true,
                      pesoDisciplina: true,
                    }
                  },
                  nome: true,
                  _count: true,
                  conteudo: {
                    select: {
                      nome: true,
                      tipoDeConteudo: true,
                    }
                  },

                }
              }
            }
          },
          EscolherExameCritico: {
            select: {
              id: true,
              idExameCritico: true,
              ExameCritico: {
                select: {
                  id: true,
                  nome: true,
                  
                }
              }
            }
          },
          _count: true,
          token: false,
        },
      });
      rep.status(200).send({ data: authUsuario });
    } catch (error) {
      rep.status(500).send({ error: "Erro ao autenticar usuario" });
    }
  });
}
