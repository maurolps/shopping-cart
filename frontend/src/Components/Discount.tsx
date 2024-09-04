import TextField from "@mui/material/TextField/TextField";

export default function Discount() {
  return (
    <div className="w-full m-auto flex items-center justify-center bg-foreground min-h-40 shadow-sm">
      <div className="flex flex-col gap-6">
        <span className="text-xl sm:text-2xl font-bold text-center">
          Get Discount 30% Off
        </span>
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            size="small"
            placeholder="Email"
          />

          <button className="bg-primary text-white text-sm px-4 p-2 w-fit uppercase ">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
