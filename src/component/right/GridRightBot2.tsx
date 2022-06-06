import {
  Box,
  Flex,
  Grid,
  GridItem,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
} from "@chakra-ui/react";
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

type HumidityGridProps = {
  weather: weather;
};

export const HumidityGrid = (props: HumidityGridProps) => {
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
      <GridItem colSpan={2} display="flex" justifyContent="flex-start">
        <Flex>
          <Text textStyle={"cBlack2Sm"}>Humidity</Text>
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
          <Slider
            defaultValue={weather.current.humidity}
            min={weather.current.humidity}
            max={100}
            step={5}
            orientation="vertical"
          >
            <SliderTrack bg="blue.100" w="24px" borderRadius="2rem">
              <Box position="relative" right={10} />
              <SliderFilledTrack bg="blue.300" />
            </SliderTrack>
            <SliderThumb boxSize={6} />
          </Slider>
        </Flex>
      </GridItem>

      <GridItem colSpan={2} pb="3" display={"flex"} alignItems="flex-end">
        <Text textStyle={"cBlue14xl"}>{weather.current.humidity}</Text>
        <Text textStyle={"cGrayMd"} fontSize={"2xl"} pb={1}>
          %
        </Text>
      </GridItem>

      <GridItem colSpan={2} display={"flex"} pt={2}>
        <Flex>
          <Text ml="2" textStyle={"cBlack2Md"}>
            Status :
          </Text>
          <Text as="span" fontWeight={500} color="blue.300">
            &nbsp;Good Quality
          </Text>
        </Flex>
      </GridItem>
    </Grid>
  );
};

type VisibilityGridProps = {
  weather: weather;
};

export const VisibilityGrid = (props: VisibilityGridProps) => {
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
      <GridItem colSpan={2} display="flex" justifyContent="flex-start">
        <Flex>
          <Text textStyle={"cBlack2Sm"}>Visibiity</Text>
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
          <Slider
            defaultValue={weather.current.visibility}
            // min={0}
            max={100000}
            step={10}
            orientation="vertical"
          >
            <SliderTrack bg="orange.100" w="24px" borderRadius="2rem">
              <Box position="relative" right={10} />
              <SliderFilledTrack bg="orange.300" />
            </SliderTrack>
            <SliderThumb boxSize={6} />
          </Slider>
        </Flex>
      </GridItem>

      <GridItem colSpan={2} pb="3" display={"flex"} alignItems={"flex-end"}>
        <Text textStyle={"cBlue14xl"}>{weather.current.visibility}</Text>
        <Text textStyle={"cGrayMd"}>&nbsp;km/h</Text>
      </GridItem>

      <GridItem colSpan={2} pt={2} display={"flex"}>
        <Flex>
          <Text ml="2" textStyle={"cBlack2Md"}>
            Status :
          </Text>
        </Flex>
        <Text fontSize="md" fontWeight="500" color="orange.300">
          &nbsp;Average
        </Text>
      </GridItem>
    </Grid>
  );
};

type UviGridProps = {
  weather: weather;
};

export const UviGrid = (props: UviGridProps) => {
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
      <GridItem colSpan={2} display="flex" justifyContent="flex-start">
        <Flex>
          <Text textStyle={"cBlack2Sm"}>UV Radiation</Text>
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
          <Slider
            // defaultValue={weather.current.uvi}
            min={weather.current.uvi}
            max={100}
            step={10}
            orientation="vertical"
          >
            <SliderTrack bg="red.100" w="24px" borderRadius="2rem">
              <Box position="relative" right={10} />
              <SliderFilledTrack bg="red.300" />
            </SliderTrack>
            <SliderThumb boxSize={6} />
          </Slider>
        </Flex>
      </GridItem>

      <GridItem colSpan={2} pb="3">
        <Text textStyle={"cBlue14xl"}>
          {weather.current.uvi}
          <Text as="span" textStyle={"cGrayXl"}></Text>
        </Text>
      </GridItem>

      <GridItem colSpan={2} pt={2}>
        <Flex>
          <Text ml="2" textStyle={"cBlack2Md"}>
            Status :
          </Text>
          <Text fontSize="md" fontWeight="500" color="red.300">
            &nbsp;Bad Quality
          </Text>
        </Flex>
      </GridItem>
    </Grid>
  );
};
