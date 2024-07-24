/*
  Warnings:

  - You are about to alter the column `score` on the `Complaint` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.

*/
-- AlterTable
ALTER TABLE `Complaint` MODIFY `score` DOUBLE NULL;
