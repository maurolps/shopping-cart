import TextField from "@mui/material/TextField/TextField";
import { useState } from "react";

export default function Discount() {

  const [status, setStatus] = useState(' ');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget).get('email') as string;
    const name = data?.split("@")[0];
    if (!name) { setStatus("Please enter a valid email address.") } else {
      setStatus(`Welcome ${name}! Discount applied to checkout.`);
    }
    console.log(name);
  };

  return (
    <div className="w-full m-auto flex items-center py-2 justify-center bg-foreground min-h-40 shadow-sm">
      <div className="flex flex-col gap-6">
        <span className="text-xl sm:text-2xl font-bold text-center">
          Get Discount 30% Off
        </span>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center sm:items-start gap-1 sm:gap-4 justify-center max-w-full">
          <TextField
            name="email"
            label="Email"
            type="email"
            variant="outlined"
            size="small"
            disabled={status !== ' '}
            placeholder="Email"
            helperText={status}
          />
          {status === ' ' &&
            <button type='submit' className="bg-primary text-white text-sm px-4 p-2 w-fit uppercase h-[40px] rounded">
              Subscribe
            </button>
          }
        </form>
      </div>
    </div>
  );
}
