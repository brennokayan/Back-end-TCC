/*
  Warnings:

  - You are about to drop the column `dataInicalEstudo` on the `Usuario` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Usuario" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "idade" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "dataInicialEstudo" TEXT,
    "dataFinalEstudo" TEXT,
    "ultimoTesteAvaliativo" TEXT,
    "dataUltimoTesteAvaliativo" TEXT,
    "ultimoConteudoEstudado" TEXT,
    "dataUltimoConteudoEstudado" TEXT
);
INSERT INTO "new_Usuario" ("dataFinalEstudo", "dataUltimoConteudoEstudado", "dataUltimoTesteAvaliativo", "email", "id", "idade", "nome", "senha", "token", "ultimoConteudoEstudado", "ultimoTesteAvaliativo") SELECT "dataFinalEstudo", "dataUltimoConteudoEstudado", "dataUltimoTesteAvaliativo", "email", "id", "idade", "nome", "senha", "token", "ultimoConteudoEstudado", "ultimoTesteAvaliativo" FROM "Usuario";
DROP TABLE "Usuario";
ALTER TABLE "new_Usuario" RENAME TO "Usuario";
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
