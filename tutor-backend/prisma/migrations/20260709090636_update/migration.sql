/*
  Warnings:

  - The values [ACCEPT] on the enum `Status` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `area` on the `Class` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `Class` table. All the data in the column will be lost.
  - You are about to drop the column `created_by` on the `Class` table. All the data in the column will be lost.
  - You are about to drop the column `parent_name` on the `Class` table. All the data in the column will be lost.
  - You are about to drop the column `parent_phone` on the `Class` table. All the data in the column will be lost.
  - You are about to drop the column `require` on the `Class` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `Class` table. All the data in the column will be lost.
  - You are about to drop the column `weekly_sessions` on the `Class` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `Consultation` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `Consultation` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[username]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `address` to the `Class` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdBy` to the `Class` table without a default value. This is not possible if the table is not empty.
  - Added the required column `parentName` to the `Class` table without a default value. This is not possible if the table is not empty.
  - Added the required column `parentPhone` to the `Class` table without a default value. This is not possible if the table is not empty.
  - Added the required column `teacherRequirement` to the `Class` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Class` table without a default value. This is not possible if the table is not empty.
  - Added the required column `weeklySessions` to the `Class` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Consultation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Status_new" AS ENUM ('PENDING', 'CONTACTED');
ALTER TABLE "Consultation" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "Consultation" ALTER COLUMN "status" TYPE "Status_new" USING ("status"::text::"Status_new");
ALTER TYPE "Status" RENAME TO "Status_old";
ALTER TYPE "Status_new" RENAME TO "Status";
DROP TYPE "Status_old";
ALTER TABLE "Consultation" ALTER COLUMN "status" SET DEFAULT 'PENDING';
COMMIT;

-- DropForeignKey
ALTER TABLE "Class" DROP CONSTRAINT "Class_created_by_fkey";

-- AlterTable
ALTER TABLE "Class" DROP COLUMN "area",
DROP COLUMN "created_at",
DROP COLUMN "created_by",
DROP COLUMN "parent_name",
DROP COLUMN "parent_phone",
DROP COLUMN "require",
DROP COLUMN "updated_at",
DROP COLUMN "weekly_sessions",
ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "createdBy" INTEGER NOT NULL,
ADD COLUMN     "parentName" TEXT NOT NULL,
ADD COLUMN     "parentPhone" TEXT NOT NULL,
ADD COLUMN     "teacherRequirement" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "weeklySessions" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Consultation" DROP COLUMN "created_at",
DROP COLUMN "updated_at",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "message" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "role" SET DEFAULT 'ADMIN';

-- CreateIndex
CREATE INDEX "Class_subject_idx" ON "Class"("subject");

-- CreateIndex
CREATE INDEX "Class_grade_idx" ON "Class"("grade");

-- CreateIndex
CREATE INDEX "Class_teacherRequirement_idx" ON "Class"("teacherRequirement");

-- CreateIndex
CREATE INDEX "Class_address_idx" ON "Class"("address");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- AddForeignKey
ALTER TABLE "Class" ADD CONSTRAINT "Class_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
