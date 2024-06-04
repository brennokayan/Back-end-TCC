/*
  Warnings:

  - You are about to drop the column `disciplina` on the `Conteudo` table. All the data in the column will be lost.
  - You are about to drop the column `pesoConteudo` on the `Conteudo` table. All the data in the column will be lost.
  - Added the required column `disciplinaId` to the `Conteudo` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Disciplina" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "pesoDisciplina" INTEGER NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Conteudo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "tipoDeConteudo" TEXT NOT NULL,
    "disciplinaId" TEXT NOT NULL,
    "cursoId" TEXT,
    CONSTRAINT "Conteudo_disciplinaId_fkey" FOREIGN KEY ("disciplinaId") REFERENCES "Disciplina" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Conteudo_cursoId_fkey" FOREIGN KEY ("cursoId") REFERENCES "Curso" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Conteudo" ("cursoId", "id", "nome", "tipoDeConteudo") SELECT "cursoId", "id", "nome", "tipoDeConteudo" FROM "Conteudo";
DROP TABLE "Conteudo";
ALTER TABLE "new_Conteudo" RENAME TO "Conteudo";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
