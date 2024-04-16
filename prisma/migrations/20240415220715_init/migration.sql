-- CreateTable
CREATE TABLE `Datos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `temperature` VARCHAR(191) NOT NULL,
    `humidity` VARCHAR(191) NOT NULL,
    `food` VARCHAR(191) NOT NULL,
    `water` VARCHAR(191) NOT NULL,
    `enclosureId` INTEGER NOT NULL,
    `date` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Enclosure` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `typeOfFood` VARCHAR(191) NOT NULL,
    `vaccine` VARCHAR(191) NOT NULL,
    `userId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Datos` ADD CONSTRAINT `Datos_enclosureId_fkey` FOREIGN KEY (`enclosureId`) REFERENCES `Enclosure`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Enclosure` ADD CONSTRAINT `Enclosure_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
