import { useRoute, useNavigation } from "@react-navigation/native";
import {
  Box,
  AspectRatio,
  Center,
  Stack,
  Heading,
  Button,
  Image,
  Text,
} from "native-base";
import MapView from "react-native-maps";
import { ScrollView } from 'react-native';
import { useEffect } from "react";

export default function Details() {
  const route = useRoute();
  const navigation = useNavigation();

  const { nomeLocal, fotoLocal, descricaoLocal, tipoColeta, latitude, longitude, adv } = route.params;

  return (
    <ScrollView
      contentContainerStyle={{flex:0}}
>
    <Box alignItems="center">
        <Box
          mt={5}
          mb={5}
          maxW="100%"
          rounded="lg"
          overflow="hidden"
          borderColor="coolGray.200"
          borderWidth="1"
          _dark={{
            borderColor: "coolGray.600",
            backgroundColor: "green.200",
          }}
          _web={{
            shadow: 2,
            borderWidth: 0,
          }}
          _light={{
            backgroundColor: "gray.50",
          }}
        >
          <Box >
            <AspectRatio w="100%" ratio={16 / 9}>
              <Image
                source={{
                  uri: `${fotoLocal}`,
                }}
                alt="Imagem do local da coleta"
              />
            </AspectRatio>
            <Center
              bg="green.500"
              _dark={{
                bg: "green.400",
              }}
              _text={{
                color: "warmGray.50",
                fontWeight: "700",
                fontSize: "xs",
              }}
              position="absolute"
              bottom="0"
              px="3"
              py="1.5"
            >
              {adv}
            </Center>
          </Box>
          <Stack p="4" space={3} >
            <Stack space={2}>
              <Heading size="md" ml="-1">
                {nomeLocal}
              </Heading>
            </Stack>
            <Text fontWeight="400">{descricaoLocal}</Text>
          </Stack>
          <Box h={150} mt={5} mb={5}>
            <MapView
              flex={1}
              initialRegion={{
                latitude: latitude,
                longitude: longitude,
                latitudeDelta: 0.0009,
                longitudeDelta: 0.0002,
              }}
            />
          </Box>
          <Button onPress={() => navigation.goBack()}>Voltar</Button>
        </Box>
      </Box>
        </ScrollView>
  );
}
