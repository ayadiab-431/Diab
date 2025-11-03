import { useState} from "react";
import { Button} from "@mui/material";
import { useContext } from "react";
import { CategoryFilter } from "../../Contexts/Contexts";
import ScrollContainer from "../ScrollContainer/ScrollContainer";
import useFetchCategories from "../../Hooks/useFetchCategories";
export default function FilterToggleBtns() {

    // Call Categories
    const {categories} = useFetchCategories();

    const [selected, setSelected] = useState("all");

    // selected category filter
    const {onCategoryChange} = useContext(CategoryFilter);

    const handleClick = (id) => {
        setSelected(id);
        onCategoryChange(id);
    };
    return (
      <ScrollContainer>
        <Button
            key = "all"
            variant= "outlined"
            onClick={() => handleClick("all")}
            sx = {(theme) => ({ 
                textTransform: "none",
                backgroundColor: selected === "all" ? theme.palette.coffeePalette.dark.main : theme.palette.coffeePalette.latte.main,
                color: selected === "all" ? theme.palette.coffeePalette.latte.main : theme.palette.coffeePalette.dark.main,
                borderColor : theme.palette.coffeePalette.dark.main,
                fontFamily : theme.typography.fontFamily,
                whiteSpace: "nowrap",
                transition: "0.3s",
                minWidth: "fit-content",
                maxWidth: "100%",
                overflow: "hidden",
                textOverflow: "ellipsis",
                ml : 1,
                "&:hover": {
                  ...(selected === "all") ? {} : {
                    backgroundColor: theme.palette.coffeePalette.dark.main,
                    color: theme.palette.coffeePalette.latte.main,
                  }
                
                }
            })}
            >
            الكل
            </Button>
      {categories.map((category) => (
        <Button
          key={category.id}
          variant= "outlined"
          onClick={() => handleClick(category.id)}
          sx={(theme) => ({
            textTransform: "none",
            backgroundColor: selected === category.id ? theme.palette.coffeePalette.dark.main : theme.palette.coffeePalette.latte.main,
            color: selected === category.id ? theme.palette.coffeePalette.latte.main : theme.palette.coffeePalette.dark.main,
            borderColor : theme.palette.coffeePalette.dark.main,
            fontFamily : theme.typography.fontFamily,
            whiteSpace: "nowrap",
            transition: "0.3s",
            minWidth: "fit-content",
            maxWidth: "100%",
            overflow: "hidden",
            textOverflow: "ellipsis",
            ml : 1,
            "&:hover": {
              ...(selected === category.id) ? {} : {
                    backgroundColor: theme.palette.coffeePalette.dark.main,
                    color: theme.palette.coffeePalette.latte.main,
                  }
            }
          })}
        >
          {category.category_name}
        </Button>
      ))}
    </ScrollContainer>
  );
}
