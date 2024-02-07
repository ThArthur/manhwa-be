-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categories" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "manhwas" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "total_chapter" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "manhwas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categoryManhwa" (
    "manhwa_id" INTEGER NOT NULL,
    "category_id" INTEGER NOT NULL,

    CONSTRAINT "categoryManhwa_pkey" PRIMARY KEY ("manhwa_id","category_id")
);

-- CreateTable
CREATE TABLE "manhwaList" (
    "manhwa_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "actual_chapter" INTEGER NOT NULL DEFAULT 0,
    "reading" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "manhwaList_pkey" PRIMARY KEY ("manhwa_id","user_id")
);

-- AddForeignKey
ALTER TABLE "categoryManhwa" ADD CONSTRAINT "categoryManhwa_manhwa_id_fkey" FOREIGN KEY ("manhwa_id") REFERENCES "manhwas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "categoryManhwa" ADD CONSTRAINT "categoryManhwa_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "manhwaList" ADD CONSTRAINT "manhwaList_manhwa_id_fkey" FOREIGN KEY ("manhwa_id") REFERENCES "manhwas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "manhwaList" ADD CONSTRAINT "manhwaList_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
