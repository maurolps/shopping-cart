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

type ShippingProps = {
  shipInfo: {
    firstName: string,
    lastName: string,
    address: string,
    city: string,
    state: string,
    zip: string,
  },
  handleShipInfo: (data: { [index: string]: string }) => void,
}

export default function Shipping(props: ShippingProps) {
  const { shipInfo, handleShipInfo } = props;
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
            value={shipInfo.firstName}
            onChange={(e) => { handleShipInfo({ firstName: e.target.value }) }}
            size="small"
          />

          <CustomTextField
            label="Last Name"
            variant={styles.variant}
            value={shipInfo.lastName}
            onChange={(e) => { handleShipInfo({ lastName: e.target.value }) }}
            size="small"
          />
        </div>
        <div className="flex flex-col gap-2">
          <CustomTextField
            label="Address"
            variant={styles.variant}
            value={shipInfo.address}
            onChange={(e) => { handleShipInfo({ address: e.target.value }) }}
            size="small"
          />
          <CustomTextField
            label="City"
            variant={styles.variant}
            value={shipInfo.city}
            onChange={(e) => { handleShipInfo({ city: e.target.value }) }}
            size="small"
          />
        </div>
        <div className="flex gap-2">
          <CustomTextField
            label="State"
            variant={styles.variant}
            value={shipInfo.state}
            onChange={(e) => { handleShipInfo({ state: e.target.value }) }}
            size="small"
          />
          <CustomTextField
            label="Zip Code"
            variant={styles.variant}
            value={shipInfo.zip}
            onChange={(e) => { handleShipInfo({ zip: e.target.value }) }}
            size="small"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
