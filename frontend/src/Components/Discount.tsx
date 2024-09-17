import TextField from "@mui/material/TextField/TextField";
import { applyDiscount } from "../features/cartSlice";
import { useAppDispatch, useAppSelector } from "../features/hooks";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import createTheme from "@mui/material/styles/createTheme";


const theme = createTheme({
  palette: {
    primary: {
      main: `rgb(var(--primary-color))`,
    },
  },
});

export default function Discount() {
  const dispatch = useAppDispatch();
  const userName = useAppSelector((store) => store.cart.resume.userName);
  let statusMessage = ' ';
  if (userName !== 'johndoe') {
    statusMessage = `Welcome ${userName}! Discount applied to checkout.`;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget).get('email') as string;
    const name = data?.split("@")[0];
    if (!name) { statusMessage = "Please enter a valid email address." } else {
      dispatch(applyDiscount(name));
    }
  };

  return (
    <div className="w-full m-auto flex items-center py-2 justify-center bg-foreground min-h-40 shadow-sm">
      <div className="flex flex-col gap-6">
        <span className="text-xl sm:text-2xl font-bold text-center">
          Get Discount 20% Off
        </span>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center sm:items-start gap-1 sm:gap-4 justify-center max-w-full">
          <ThemeProvider theme={theme}>
            <TextField
              name="email"
              label={userName !== 'johndoe' ? 'Discount applied' : 'Email'}
              type="email"
              variant="outlined"
              size="small"
              disabled={userName !== 'johndoe'}
              placeholder='Enter your email'
              helperText={statusMessage}
            />
          </ThemeProvider>
          {userName === 'johndoe' &&
            <button type='submit' className="bg-primary text-white text-sm px-4 p-2 w-fit uppercase h-[40px] rounded">
              Subscribe
            </button>
          }
        </form>
      </div>
    </div>
  );
}
