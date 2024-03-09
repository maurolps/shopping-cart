import { TextFieldVariants } from "@mui/material/TextField/TextField";
import { ThemeProvider } from "@mui/material/styles";
import createTheme from "@mui/material/styles/createTheme";
import { CustomTextField } from "./CustomTextField";

const theme = createTheme({
  palette: {
    primary: {
      main: `rgb(var(--primary-color))`,
    },
  },
});

export default function Shipping() {
  const styles = {
    variant: "filled" as TextFieldVariants,
  };
  return (
    <ThemeProvider theme={theme}>
      <div className="flex flex-col gap-2">
        <div className=" flex gap-2">
          <CustomTextField
            label="First Name"
            variant={styles.variant}
            defaultValue="John"
            size="small"
          />

          <CustomTextField
            label="Last Name"
            variant={styles.variant}
            defaultValue="Doe"
            size="small"
          />
        </div>
        <div className="flex flex-col gap-2">
          <CustomTextField
            label="Address"
            variant={styles.variant}
            defaultValue="123 Main St"
            size="small"
          />
          <CustomTextField
            label="City"
            variant={styles.variant}
            defaultValue="New York"
            size="small"
          />
        </div>
        <div className="flex gap-2">
          <CustomTextField
            label="State"
            variant={styles.variant}
            defaultValue="NY"
            size="small"
          />
          <CustomTextField
            label="Zip Code"
            variant={styles.variant}
            defaultValue="10001"
            size="small"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
