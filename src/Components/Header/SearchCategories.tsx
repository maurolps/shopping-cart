import { Input, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useState } from "react";

export default function SearchCategories() {
  const [categorie, setCategorie] = useState(" ");
  const handleCategorieChange = (e: SelectChangeEvent<string>) => {
    setCategorie(e.target.value);
  };
  return (
    <>
      <Select
        input={<Input disableUnderline={true} />}
        value={categorie}
        onChange={handleCategorieChange}
      >
        <MenuItem value=" ">
          <em>All Categories</em>
        </MenuItem>
        <MenuItem value="Running">Running</MenuItem>
        <MenuItem value="Training">Training</MenuItem>
        <MenuItem value="Walking">Walking</MenuItem>
      </Select>
    </>
  );
}
