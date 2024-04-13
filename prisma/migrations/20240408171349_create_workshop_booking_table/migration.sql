-- CreateTable
CREATE TABLE "workshopBooking" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "userCount" INTEGER NOT NULL,

    CONSTRAINT "workshopBooking_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "workshopBooking_title_key" ON "workshopBooking"("title");
