// import express from "express";

// const app = express();
// const port = process.env.PORT || 3001;
// const shoesRoute = "/shoes";

// app.use(express.json());

// app.get(shoesRoute, (req, res) => {
//   res.status(200).json(shoes);
// });

// app.listen(port, () => {
//   console.log(
//     `GET request server started at http://localhost:${port}${shoesRoute}`
//   );
// });

// import shoes from "./mockShoes";
import { PrismaClient } from "@prisma/client";

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
  const dbCategories: Array<keyof PrismaClient> = ["training", "running"];
  const shoesData: ShoesCategories = {};
  const shoesPromises = dbCategories.map(async (category) => {
    const shoes = await (prisma[category] as any).findMany();
    return Object.assign(shoesData, { [category]: shoes });
  });
  await Promise.all(shoesPromises);
  if (shoesData.training) {
    console.log(shoesData.training[1]);
  }
}

main()
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
