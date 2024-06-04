/*
  Warnings:

  - You are about to drop the column `idConteudo` on the `CriarMapa` table. All the data in the column will be lost.
  - Added the required column `idCurso` to the `CriarMapa` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_CriarMapa" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "idUsuario" TEXT NOT NULL,
    "idCurso" TEXT NOT NULL,
    "idExameCritico" TEXT NOT NULL,
    "idMapaDeEstudo" TEXT NOT NULL,
    "conteudoId" TEXT,
    CONSTRAINT "CriarMapa_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CriarMapa_idCurso_fkey" FOREIGN KEY ("idCurso") REFERENCES "Curso" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CriarMapa_idExameCritico_fkey" FOREIGN KEY ("idExameCritico") REFERENCES "ExameCritico" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CriarMapa_idMapaDeEstudo_fkey" FOREIGN KEY ("idMapaDeEstudo") REFERENCES "MapaDeEstudo" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CriarMapa_conteudoId_fkey" FOREIGN KEY ("conteudoId") REFERENCES "Conteudo" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_CriarMapa" ("id", "idExameCritico", "idMapaDeEstudo", "idUsuario") SELECT "id", "idExameCritico", "idMapaDeEstudo", "idUsuario" FROM "CriarMapa";
DROP TABLE "CriarMapa";
ALTER TABLE "new_CriarMapa" RENAME TO "CriarMapa";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
