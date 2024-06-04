/*
  Warnings:

  - Added the required column `idDisciplina` to the `Afunilar` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Afunilar" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "idConteudo" TEXT NOT NULL,
    "idCurso" TEXT NOT NULL,
    "idDisciplina" TEXT NOT NULL,
    CONSTRAINT "Afunilar_idDisciplina_fkey" FOREIGN KEY ("idDisciplina") REFERENCES "Disciplina" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Afunilar_idConteudo_fkey" FOREIGN KEY ("idConteudo") REFERENCES "Conteudo" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Afunilar_idCurso_fkey" FOREIGN KEY ("idCurso") REFERENCES "Curso" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Afunilar" ("id", "idConteudo", "idCurso") SELECT "id", "idConteudo", "idCurso" FROM "Afunilar";
DROP TABLE "Afunilar";
ALTER TABLE "new_Afunilar" RENAME TO "Afunilar";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
