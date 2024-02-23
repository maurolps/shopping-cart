import Rating from "@mui/material/Rating";

export default function ProductCard() {
  return (
    <>
      <div className="  border-2 border-foreground p-3 w-fit flex flex-col">
        <div className="bg-foreground w-36 h-36"></div>
        <div className="text-text text-sm text-start font-bold max-w-36">
          Nike Air Max 320 EVO Inspire
        </div>
        <div>
          <Rating
            name="Shoe Stars"
            value={4.5}
            precision={0.5}
            readOnly
            size="small"
          />
        </div>
        <div className="text-primary text-md text-start font-extrabold max-w-36">
          $159,23
        </div>
        <div className="flex gap-2 text-sm">
          <span className="text-text-variant line-through">299,44</span>
          <span>35% off</span>
        </div>
      </div>
    </>
  );
}
