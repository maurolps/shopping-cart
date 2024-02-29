import Rating from "@mui/material/Rating";

type ProductCardProps = {
  product: {
    id: number;
    name: string;
    price: number;
    sale: number;
    stars: number;
  };
};

export default function ProductCard({ product }: ProductCardProps) {
  const salePrice = () => (product.price * (1 - product.sale)).toFixed(2);
  return (
    <>
      <div className="  border-2 border-foreground p-3 w-fit flex flex-col">
        <div className="bg-foreground w-36 h-36"></div>
        <div className="text-text text-sm text-start font-bold max-w-36 min-h-10">
          {product.name}
        </div>
        <div>
          <Rating
            name="Shoe Stars"
            value={product.stars}
            precision={0.5}
            readOnly
            size="small"
          />
        </div>
        <div className="text-primary text-md text-start font-extrabold max-w-36">
          ${product.sale === 0 ? product.price : salePrice()}
        </div>
        {product.sale !== 0 && (
          <div className="flex gap-2 text-sm">
            <span className="text-text-variant line-through">
              ${product.price}
            </span>
            <span className="text-call text-xs bg-red-50 pl-1 pr-1">
              {product.sale * 100}% off
            </span>
          </div>
        )}
      </div>
    </>
  );
}
