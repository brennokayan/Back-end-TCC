-- CreateTable
CREATE TABLE "ExameCritico" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Usuario" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "idade" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "token" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "MapaDeEstudo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "qtdeDeIlhas" INTEGER NOT NULL,
    "progresso" INTEGER NOT NULL,
    "ilhaAtual" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Curso" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "conteudoId" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Conteudo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "tipoDeConteudo" TEXT NOT NULL,
    "disciplina" TEXT NOT NULL,
    "pesoConteudo" TEXT NOT NULL,
    "cursoId" TEXT,
    CONSTRAINT "Conteudo_cursoId_fkey" FOREIGN KEY ("cursoId") REFERENCES "Curso" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "EscolherExameCritico" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "idExameCritico" TEXT NOT NULL,
    "idUsuario" TEXT NOT NULL,
    CONSTRAINT "EscolherExameCritico_idExameCritico_fkey" FOREIGN KEY ("idExameCritico") REFERENCES "ExameCritico" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "EscolherExameCritico_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "EscolherCurso" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "idUsuario" TEXT NOT NULL,
    "idCurso" TEXT NOT NULL,
    CONSTRAINT "EscolherCurso_idCurso_fkey" FOREIGN KEY ("idCurso") REFERENCES "Curso" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "EscolherCurso_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Afunilar" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "idConteudo" TEXT NOT NULL,
    "idCurso" TEXT NOT NULL,
    CONSTRAINT "Afunilar_idConteudo_fkey" FOREIGN KEY ("idConteudo") REFERENCES "Conteudo" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Afunilar_idCurso_fkey" FOREIGN KEY ("idCurso") REFERENCES "Curso" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CriarMapa" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "idUsuario" TEXT NOT NULL,
    "idConteudo" TEXT NOT NULL,
    "idExameCritico" TEXT NOT NULL,
    "idMapaDeEstudo" TEXT NOT NULL,
    CONSTRAINT "CriarMapa_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CriarMapa_idConteudo_fkey" FOREIGN KEY ("idConteudo") REFERENCES "Conteudo" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CriarMapa_idExameCritico_fkey" FOREIGN KEY ("idExameCritico") REFERENCES "ExameCritico" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CriarMapa_idMapaDeEstudo_fkey" FOREIGN KEY ("idMapaDeEstudo") REFERENCES "MapaDeEstudo" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");
