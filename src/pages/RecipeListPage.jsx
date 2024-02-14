import React from "react";
import { Center, Flex } from "@chakra-ui/react";
import { data } from "../utils/data";
import { RecipeCard } from "../components/RecipeCard";

export const RecipeListPage = ({ recipes, clickFn }) => {
  return (
    <Center bgColor="blue.300">
      <Flex gap={3} w="100%" maxW="1200px" flexWrap="wrap" justify="center">
        {recipes.map((item) => (
          <RecipeCard
            clickFn={clickFn}
            item={item.recipe}
            key={item.recipe.label}
          />
        ))}
      </Flex>
    </Center>
  );
};
