/*
  Warnings:

  - You are about to drop the column `start` on the `Complaint` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Complaint` DROP COLUMN `start`,
    ADD COLUMN `stars` INTEGER NULL;
