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
import { fetchImageUrls } from "./utils/fetchImageUrls";

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

type TImageUrl = {
  name: string;
  url: string;
};

const shoesData: ShoesCategories = {};

async function updateImgUrl() {
  const imgUrls = await fetchImageUrls();
  const findImgUrl = (imgUrls: TImageUrl[], productName: string) => {
    if (imgUrls !== undefined) {
      return imgUrls.find((item) => item.name.includes(productName))?.url;
    }
  };
  for (const category in shoesData) {
    shoesData[category].forEach((shoe) => {
      shoe.imgUrl = findImgUrl(imgUrls, shoe.name);
    });
  }
  // shoesData.array.forEach(element => {
  //   element.imgUrl = findImgUrl(imgUrls, element.name);

  //   if (element.imgUrl) {
  //     console.log(element.imgUrl);
  //   }

  // });
}

async function main() {
  const dbCategories: Array<keyof PrismaClient> = ["training", "running"];
  const shoesPromises = dbCategories.map(async (category) => {
    const shoes = await (prisma[category] as any).findMany();
    return Object.assign(shoesData, { [category]: shoes });
  });
  await Promise.all(shoesPromises);
  await updateImgUrl();
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
