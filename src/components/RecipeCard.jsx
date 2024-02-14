import React from "react";
import {
  Card,
  Center,
  Flex,
  Image,
  CardBody,
  Stack,
  Heading,
  Text,
  Grid,
} from "@chakra-ui/react";
import { HealthTag } from "../components/ui/RecipeHealthTag";
import { DietTag } from "../components/ui/RecipeDietTag";
import { CautionTag } from "../components/ui/RecipeCautionsTag";

export const RecipeCard = ({ item, clickFn }) => {
  return (
    <Card
      borderRadius="xl"
      w="sm"
      h="auto"
      onClick={() => clickFn(item)}
      cursor="pointer"
      _hover={{ transform: "scale(1.01)" }}
    >
      <CardBody>
        <Image h={64} w="sm" src={item.image} borderRadius="xl" />

        <Stack mt="6" spacing="3">
          <Text color="#718096" textTransform="uppercase">
            {item.mealType}
          </Text>
          <Heading size="md">{item.label}</Heading>
          <Flex gap={2}>
            {item.healthLabels.map((health) =>
              health === "Vegetarian" || health === "Vegan" ? (
                <HealthTag key={health} size="md">
                  {health}
                </HealthTag>
              ) : null
            )}
          </Flex>
          <Flex gap={2}>
            {item.dietLabels.map((diet) => (
              <DietTag key={diet} size="md">
                {diet}
              </DietTag>
            ))}
          </Flex>
          <Heading size="sm" color="#4A5568">
            Dish: {item.dishType}
          </Heading>

          <Flex gap={2}>
            <Text>Cautions:</Text>
            {item.cautions.length > 0 ? (
              item.cautions.map((caution) => (
                <CautionTag key={caution} size="md">
                  {caution}
                </CautionTag>
              ))
            ) : (
              <Text>None</Text>
            )}
          </Flex>
        </Stack>
      </CardBody>
    </Card>
  );
};
