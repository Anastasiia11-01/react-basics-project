import React from "react";
import {
  Center,
  Image,
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
  Flex,
  Button,
  Grid,
  GridItem,
  UnorderedList,
  ListItem,
  Box,
  Tag,
  Select,
} from "@chakra-ui/react";

import { HealthTag } from "../components/ui/RecipeHealthTag";
import { DietTag } from "../components/ui/RecipeDietTag";
import { CautionTag } from "../components/ui/RecipeCautionsTag";

export const RecipePage = ({ item, clickFn }) => {
  const totalNutrients = item.totalNutrients;
  return (
    <Center bgColor="blue.300" h="auto" flexDirection="column">
      <Card
        borderRadius="xl"
        w={{ base: "90%", md: "3xl" }}
        maxW="1200px"
        h="auto"
      >
        <CardBody bgColor="white">
          <Button w="fit-content" onClick={() => clickFn()} mt={0}>
            Back to overview
          </Button>
          <Image h="md" w="100%" src={item.image} borderRadius="xl" />
          <Stack mt="6" spacing="5">
            <Grid
              templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
              gap={12}
            >
              <GridItem>
                <Text color="#A0AEC0" textTransform="uppercase">
                  {item.mealType}
                </Text>
                <Heading size="lg" m={2}>
                  {item.label}
                </Heading>
                <Text ml={2}>Total cooking time: {item.totalTime} Minutes</Text>
                <Text ml={2}>Servings: {item.yield}</Text>
                <Box size="md" m={2} fontWeight="bold">
                  Ingredients:
                </Box>
                <UnorderedList>
                  {item.ingredientLines.map((ingredient) => (
                    <ListItem key={ingredient}>{ingredient}</ListItem>
                  ))}
                </UnorderedList>
              </GridItem>

              <GridItem>
                <Box m={2}>Health labels:</Box>
                <Grid templateColumns="repeat(3, auto)" gap={2}>
                  {item.healthLabels.map((health) => (
                    <HealthTag key={health} size="md">
                      {health}
                    </HealthTag>
                  ))}
                </Grid>

                {item.dietLabels.length > 0 && (
                  <Flex gap={2} m={2}>
                    <Box>Diet:</Box>
                    {item.dietLabels.map((diet) => (
                      <DietTag key={diet} size="md">
                        {diet}
                      </DietTag>
                    ))}
                  </Flex>
                )}
                {item.cautions.length > 0 && (
                  <Flex gap={2} m={2}>
                    <Box>Cautions:</Box>
                    {item.cautions.map((caution) => (
                      <CautionTag key={caution} size="md">
                        {caution}
                      </CautionTag>
                    ))}
                  </Flex>
                )}

                <Box mt={4}>
                  <Select placeholder="Total nutrients" fontWeight="bold">
                    {Object.keys(totalNutrients).map((nutrient, index) => {
                      const { label, quantity, unit } =
                        totalNutrients[nutrient];
                      return (
                        <option key={index} value={label}>
                          {label}: {quantity.toFixed(1)} {unit}
                        </option>
                      );
                    })}
                  </Select>
                </Box>
                <Button w="fit-content" onClick={() => clickFn()} mt={20}>
                  Back to overview
                </Button>
              </GridItem>
            </Grid>
          </Stack>
        </CardBody>
      </Card>
    </Center>
  );
};
