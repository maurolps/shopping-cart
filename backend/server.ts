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

import shoes from "./mockShoes";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const categories = [
    "training",
    "running",
    "walking",
    "trending",
    "specialOffer",
  ];

  await Promise.all(
    categories.map((category) => {
      if (shoes[category]) {
        return prisma[category].createMany({
          data: shoes[category],
        });
      }
    })
  );

  console.log("data inserted.");
}

main()
  .catch(async (e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
