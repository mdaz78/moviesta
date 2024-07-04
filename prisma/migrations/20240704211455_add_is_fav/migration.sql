-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Movie" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "runtime" TEXT NOT NULL,
    "released" TEXT NOT NULL,
    "plot" TEXT NOT NULL,
    "poster" TEXT NOT NULL,
    "isFav" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_Movie" ("id", "plot", "poster", "released", "runtime", "title") SELECT "id", "plot", "poster", "released", "runtime", "title" FROM "Movie";
DROP TABLE "Movie";
ALTER TABLE "new_Movie" RENAME TO "Movie";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
