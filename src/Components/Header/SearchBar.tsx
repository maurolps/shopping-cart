import throttle from "lodash.throttle";
import Autocomplete from "@mui/material/Autocomplete/Autocomplete";
import TextField from "@mui/material/TextField/TextField";
import { useCallback, useEffect, useState } from "react";

export default function SearchBar() {
  type Options = {
    name: string;
    product_id: string;
  };

  const fetchedData = [
    { name: "Air Jordan 1", product_id: "aj1" },
    { name: "Converse Chuck Taylor All Star", product_id: "ctas" },
    { name: "Adidas Stan Smith", product_id: "ss" },
    { name: "Nike Air Force 1", product_id: "af1" },
    { name: "Vans Old Skool", product_id: "os" },
    { name: "Puma Suede", product_id: "ps" },
    { name: "Reebok Classic Leather", product_id: "cl" },
    { name: "New Balance 574", product_id: "nb574" },
    { name: "Under Armour Curry 7", product_id: "c7" },
    { name: "Asics Gel-Kayano 27", product_id: "gk27" },
    { name: "Brooks Adrenaline GTS 21", product_id: "agts21" },
    { name: "Saucony Jazz Original", product_id: "jo" },
    { name: "Mizuno Wave Rider 24", product_id: "wr24" },
    { name: "Fila Disruptor II", product_id: "d2" },
    { name: "Lacoste Carnaby Evo", product_id: "ce" },
    { name: "Timberland 6-Inch Premium Waterproof Boots", product_id: "6pb" },
    { name: "Dr. Martens 1460", product_id: "1460" },
    { name: "UGG Classic Short", product_id: "cs" },
    { name: "Merrell Jungle Moc", product_id: "jm" },
    { name: "Salomon Speedcross 5", product_id: "s5" },
  ];

  const [options, setOptions] = useState<Options[]>([]);
  const [inputValue, setInputValue] = useState("");

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
          <p
            className="text-slate-500 text-md cursor-pointer hover:font-bold px-4"
            key={option.product_id}
          >
            {option.name}
          </p>
        </>
      )}
    />
  );
}
