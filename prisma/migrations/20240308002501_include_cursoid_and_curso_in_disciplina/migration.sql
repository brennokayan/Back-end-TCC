/*
  Warnings:

  - Added the required column `cursoId` to the `Disciplina` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Disciplina" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "pesoDisciplina" INTEGER NOT NULL,
    "cursoId" TEXT NOT NULL,
    CONSTRAINT "Disciplina_cursoId_fkey" FOREIGN KEY ("cursoId") REFERENCES "Curso" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Disciplina" ("id", "nome", "pesoDisciplina") SELECT "id", "nome", "pesoDisciplina" FROM "Disciplina";
DROP TABLE "Disciplina";
ALTER TABLE "new_Disciplina" RENAME TO "Disciplina";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
