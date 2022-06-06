import { Circle, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import React from "react";

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

type SunCondGridProps = {
  sunrise: string;
  sunset: string;
  time: (val: number) => {
    weekday: string;
    time: string;
  };
  weather: weather;
};

export const SunCondGrid = (props: SunCondGridProps) => {
  const { sunrise, sunset, time, weather } = props;
  return (
    <Grid
      px={2}
      pl={5}
      py={3}
      pb={5}
      bg="white"
      h="170px"
      boxShadow="2xl"
      rounded="lg"
      transition="all 0.2s"
      borderRadius="md"
      borderWidth="1px"
      templateRows="repeat(3,1fr)"
      templateColumns="repeat(1,1fr)"
      _hover={{ bg: "active" }}
      _expanded={{ bg: "blue.400" }}
      _focus={{ boxShadow: "outline" }}
    >
      <GridItem>
        <Text textStyle={"cBlack2Sm"}>Sunrise and Sunset</Text>
      </GridItem>
      <GridItem display="flex">
        <Flex w="50px" h="30px">
          <Image
            w="100%"
            h="100%"
            objectFit="contain"
            src={sunrise}
            alt="Sunrise"
          />
        </Flex>
        <Flex display="flex" flexDirection={"column"}>
          <Text ml={1} textStyle={"cBlue1Md"}>
            {time(weather.current.sunrise).time}
          </Text>
          <Text mb={4} textStyle={"cGraySm"}>
            - 1m 36s
          </Text>
        </Flex>
      </GridItem>
      <GridItem display="flex">
        <Flex w="50px" h="30px">
          <Image
            w="100%"
            h="100%"
            objectFit="contain"
            src={sunset}
            alt="Sunset"
          />
        </Flex>
        <Flex display="flex" flexDirection={"column"}>
          <Text ml={1} textStyle={"cBlue1Md"}>
            {time(weather.current.sunset).time}
          </Text>
          <Text textStyle={"cGraySm"}>- 2m 36s</Text>
        </Flex>
      </GridItem>
    </Grid>
  );
};

type cordinateP = {
  name: string;
  country: string;
  lat: number;
  lon: number;
  [key: string]: any;
};

type TempCountryGridProps = {
  temprature: string;
  cord: cordinateP;
  temp: string;
  location: string;
};

export const TempCountryGrid = (props: TempCountryGridProps) => {
  const { temprature, cord, temp, location } = props;
  return (
    <Grid
      px={2}
      pl={5}
      py={3}
      bg="white"
      h="170px"
      boxShadow="2xl"
      rounded="lg"
      transition="all 0.2s"
      borderRadius="md"
      borderWidth="1px"
      _hover={{ bg: "active" }}
      _expanded={{ bg: "blue.400" }}
      _focus={{ boxShadow: "outline" }}
      templateRows="repeat(3, 1fr)"
      templateColumns="repeat(3, 1fr)"
    >
      <GridItem colSpan={2} display="flex" justifyContent="flex-start">
        <Flex>
          <Text textStyle={"cBlack2Sm"}>Temperature</Text>
        </Flex>
      </GridItem>

      <GridItem
        rowSpan={3}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="flex-end"
      >
        <Flex w="50px" h="120px">
          <Image
            w="100%"
            h="100%"
            objectFit="contain"
            src={temprature}
            alt="Temperature"
          />
        </Flex>
      </GridItem>

      <GridItem colSpan={2} pb="3" display={"flex"} alignItems="flex-end">
        <Text textStyle={"cBlue14xl"}>{temp}</Text>
        <Text textStyle={"cGrayMd"}>&nbsp;c</Text>
      </GridItem>

      <GridItem colSpan={2} pt={2}>
        <Flex>
          <Circle bg="gray" color="white" p={1}>
            <Flex w="26px" h="26px">
              <Image w="100%" h="100%" src={location} alt="Location" />
            </Flex>
          </Circle>
          <Text ml="2" mt={1} textStyle={"cBlack2Md"}>
            {cord.country}
          </Text>
        </Flex>
      </GridItem>
    </Grid>
  );
};

type WeatherCondGridProps = {
  weather: weather;
};

export const WeatherCondGrid = (props: WeatherCondGridProps) => {
  const { weather } = props;
  return (
    <Grid
      px={2}
      pl={5}
      py={3}
      bg="white"
      h="170px"
      boxShadow="2xl"
      rounded="lg"
      transition="all 0.2s"
      borderRadius="md"
      borderWidth="1px"
      _hover={{ bg: "active" }}
      _expanded={{ bg: "blue.400" }}
      _focus={{ boxShadow: "outline" }}
      templateRows="repeat(3, 1fr)"
      templateColumns="repeat(3, 1fr)"
    >
      <GridItem colSpan={3} display="flex" justifyContent="flex-start">
        <Flex>
          <Text textStyle={"cBlack2Sm"}>Wind Status</Text>
        </Flex>
      </GridItem>

      <GridItem colSpan={3} pb="3" display={"flex"} alignItems="flex-end">
        <Text textStyle={"cBlue14xl"}>{weather.current.windStatus}</Text>
        <Text textStyle={"cGrayMd"}>&nbsp;km/h</Text>
      </GridItem>

      <GridItem colSpan={3} pt={2}>
        <Flex>
          <Text ml="2" textStyle="cBlack2Md">
            Status :
          </Text>
        </Flex>
      </GridItem>
    </Grid>
  );
};
