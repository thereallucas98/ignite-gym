import { useState } from "react";
import { VStack, FlatList, HStack, Heading, Text } from "native-base";

import { Group } from "@components/Group";
import { HomeHeader } from "@components/HomeHeader";

export function Home() {
  const [groupSelected, setGroupSelected] = useState("costa");
  const [groups, _] = useState([
    "costa",
    "ombro",
    "bíceps",
    "tríceps",
    "perna",
  ]);

  return (
    <VStack flex={1}>
      <HomeHeader />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Group
            name={item}
            isActive={groupSelected === item}
            onPress={() => setGroupSelected(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{
          px: 8,
        }}
        my={10}
        maxH={10}
      />

      <VStack px={8}>
        <HStack justifyContent="space-between" mb={5}>
          <Heading color="gray.200" fontSize="md">
            Exercícios
          </Heading>
          <Text color="gray.200" fontSize="sm">
            {groups.length}
          </Text>
        </HStack>
      </VStack>
    </VStack>
  );
}
