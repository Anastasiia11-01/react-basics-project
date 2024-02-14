import React from "react";
import { useState } from "react";
import { data } from "../utils/data";
import { TextInput } from "./ui/TextInput";
import { RecipeListPage } from "../pages/RecipeListPage";
import { Center } from "@chakra-ui/react";

export const RecipeSearch = ({ clickFn }) => {
  const [searchField, setSearchField] = useState("");

  const matchedRecipes = data.hits.filter((recipe) => {
    return recipe.recipe.label
      .toLowerCase()
      .includes(searchField.toLowerCase());
  });

  const handleChange = (event) => setSearchField(event.target.value);

  return (
    <>
      <Center bgColor="blue.300" flexDirection="column">
        <label>Search for recipes: </label>
        <TextInput changeFn={handleChange} w="45%" mb={8} />
      </Center>

      <RecipeListPage clickFn={clickFn} recipes={matchedRecipes} />
    </>
  );
};
