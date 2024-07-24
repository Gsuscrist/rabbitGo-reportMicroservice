-- AlterTable
ALTER TABLE `Complaint` ADD COLUMN `categories` JSON NULL,
    ADD COLUMN `score` INTEGER NULL,
    ADD COLUMN `start` INTEGER NULL;
