import { PrismaClient } from "@prisma/client";
import updateImgUrl from "./utils/updateImgUrl";
import app from "./app";

const PORT = process.env.PORT || 3001;

export const shoesData: ShoesCategories = {};
const prisma = new PrismaClient();

type ShoesData = {
  id: number;
  name: string;
  price: number;
  type: string;
  sale: number;
  stars: number;
  imgUrl?: string;
};

type ShoesCategories = {
  [key: string]: ShoesData[];
};

async function main() {
  console.log("Loading data...");
  const dbCategories: Array<keyof PrismaClient> = ["training", "running"];
  const shoesPromises = dbCategories.map(async (category) => {
    const shoes = await (prisma[category] as any).findMany();
    return Object.assign(shoesData, { [category]: shoes });
  });
  await Promise.all(shoesPromises);
  console.log("Updating image urls...");
  await updateImgUrl();
  console.log("Running server...");
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}.`);
  });
}

main()
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
