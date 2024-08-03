import { useContext } from "react";
import { WeatherContext } from "../contexts/weatherContext";

const useWeather = () => useContext(WeatherContext)

export {useWeather}
