import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Heading, HStack, Image, Text, VStack, Icon } from "native-base";

import { Entypo } from "@expo/vector-icons";

import { ExerciseDTO } from "@dtos/ExerciseDTO";

import { api } from "@services/api";

type Props = TouchableOpacityProps & {
  data: ExerciseDTO;
};

export function ExerciseCard({ data, ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <HStack
        p={2}
        pr={4}
        mb={3}
        bg="gray.500"
        alignItems="center"
        rounded="md"
      >
        <Image
          w={16}
          h={16}
          mr={4}
          source={{
            uri: `${api.defaults.baseURL}/exercise/thumb/${data.thumb}`,
          }}
          alt="Imagem do exercício"
          rounded="md"
          resizeMode="cover"
        />

        <VStack flex={1}>
          <Heading fontSize="lg" color="white" fontFamily="heading">
            {data.name}
          </Heading>

          <Text fontSize="sm" color="gray.200" mt={1} numberOfLines={2}>
            {data.series} séries x {data.repetitions} repetições
          </Text>
        </VStack>

        <Icon as={Entypo} name="chevron-thin-right" color="gray.300" />
      </HStack>
    </TouchableOpacity>
  );
}
