/*
  Warnings:

  - You are about to drop the column `idDisciplina` on the `Ilhas` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Disciplina" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "pesoDisciplina" INTEGER NOT NULL,
    "cursoId" TEXT NOT NULL,
    "ilhasId" TEXT,
    CONSTRAINT "Disciplina_cursoId_fkey" FOREIGN KEY ("cursoId") REFERENCES "Curso" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Disciplina_ilhasId_fkey" FOREIGN KEY ("ilhasId") REFERENCES "Ilhas" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Disciplina" ("cursoId", "id", "nome", "pesoDisciplina") SELECT "cursoId", "id", "nome", "pesoDisciplina" FROM "Disciplina";
DROP TABLE "Disciplina";
ALTER TABLE "new_Disciplina" RENAME TO "Disciplina";
CREATE TABLE "new_Ilhas" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "pesoIlha" INTEGER
);
INSERT INTO "new_Ilhas" ("descricao", "id", "nome", "pesoIlha") SELECT "descricao", "id", "nome", "pesoIlha" FROM "Ilhas";
DROP TABLE "Ilhas";
ALTER TABLE "new_Ilhas" RENAME TO "Ilhas";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
