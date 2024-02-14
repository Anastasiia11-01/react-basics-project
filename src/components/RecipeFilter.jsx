// no need to check this one as I have not managed to implement it for the whole project

import React, { useState } from "react";
import {
  Button,
  Center,
  Select,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { data } from "../utils/data";
import { RecipeListPage } from "../pages/RecipeListPage";

export const RecipeFilter = ({ clickFn }) => {
  const [dietLabel, setDietLabel] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  // Extract all unique diet labels
  const allDietLabels = Array.from(
    new Set(data.hits.flatMap((recipe) => recipe.recipe.dietLabels))
  );

  // Function to handle changes in diet label
  const handleDietLabelChange = (selectedLabel) => {
    setDietLabel(selectedLabel);

    // Filter recipes based on the selected diet label
    const filteredRecipes = selectedLabel
      ? data.hits.filter((recipe) =>
          recipe.recipe.dietLabels.includes(selectedLabel)
        )
      : data.hits;
    setFilteredRecipes(filteredRecipes);
  };

  return (
    <div>
      <Center bgColor="blue.300" flexDirection="column">
        {/* Button to trigger the dropdown */}
        <Menu>
          <MenuButton as={Button}>Filter</MenuButton>
          {/* Dropdown menu */}
          <MenuList>
            <MenuItem value="" onClick={() => handleDietLabelChange("")}>
              Select Diet Label
            </MenuItem>
            {/* Options for diet labels */}
            {allDietLabels.map((label) => (
              <MenuItem
                key={label}
                value={label}
                onClick={() => handleDietLabelChange(label)}
              >
                {label}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Center>

      {/* Display filtered recipes */}
      <RecipeListPage clickFn={clickFn} recipes={filteredRecipes} />
    </div>
  );
};
