import ProductCard from "./ProductCard";
import mockData from "./mockData.json";

export function Trending() {
  return (
    <>
      <div className="text-text text-lg font-bold p-4">Trending</div>
      <div className="flex flex-row gap-3">
        {mockData.map((data) => (
          <ProductCard product={data} />
        ))}
      </div>
    </>
  );
}
