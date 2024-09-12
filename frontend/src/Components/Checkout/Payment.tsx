import createTheme from "@mui/material/styles/createTheme";
import { CustomTextField } from "./CustomTextField";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import InputAdornment from "@mui/material/InputAdornment/InputAdornment";
import CreditCardIcon from "@mui/icons-material/CreditCard";

const theme = createTheme({
  palette: {
    primary: {
      main: `rgb(var(--primary-color))`,
    },
  },
});

type PaymentProps = {
  payInfo: {
    cardNumber: string,
    cardName: string,
  },
  handlePayInfo: (data: { [index: string]: string }) => void,
}

export default function Payment(props: PaymentProps) {
  const { payInfo, handlePayInfo } = props;
  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="flex flex-col gap-2">
          <CustomTextField
            label="Card Number"
            variant="filled"
            value={payInfo.cardNumber}
            onChange={(e) => { handlePayInfo({ cardNumber: e.target.value }) }}
            size="small"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <CreditCardIcon />
                </InputAdornment>
              ),
              disableUnderline: true,
            }}
          />
          <CustomTextField
            label="Name on Card"
            variant="filled"
            value={payInfo.cardName}
            onChange={(e) => { handlePayInfo({ cardName: e.target.value }) }}
            size="small"
          />
          <div className="flex gap-2">
            <CustomTextField
              label="Expires"
              variant="filled"
              defaultValue="03/28"
              size="small"
              sx={{
                width: "90px",
              }}
            />
            <CustomTextField
              label="CVC"
              variant="filled"
              defaultValue="527"
              size="small"
              sx={{
                width: "90px",
              }}
            />
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}
