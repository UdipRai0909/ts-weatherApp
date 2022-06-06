import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Button,
  Center,
  Circle,
  Flex,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

type circleC = {
  bg: string;
  color: string;
};

type circleF = {
  bg: string;
  color: string;
};

type AvatarFlexProps = {
  circleC: circleC;
  toCelsius: () => void;
  circleF: circleF;
  toFahrenheit: () => void;
};

export const AvatarFlex = (props: AvatarFlexProps) => {
  const { circleC, toCelsius, circleF, toFahrenheit } = props;
  return (
    <Flex w="100%" px="6" py="5" align="center" justify="space-between">
      <Flex gap={10}>
        <Text color="active" fontSize="lg" fontWeight="500">
          Weather Forecast
        </Text>
      </Flex>
      <Flex gap={2}>
        <Circle id="cCircle" size="40px" bg={circleC.bg} color={circleC.color}>
          <Text style={{ textDecoration: "none" }}>
            <Link onClick={toCelsius} style={{ textDecoration: "none" }}>
              °C
            </Link>
          </Text>
        </Circle>
        <Circle id="fCircle" size="40px" bg={circleF.bg} color={circleF.color}>
          <Text>
            <Link onClick={toFahrenheit} style={{ textDecoration: "none" }}>
              °F
            </Link>
          </Text>
        </Circle>

        <Stack ml={4} minWidth="250px">
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} bg="white">
              <Wrap spacing={3}>
                <WrapItem>
                  <Center>
                    <Avatar
                      w="30px"
                      h="90%"
                      objectFit="cover"
                      name="Udip Rai"
                      src={"image/udip_logo.png"}
                      bg="transparent"
                    />
                  </Center>
                </WrapItem>
                <Center>
                  <Text>Diagonal Tech</Text>
                </Center>
              </Wrap>
            </MenuButton>
            <MenuList zIndex={10}>
              <MenuItem>Profile</MenuItem>
              <MenuItem>Edit User</MenuItem>
              <MenuDivider />
              <MenuItem>Settings</MenuItem>
            </MenuList>
          </Menu>
        </Stack>
      </Flex>
    </Flex>
  );
};

type WeeklyFlexProps = {
  day: string;
  img: string;
  temp: string;
};

export const WeeklyFlex = (props: WeeklyFlexProps) => {
  const { day, img, temp } = props;
  return (
    <Flex
      _hover={{ color: "white", bg: "active" }}
      margin={2}
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      flexGrow="1"
      bg={"lightGray"}
      h="175px"
      w="full"
      maxW="330px"
      maxH="175px"
      // boxShadow="2xl"
      rounded="md"
      zIndex={1}
    >
      <Text textStyle={"cBlack1500"}>{day}</Text>
      <Flex w="50px" h="50px">
        <Image alt="Weather Weekly" src={img} />
      </Flex>
      <Text textStyle={"cBlack1600"}>{temp}</Text>
    </Flex>
  );
};
