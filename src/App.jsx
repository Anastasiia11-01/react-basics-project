import React from "react";
import { useState } from "react";
import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipePage } from "./pages/RecipePage";
import { Center, Heading } from "@chakra-ui/react";
import { RecipeSearch } from "./components/RecipeSearch";

export const App = () => {
  // Your state code here
  const [item, setItem] = useState();
  const title = "Recipe Checker";

  return (
    <div>
      {item ? (
        <RecipePage item={item} clickFn={setItem} />
      ) : (
        <>
          <Center bgColor="blue.300" padding={8}>
            <Heading color="white">{title}</Heading>
          </Center>
          <RecipeSearch clickFn={setItem} />
        </>
      )}
    </div>
  );
};
