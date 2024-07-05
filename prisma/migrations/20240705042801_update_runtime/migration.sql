/*
  Warnings:

  - You are about to drop the column `released` on the `Movie` table. All the data in the column will be lost.
  - You are about to alter the column `runtime` on the `Movie` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Movie" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "runtime" INTEGER NOT NULL,
    "plot" TEXT NOT NULL,
    "poster" TEXT NOT NULL,
    "isFav" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_Movie" ("id", "isFav", "plot", "poster", "runtime", "title") SELECT "id", "isFav", "plot", "poster", "runtime", "title" FROM "Movie";
DROP TABLE "Movie";
ALTER TABLE "new_Movie" RENAME TO "Movie";
CREATE UNIQUE INDEX "Movie_id_key" ON "Movie"("id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
