-- Allow Black Friday popup submissions without an email address.
ALTER TABLE "Submission" ALTER COLUMN "email" DROP NOT NULL;
