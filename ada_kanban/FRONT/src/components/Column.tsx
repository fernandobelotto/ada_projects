import { Box, Divider, Heading, VStack } from "@chakra-ui/react";

import type { CardModel } from "../models/card.model";
import { useAppSelector } from "../store";
import Card from "./Card";

interface Props {
  title: string;
  type: string;
}

export default function Column({ title, type }: Props) {
  const { entities } = useAppSelector((state) => state.card);

  return (
    <>
      <Box p={5} marginX={5} w="260px">
        <VStack w="260px">
          <Heading>{title}</Heading>
          <Divider />
          {entities
            .filter((card: CardModel) => card.list === type)
            .map((card: CardModel) => (
              <Card data={card} />
            ))}
        </VStack>
      </Box>
    </>
  );
}
