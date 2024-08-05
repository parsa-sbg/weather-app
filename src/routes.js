import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Forecast from './pages/forecast/Forecast'

const routes = (weatherData) => {
    return (
        <Routes>
            <Route path="/" element={<Home {...weatherData} />} />
            <Route path="/forecast" element={<Forecast/>} />
        </Routes>
    )
}

export default routes