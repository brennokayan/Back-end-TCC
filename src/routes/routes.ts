import { FastifyInstance } from "fastify";

import { AfunilarRoutes } from "./afunilar/afunilarRoutes";
import { ConteudoRoutes } from "./conteudo/ConteudoRoutes";
import { CriarMapasRoutes } from "./criarMapa/CriarMapaRoutes";
import { CursoRoutes } from "./curso/CursoRoutes";
import { DisciplinaRoutes } from "./disciplina/DisciplinaRoutes";
import { EscolherCursoRoutes } from "./escolherCurso/EscolherCursoRoutes";
import { ExameCriticoRoutes } from "./exameCritico/ExameCriticoRoutes";
import { IlhaRoutes } from "./ilha/ilhaRoutes";
import { MapaDeEstudoRoutes } from "./mapaDeEstudo/MapaDeEstudoRoutes";
import { UsuarioRoutes } from "./usuario/UsuarioRoutes";
import { EscolherExameCriticoRoutes } from "./escolherExameCritico/EscolherExameCriticoRoutes";
import { EscolherIlhaRoutes } from "./escolherIlha/EscolherIlhaRoutes";

export async function Routes(app: FastifyInstance) {
  //ilha All Routes
  app.register(AfunilarRoutes)
  app.register(ConteudoRoutes)
  app.register(CriarMapasRoutes)
  app.register(CursoRoutes)
  app.register(DisciplinaRoutes)
  app.register(EscolherCursoRoutes)
  app.register(EscolherExameCriticoRoutes)
  app.register(EscolherIlhaRoutes)
  app.register(ExameCriticoRoutes)
  app.register(IlhaRoutes)
  app.register(MapaDeEstudoRoutes)
  app.register(UsuarioRoutes)

  

}
