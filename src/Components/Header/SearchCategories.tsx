import { Input, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useState } from "react";

export default function SearchCategories({
  categorieChange,
}: {
  categorieChange: (value: string) => void;
}) {
  const [categorie, setCategorie] = useState("All");
  const handleCategorieChange = (e: SelectChangeEvent<string>) => {
    setCategorie(e.target.value);
    categorieChange(e.target.value);
  };
  return (
    <>
      <Select
        input={<Input disableUnderline={true} />}
        value={categorie}
        onChange={handleCategorieChange}
      >
        <MenuItem value="All">All Categories</MenuItem>
        <MenuItem value="Running">Running</MenuItem>
        <MenuItem value="Training">Training</MenuItem>
        <MenuItem value="Walking">Walking</MenuItem>
      </Select>
    </>
  );
}
