import throttle from "lodash.throttle";
import Autocomplete from "@mui/material/Autocomplete/Autocomplete";
import TextField from "@mui/material/TextField/TextField";
import { useCallback, useEffect, useState } from "react";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import createTheme from "@mui/material/styles/createTheme";
import { running, training, walking } from "../../Components/mockData.json";
import { Link } from "react-router-dom";

export default function SearchBar() {
  type Options = {
    name: string;
    id: string;
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: `rgb(var(--primary-color))`,
      },
    },
  });

  const fetchedData = [...running, ...training, ...walking];

  const [options, setOptions] = useState<Options[]>([]);
  const [inputValue, setInputValue] = useState("");

  //yes, we can ignore this linter warning
  const fetchData = useCallback(
    throttle((input: string, callback) => {
      const filteredData = fetchedData.filter((data) =>
        data.name.toLowerCase().includes(input.toLowerCase())
      );
      callback(filteredData);
    }, 500),
    []
  );

  useEffect(() => {
    if (inputValue && inputValue.length > 1) {
      fetchData(inputValue, setOptions);
    } else {
      setOptions([]);
    }
  }, [inputValue, fetchData]);

  return (
    <ThemeProvider theme={theme}>
      <Autocomplete
        id="search-bar"
        options={options}
        autoComplete={true}
        getOptionLabel={(option: Options) => option.name}
        filterOptions={(x) => x}
        includeInputInList
        noOptionsText="No shoes..."
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            size="small"
            placeholder="Search..."
            onChange={(e) => setInputValue(e.target.value)}
          />
        )}
        renderOption={(_, option) => (
          <>
            <Link to={`/product/${option.id}`}>
              <p
                className="text-text bg-background text-md cursor-pointer hover:font-bold px-4"
                key={option.id}
              >
                {option.name}
              </p>
            </Link>
          </>
        )}
      />
    </ThemeProvider>
  );
}
