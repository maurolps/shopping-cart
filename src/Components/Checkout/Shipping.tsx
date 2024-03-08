import TextField, {
  TextFieldVariants,
} from "@mui/material/TextField/TextField";

export default function Shipping() {
  const styles = {
    variant: "filled" as TextFieldVariants,
    backgroundColor: "",
  };
  return (
    <div className="flex flex-col gap-2">
      <div className=" flex gap-2">
        <TextField
          label="First Name"
          variant={styles.variant}
          defaultValue="John"
          size="small"
          sx={{
            backgroundColor: styles.backgroundColor,
          }}
        />
        <TextField
          label="Last Name"
          variant={styles.variant}
          defaultValue="Doe"
          size="small"
          sx={{
            backgroundColor: styles.backgroundColor,
          }}
        />
      </div>
      <div className="flex flex-col gap-2">
        <TextField
          label="Address"
          variant={styles.variant}
          defaultValue="123 Main St"
          size="small"
          sx={{
            backgroundColor: styles.backgroundColor,
          }}
        />
        <TextField
          label="City"
          variant={styles.variant}
          defaultValue="New York"
          size="small"
          sx={{
            backgroundColor: styles.backgroundColor,
          }}
        />
      </div>
      <div className="flex gap-2">
        <TextField
          label="State"
          variant={styles.variant}
          defaultValue="NY"
          size="small"
          sx={{
            backgroundColor: styles.backgroundColor,
          }}
        />
        <TextField
          label="Zip Code"
          variant={styles.variant}
          defaultValue="10001"
          size="small"
          sx={{
            backgroundColor: styles.backgroundColor,
          }}
        />
      </div>
    </div>
  );
}
