/*
  Warnings:

  - Made the column `categories` on table `Complaint` required. This step will fail if there are existing NULL values in that column.
  - Made the column `score` on table `Complaint` required. This step will fail if there are existing NULL values in that column.
  - Made the column `stars` on table `Complaint` required. This step will fail if there are existing NULL values in that column.
  - Made the column `creationDate` on table `Complaint` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Complaint` MODIFY `categories` JSON NOT NULL,
    MODIFY `score` DOUBLE NOT NULL,
    MODIFY `stars` INTEGER NOT NULL,
    MODIFY `creationDate` DATETIME(3) NOT NULL;
