import TextField, {
  TextFieldVariants,
} from "@mui/material/TextField/TextField";
import { ThemeProvider } from "@mui/material/styles";
import createTheme from "@mui/material/styles/createTheme";
import styled from "@mui/material/styles/styled";

const theme = createTheme({
  palette: {
    primary: {
      main: `rgb(var(--primary-color))`,
    },
    secondary: {
      main: `rgb(var(--call-to-action-color))`,
    },
  },
});

const CustomTextField = styled((props) => (
  <TextField InputProps={{ disableUnderline: true }} {...props} />
))(({ theme }) => ({
  "& .MuiFilledInput-root": {
    overflow: "hidden",
    borderRadius: 4,
    backgroundColor: "rgba(var(--foreground-color))",
    border: "1px solid",
    borderColor: "white",
    color: "rgba(var(--text-color), 0.7) ",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    "&:hover": {
      backgroundColor: "transparent",
      borderColor: "rgba(var(--primary-color), 0.3)",
    },
    "&.Mui-focused": {
      backgroundColor: "transparent",
      boxShadow: "rgba(var(--primary-color),0.5) 0 0 0 2px",
      borderColor: "transparent",
    },
  },
}));

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
