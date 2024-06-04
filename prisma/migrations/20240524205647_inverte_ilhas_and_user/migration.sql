/*
  Warnings:

  - You are about to drop the column `ilhaId` on the `Usuario` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "_IlhasToUsuario" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_IlhasToUsuario_A_fkey" FOREIGN KEY ("A") REFERENCES "Ilhas" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_IlhasToUsuario_B_fkey" FOREIGN KEY ("B") REFERENCES "Usuario" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Usuario" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "idade" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "ultimoTesteAvaliativo" TEXT,
    "dataUltimoTesteAvaliativo" TEXT,
    "ultimoConteudoEstudado" TEXT,
    "dataUltimoConteudoEstudado" TEXT
);
INSERT INTO "new_Usuario" ("dataUltimoConteudoEstudado", "dataUltimoTesteAvaliativo", "email", "id", "idade", "nome", "senha", "token", "ultimoConteudoEstudado", "ultimoTesteAvaliativo") SELECT "dataUltimoConteudoEstudado", "dataUltimoTesteAvaliativo", "email", "id", "idade", "nome", "senha", "token", "ultimoConteudoEstudado", "ultimoTesteAvaliativo" FROM "Usuario";
DROP TABLE "Usuario";
ALTER TABLE "new_Usuario" RENAME TO "Usuario";
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "_IlhasToUsuario_AB_unique" ON "_IlhasToUsuario"("A", "B");

-- CreateIndex
CREATE INDEX "_IlhasToUsuario_B_index" ON "_IlhasToUsuario"("B");
