-- CreateTable
CREATE TABLE "Explorador" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "lang" VARCHAR(255) NOT NULL,
    "missionCommander" VARCHAR(255) NOT NULL,
    "enrollments" INTEGER NOT NULL,
    "hasCertifications" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Explorador_pkey" PRIMARY KEY ("id")
);
