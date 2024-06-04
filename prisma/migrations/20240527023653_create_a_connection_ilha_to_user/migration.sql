-- CreateTable
CREATE TABLE "escolherIlha" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "idUsuario" TEXT NOT NULL,
    "idIlha" TEXT NOT NULL,
    CONSTRAINT "escolherIlha_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "escolherIlha_idIlha_fkey" FOREIGN KEY ("idIlha") REFERENCES "Ilhas" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
