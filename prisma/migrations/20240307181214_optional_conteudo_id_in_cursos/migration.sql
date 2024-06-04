-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Curso" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "conteudoId" TEXT
);
INSERT INTO "new_Curso" ("conteudoId", "id", "nome") SELECT "conteudoId", "id", "nome" FROM "Curso";
DROP TABLE "Curso";
ALTER TABLE "new_Curso" RENAME TO "Curso";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
