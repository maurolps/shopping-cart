import TextField, { TextFieldProps } from "@mui/material/TextField/TextField";
import styled from "@mui/material/styles/styled";

export const CustomTextField = styled((props: TextFieldProps) => (
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
