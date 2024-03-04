import ProductCard from "./ProductCard";
import mockData from "./mockData.json";

export default function AllShoes() {
  return (
    <div className=" flex flex-col gap-4 w-[900px] m-auto">
      <div className="text-text text-lg px-4 font-bold  uppercase">
        All Shoes
      </div>
      <div className="flex gap-3">
        <button className="bg-foreground text-text p-1 px-2">Featured</button>
        <button className="bg-primary text-white p-1 px-2">Top Sells</button>
        <button className="bg-foreground text-text p-1 px-2">Top Review</button>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(155px,1fr))] gap-2">
        {mockData.map((data) => (
          <ProductCard product={data} />
        ))}
      </div>
    </div>
  );
}
