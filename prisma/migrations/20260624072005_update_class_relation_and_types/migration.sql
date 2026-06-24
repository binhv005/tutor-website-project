/*
  Warnings:

  - You are about to drop the column `tutor_id` on the `Class` table. All the data in the column will be lost.
  - Added the required column `created_by` to the `Class` table without a default value. This is not possible if the table is not empty.
  - Added the required column `parent_name` to the `Class` table without a default value. This is not possible if the table is not empty.
  - Added the required column `parent_phone` to the `Class` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `tuition` on the `Class` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Class" DROP CONSTRAINT "Class_tutor_id_fkey";

-- AlterTable
ALTER TABLE "Class" DROP COLUMN "tutor_id",
ADD COLUMN     "created_by" INTEGER NOT NULL,
ADD COLUMN     "parent_name" TEXT NOT NULL,
ADD COLUMN     "parent_phone" TEXT NOT NULL,
DROP COLUMN "tuition",
ADD COLUMN     "tuition" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Class" ADD CONSTRAINT "Class_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
