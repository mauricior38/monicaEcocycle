import {
  Box,
  AspectRatio,
  Center,
  Stack,
  Heading,
  FlatList,
  Badge,
  Button
} from "native-base";
import {useNavigation} from '@react-navigation/native';
import { Image, Text } from "react-native";

const ecoPoints = [
  {
    id: 1,
    fotoLocal:
      "https://suitacdn.cloud-bricks.net/fotos/760993/file/desktop/on90892348.jpg?1684773495",
    nomeLocal: "SHOPPING PRAÇA NOVA",
    descricaoLocal:
      "BR-287 com Rua Irmã Dulce, nº 2.885, Bairro Patronato\nTelefone: (55) 3302-4363",
    tipoColeta: [
      "Lâmpadas de Led ou Florescentes",
      "Pilhas",
      "Baterias de Lítio",
      "Chumbo",
    ],
    latitude: -29.707483,
    longitude: -53.829431,
    adv: "8min (3,8 km) PRAÇA NOVA "
  },
  {
    id: 2,
    fotoLocal:
      "https://repositorio.santamaria.rs.gov.br/midia/2017/04/F19-43699.jpg",
    nomeLocal: "ASMAR",
    descricaoLocal:
      "Rua dos Branquilhos, n° 79, Bairro Nova Santa Marta\nTelefone: (55) 98111-0146",
    tipoColeta: [
      "CPU’s",
      "Estabilizadores",
      "Nobreaks",
      "Placas Eletrônicas em geral",
      "Celulares",
      "Tablets",
      "Notebooks",
      "Fios",
      "Impressoras",
    ],
    latitude: -29.683488,
    longitude: -53.853761,
    adv: "13min (7,1 km)"
  },
  {
    id: 3,
    fotoLocal:
      "https://www.coomysa1.com.br/wp-content/uploads/2022/12/Arco-de-Acesso-a-UFSM-II-Carolina-Lemos.jpg",
    nomeLocal: "CAMPUS DA UFSM",
    descricaoLocal:
      "Av. Roraima, nº 1000, Cidade Universitária, Bairro Camobi - \nTelefone: (55) 3220-8000 \n• Descarte de eletrônicos gerais nos certos pontos: \n• Anexo A do Centro de Tecnologia (CT) \n• Subsolo do Hospital Universitário (Husm) \n• Comitê Ambiental da Casa do Estudante (CEU) \n• Centro de Ciências Naturais e Exatas (CCNE)",
    tipoColeta: ["Pilha", "Bateria"],
    latitude: -29.709898,
    longitude: -53.716595,
    adv: "18min (12 km)"
  },
  {
    id: 4,
    fotoLocal:
      "https://pr0.nicelocal.br.com/FDMKR3NniwtmdB7Dqq7Glw/1120x700,q85/4px-BW84_n0QJGVPszge3NRBsKw-2VcOifrJIjPYFYkOtaCZxxXQ2U8PHh19-d6Zy9ulBSnwgCHo2VwieLuE-CVhITaJGB3cn491b-HkTeCEPaFI5bc9bg",
    nomeLocal: "MARINGÁ METAIS",
    descricaoLocal:
      "Licença de Operação: 25/2019 \nRua Miguel de Carvalho Macedo, nº 250, Bairro Uglione\nTelefone: (55) 3213-2074\nE-mail: maringametais@hotmail.com",
    tipoColeta: ["Eletrônicos gerais"],
    latitude: -29.711670,
    longitude: -53.813623,
    adv: "7min (3,8 km)",

  },
  {
    id: 5,
    fotoLocal:
      "https://lh3.googleusercontent.com/p/AF1QipMhvpWaZNd5eAyDiMC1j2P5JOuSTjTrmXIPYhSM=s680-w680-h510",
    nomeLocal: "COMÉRCIOS REVENDEDORES DE LAMPADAS FLORESCENTES",
    descricaoLocal:
      "A Lei Municipal nº 5.539/2011 afirma que os estabelecimentos comerciais revendedores de lâmpadas ficam obrigados a recebê-las. (localizada em hipermercados, supermercados, mercearias, lojas comercializam-tes de materiais de construção, lojas de material elétrico, distribuidores, atacadistas e comércio em geral)",
    tipoColeta: ["Todos os materiais referente a lampadas"],
    latitude: -0,
    longitude: -0,
    adv: "¡ESCOLHA UM COMÉRCIO!"
  },
];

export default function Home() {
    const navigation = useNavigation();
 


    function handlePressable(item){

        navigation.navigate('details' , {
            fotoLocal: item.fotoLocal,
            nomeLocal: item.nomeLocal,
            descricaoLocal: item.descricaoLocal,
            tipoColeta: item.tipoColeta,
            latitude: item.latitude,
            longitude: item.longitude,
            adv: item.adv
        })
    }


  return (
    <FlatList
    bg="green.200"
      data={ecoPoints}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Box alignItems="center">
          <Box
          mb={5}
          mt={5}
            maxW="80"
            rounded="lg"
            overflow="hidden"
            borderColor="coolGray.200"
            borderWidth="1"
            _dark={{
              borderColor: "coolGray.600",
              backgroundColor: "gray.700",
            }}
            _web={{
              shadow: 2,
              borderWidth: 0,
            }}
            _light={{
              backgroundColor: "gray.50",
            }}
          >
              <Box>
                <AspectRatio w="100%" ratio={16 / 9}>
                  <Image
                    source={{
                      uri: `${item.fotoLocal}`,
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
                  Depois vou definir o que tem aqui
                </Center>
              </Box>
              <Stack p="4" space={3}>
                <Stack space={2}>
                  <Heading size="md" ml="-1">
                    {item.nomeLocal}
                  </Heading>
                </Stack>
                <Text fontWeight="400">{item.descricaoLocal}</Text>
                <FlatList
                  data={item.tipoColeta}
                  renderItem={({ item }) => (
                    <Badge mt={1} colorScheme="success">
                      {item}
                    </Badge>
                  )}
                />
                <Button h={10} ml={18} mr={18} onPress={() => handlePressable(item)}>Saiba mais</Button>
              </Stack>
          </Box>
        </Box>
      )}

      showsVerticalScrollIndicator={false}
    />
  );
}
