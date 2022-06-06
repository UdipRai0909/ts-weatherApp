import React from "react";
import {
  Center,
  InputGroup,
  Input,
  InputLeftElement,
  Box,
  Flex,
  Image,
  Text,
  Divider,
  Circle,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

type SearchbarFlexProps = {
  handleSearchbar: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

export const SearchbarFlex = (props: SearchbarFlexProps) => {
  const { handleSearchbar } = props;
  return (
    <Flex h="10vh" justifyContent="center" alignItems="center">
      <Center>
        <InputGroup w={"320px"}>
          <InputLeftElement
            // htmlsize={4}
            pointerEvents="none"
            children={<Search2Icon color="gray" />}
          />
          <Input
            id="searchbarWeather"
            type="text"
            placeholder="Search Place (city name)"
            _placeholder={{ textStyle: "cGraySm" }}
            fontWeight="400"
            bg="lightGray"
            border="0"
            onKeyDown={(e) => handleSearchbar(e)}
          />
        </InputGroup>
      </Center>
    </Flex>
  );
};

type current = {
  desc: string;
  sunrise: number;
  sunset: number;
  temp: number;
  windStatus: number;
  humidity: number;
  visibility: number;
  uvi: number;
  dt: number;
};

type weather = {
  current: current;
  daily: string[];
};

type GeneralInfoFlexProps = {
  cloudy: string;
  kelvinToC: (val: number) => number;
  weather: weather;
  getTime: (val: number) => {
    weekday: string;
    time: string;
  };
};

export const GeneralInfoFlex = (props: GeneralInfoFlexProps) => {
  const { cloudy, kelvinToC, weather, getTime } = props;
  return (
    <>
      <Box>
        <Center>
          <Flex w="240px" h="240px">
            <Image
              w="100%"
              h="100%"
              objectFit="contain"
              src={cloudy}
              alt="Cloudy"
            />
          </Flex>
        </Center>
        <Text fontSize="5xl" fontWeight="500" color="active" ml={6}>
          {kelvinToC(weather.current.temp).toFixed(2)}°C
        </Text>
        <Text fontSize="20px" color="customGray" ml={6}>
          <Text as="span" color="customBlue" fontWeight="500">
            {getTime(weather.current.dt).weekday},&nbsp;
          </Text>
          {getTime(weather.current.dt).time}
        </Text>
      </Box>
      <Divider orientation="horizontal" mt={4} />
    </>
  );
};

type cordinateP = {
  name: string;
  country: string;
  lat: number;
  lon: number;
  [key: string]: any;
};

type CountryInfoFlexProps = {
  cloudy: string;
  rainny: string;
  location: string;
  weather: weather;
  cordinateP: cordinateP;
};

export const CountryInfoFlex = (props: CountryInfoFlexProps) => {
  const { cloudy, rainny, location, weather, cordinateP } = props;
  return (
    <Box mt={2}>
      <Flex alignItems="center" ml={6}>
        <Center boxSize="35px" h="30px">
          <Image src={cloudy} alt="Cloudy" />
        </Center>
        <Text mt={2} ml={2} color="darkerGray" fontWeight="500">
          {weather.current.desc}
        </Text>
      </Flex>
      <Flex alignItems="center" my={3} ml={6}>
        <Center boxSize="35px" h="30px">
          <Image
            w="100%"
            h="100%"
            objectFit="contain"
            src={rainny}
            alt="Some event"
          />
        </Center>
        <Text mb={2} ml={2} color="darkerGray" fontWeight="500">
          Rain &nbsp;- 30%
        </Text>
      </Flex>
      <Flex
        h="20vh"
        border="2px dashed lightGray"
        mt={7}
        mx={3}
        mr={2}
        py={2}
        pl={3}
        flexWrap="wrap"
        flexDirection="row"
        alignItems="baseline"
      >
        <Circle bg="customPurple" color="white" p={1}>
          <Flex w="30px" h="30px">
            <Image src={location} alt="Location" />
          </Flex>
        </Circle>
        <Flex w="70%" ml={2} mb={1}>
          <Text textStyle={"cBlue14xl"} fontSize={27}>
            {cordinateP.name}, {cordinateP.country}
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};
