type TProducts = {
  id: number;
  name: string;
  price: number;
  type: string;
  sale: number;
  stars: number;
}[];

export default function sortProducts(
  products: TProducts,
  sortBy: string
): TProducts {
  const salePrice = (price: number, sale: number) => price * (1 - sale);
  const sortedProducts = [...products];
  switch (sortBy) {
    case "Lowest":
      sortedProducts.sort(
        (a, b) => salePrice(a.price, a.sale) - salePrice(b.price, b.sale)
      );
      return sortedProducts;
    case "Highest":
      sortedProducts.sort(
        (a, b) => salePrice(b.price, b.sale) - salePrice(a.price, a.sale)
      );
      return sortedProducts;
    case "Rating":
      sortedProducts.sort((a, b) => b.stars - a.stars);
      return sortedProducts;
    default:
      return products;
  }
}
