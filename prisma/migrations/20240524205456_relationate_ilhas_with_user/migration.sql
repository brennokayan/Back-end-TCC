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
    "dataUltimoConteudoEstudado" TEXT,
    "ilhaId" TEXT,
    CONSTRAINT "Usuario_ilhaId_fkey" FOREIGN KEY ("ilhaId") REFERENCES "Ilhas" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Usuario" ("dataUltimoConteudoEstudado", "dataUltimoTesteAvaliativo", "email", "id", "idade", "nome", "senha", "token", "ultimoConteudoEstudado", "ultimoTesteAvaliativo") SELECT "dataUltimoConteudoEstudado", "dataUltimoTesteAvaliativo", "email", "id", "idade", "nome", "senha", "token", "ultimoConteudoEstudado", "ultimoTesteAvaliativo" FROM "Usuario";
DROP TABLE "Usuario";
ALTER TABLE "new_Usuario" RENAME TO "Usuario";
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
