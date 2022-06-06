import * as React from "react";
import {
  ChakraProvider,
  Text,
  Grid,
  Flex,
  GridItem,
  Stack,
  SimpleGrid,
} from "@chakra-ui/react";
import {
  CountryInfoFlex,
  GeneralInfoFlex,
  SearchbarFlex,
} from "./component/left/FlexLeftAll";
import cloudy from "./img/cloudy.svg";
import location from "./img/location.svg";
import rainny from "./img/rainny.svg";
import sunny from "./img/sunny.svg";
import sunrise from "./img/sunrise.svg";
import sunset from "./img/sunset.svg";
import temprature from "./img/temprature.svg";
import { AvatarFlex, WeeklyFlex } from "./component/right/FlexRightTop";
import { Theme } from "./themes/Theme";
import {
  SunCondGrid,
  TempCountryGrid,
  WeatherCondGrid,
} from "./component/right/GridRightBot1";
import {
  UviGrid,
  HumidityGrid,
  VisibilityGrid,
} from "./component/right/GridRightBot2";

type cordinateP = {
  name: string;
  country: string;
  lat: number;
  lon: number;
  [key: string]: any;
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
  [key: string]: any;
};

type tempData = {
  current: current;
  daily: string[];
};

type resultData = {
  cordinateP: cordinateP;
  tempData: tempData;
  dailyCelsius: string[];
};

type weather = {
  current: current;
  daily: string[];
};

type getTimeAssert = {
  weekday: string;
  time: string;
};

type circleC = {
  bg: string;
  color: string;
};

type circleF = {
  bg: string;
  color: string;
};

// Temperature conversions
const kelvinToC = (val: number): number => val - 273.15;
const kelvinToF = (val: number): number => (val - 273.15) * 1.8 + 32;

// Get Weekday and time in hours:mins
const getTime = (val: number): getTimeAssert => {
  const milliseconds: number = val * 1000;
  const date: Date = new Date(milliseconds);
  let day: number = date.getDay();

  // Weekday
  let weekday = (day: number): string => {
    return day === 0
      ? "Sunday"
      : day === 1
      ? "Monday"
      : day === 2
      ? "Tuesday"
      : day === 3
      ? "Wednesday"
      : day === 4
      ? "Thursday"
      : day === 5
      ? "Friday"
      : day === 6
      ? "Saturday"
      : "Some error occured for day.";
  };

  let hour: number = date.getHours(),
    min: number = date.getMinutes(),
    changeNum = (num: number): string | number => (num < 10 ? `0${num}` : num),
    // Time
    time: string = [
      changeNum(hour > 12 ? hour - 12 : hour),
      changeNum(min),
    ].join(":"),
    timeDetails = {
      weekday: weekday(day),
      time: time,
    };

  return timeDetails;
};

const range = (start: number, end: number, length: number = end - start + 1) =>
  Array.from({ length }, (_, i) => start + i);

function App() {
  const [cordinateP, setCordPlace] = React.useState<cordinateP>({
    name: "Budhanilkantha",
    country: "Kathmandu, Nepal",
    lat: 27.76,
    lon: 85.36,
  });

  const [weather, setWeather] = React.useState<weather>({
    current: {
      desc: "Mostly Cloudy",
      sunrise: 1654219019,
      sunset: 1654279313,
      temp: 289,
      windStatus: 8.72,
      humidity: 12,
      visibility: 9.43,
      uvi: 13,
      dt: Date.now() / 1000,
    },
    daily: ["287", "294", "305", "284", "286", "300", "289"],
  });

  // // Find Latitude and Longitude from OpenWeather https://openweathermap.org/current
  // // Find Temperature from Open-Meteo https://open-meteo.com/en/docs

  const findWeatherDetails = (searchQuery: string): void => {
    let asyncWeatherDetails = async (): Promise<resultData> => {
      try {
        const apiKey = "9da046cc7bce0605c0f17cc58abf3f37";

        // Find Latitude & Longitude
        const apiForLatLong: string = `https://api.openweathermap.org/geo/1.0/direct?q=${searchQuery}&appid=${apiKey}&units=metric`;

        const response1 = await fetch(apiForLatLong, {
          method: "GET",
          headers: {},
        });
        const apiData1 = await response1.json();

        let cordinateP = {
          name: apiData1[0].name,
          country: apiData1[0].country,
          lat: apiData1[0].lat,
          lon: apiData1[0].lon,
        };

        // Find Weather Details
        const apiForWeatherDetails = `https://api.openweathermap.org/data/2.5/onecall?exclude=alerts,minutely,hourly&lat=${cordinateP.lat}&lon=${cordinateP.lon}&appid=${apiKey}`;

        const response2 = await fetch(apiForWeatherDetails, {
          method: "GET",
          headers: {},
        });
        const apiData2 = await response2.json();
        console.log(apiData2);

        let data = apiData2.current;
        let tempData = {
          current: {
            desc: data.weather[0].description,
            sunrise: data.sunrise,
            sunset: data.sunset,
            temp: data.temp,
            windStatus: data.wind_speed,
            humidity: data.humidity,
            visibility: data.visibility,
            uvi: data.uvi,
            dt: data.dt,
          },
          daily: range(0, 7).map((i) => apiData2.daily[i].temp.day),
        };

        let dailyCelsius = range(0, 7).map(
          (i) => `${kelvinToC(tempData.daily[i]).toFixed(2)}°C`
        );

        let resultData = { cordinateP, tempData, dailyCelsius };

        return Promise.resolve(resultData);
      } catch (error) {
        throw new Error(`Some error occured: ${error}`);
      }
    };

    asyncWeatherDetails().then((result) => {
      setCordPlace(result.cordinateP);
      setWeather(result.tempData);
      setTemp(result.dailyCelsius);
    });
  };

  // Key-down event when you search something after pressing Enter
  const handleSearchbar = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      const target = e.target as HTMLInputElement;
      let searchQuery: string = target.value ? target.value : "Kathmandu";
      findWeatherDetails(searchQuery);
    }
  };

  let celsiusRange = range(0, 7).map(
    (i) => `${kelvinToC(Number(weather.daily[i])).toFixed(2)}°C`
  );

  let fahrenheitRange = range(0, 7).map(
    (i) => `${kelvinToF(Number(weather.daily[i])).toFixed(2)}°F`
  );

  const [temp, setTemp] = React.useState<string[]>(celsiusRange);
  const [circleC, setCircleC] = React.useState<circleC>({
    bg: "active",
    color: "white",
  });
  const [circleF, setCircleF] = React.useState<circleF>({
    bg: "gray.300",
    color: "black",
  });

  const toCelsius = (): void => {
    setTemp(celsiusRange);
    setCircleC({ bg: "active", color: "white" });
    setCircleF({ bg: "gray.300", color: "black" });
  };

  const toFahrenheit = (): void => {
    setTemp(fahrenheitRange);
    setCircleC({ bg: "gray.300", color: "black" });
    setCircleF({ bg: "active", color: "white" });
  };

  return (
    <ChakraProvider theme={Theme}>
      <Grid
        h="100vh"
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(11, 1fr)"
      >
        <GridItem colSpan={3} bg="white">
          <SearchbarFlex handleSearchbar={handleSearchbar} />
          <GeneralInfoFlex
            cloudy={cloudy}
            kelvinToC={kelvinToC}
            weather={weather}
            getTime={getTime}
          />
          <CountryInfoFlex
            cloudy={cloudy}
            rainny={rainny}
            location={location}
            weather={weather}
            cordinateP={cordinateP}
          />
        </GridItem>
        <GridItem colSpan={8} bg="customGray1">
          <AvatarFlex
            circleC={circleC}
            toCelsius={toCelsius}
            circleF={circleF}
            toFahrenheit={toFahrenheit}
          />
          <Stack spacing={2} gap={2.5} px={5}>
            <Flex>
              <WeeklyFlex day="Mon" img={cloudy} temp={temp[1]} />
              <WeeklyFlex day="Tue" img={sunny} temp={temp[2]} />
              <WeeklyFlex day="Wed" img={rainny} temp={temp[3]} />
              <WeeklyFlex day="Thu" img={rainny} temp={temp[4]} />
              <WeeklyFlex day="Fri" img={cloudy} temp={temp[5]} />
              <WeeklyFlex day="Sat" img={rainny} temp={temp[6]} />
              <WeeklyFlex day="Sun" img={cloudy} temp={temp[0]} />
            </Flex>
          </Stack>

          <Flex w="100%" px="6" pt="3" pb="2">
            <Text textStyle="grayLg">Today's Highlights</Text>
          </Flex>

          <SimpleGrid columns={[2, null, 3]} gap={5} px={5}>
            <SunCondGrid
              sunrise={sunrise}
              sunset={sunset}
              time={getTime}
              weather={weather}
            />
            <TempCountryGrid
              temprature={temprature}
              cord={cordinateP}
              temp={kelvinToC(weather.current.temp).toFixed(2).toString()}
              location={location}
            />
            <WeatherCondGrid weather={weather} />
            <HumidityGrid weather={weather} />
            <VisibilityGrid weather={weather} />
            <UviGrid weather={weather} />
          </SimpleGrid>
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
}

export default App;
