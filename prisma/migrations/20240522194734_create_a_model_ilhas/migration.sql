-- CreateTable
CREATE TABLE "Ilhas" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "idDisciplina" TEXT NOT NULL,
    CONSTRAINT "Ilhas_idDisciplina_fkey" FOREIGN KEY ("idDisciplina") REFERENCES "Disciplina" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Conteudo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "tipoDeConteudo" TEXT NOT NULL,
    "urlConteudo" TEXT,
    "disciplinaId" TEXT NOT NULL,
    "cursoId" TEXT,
    "ilhasId" TEXT,
    CONSTRAINT "Conteudo_disciplinaId_fkey" FOREIGN KEY ("disciplinaId") REFERENCES "Disciplina" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Conteudo_cursoId_fkey" FOREIGN KEY ("cursoId") REFERENCES "Curso" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Conteudo_ilhasId_fkey" FOREIGN KEY ("ilhasId") REFERENCES "Ilhas" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Conteudo" ("cursoId", "disciplinaId", "id", "nome", "tipoDeConteudo", "urlConteudo") SELECT "cursoId", "disciplinaId", "id", "nome", "tipoDeConteudo", "urlConteudo" FROM "Conteudo";
DROP TABLE "Conteudo";
ALTER TABLE "new_Conteudo" RENAME TO "Conteudo";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
