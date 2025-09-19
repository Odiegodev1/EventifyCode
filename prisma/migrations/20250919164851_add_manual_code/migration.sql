/*
  Warnings:

  - A unique constraint covering the columns `[manualCode]` on the table `Ticket` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `manualCode` to the `Ticket` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Ticket" ADD COLUMN     "manualCode" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Ticket_manualCode_key" ON "public"."Ticket"("manualCode");
