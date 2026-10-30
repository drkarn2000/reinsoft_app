-- AlterTable
ALTER TABLE "case_studies" ADD COLUMN     "ctaButtonText" TEXT DEFAULT 'Start Your Project',
ADD COLUMN     "ctaButtonUrl" TEXT DEFAULT '/#contact',
ADD COLUMN     "ctaDescription" TEXT DEFAULT 'Let''s discuss how we can bring your vision to life with a high-performance digital solution.',
ADD COLUMN     "ctaTitle" TEXT DEFAULT 'Ready to achieve similar results?',
ADD COLUMN     "overviewHeading" TEXT DEFAULT 'Project Overview',
ADD COLUMN     "problemHeading" TEXT DEFAULT 'The Problem',
ADD COLUMN     "solutionHeading" TEXT DEFAULT 'The Solution';
