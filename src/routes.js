import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import AllCities from "./pages/allCities/AllCities";

const routes = (weatherData) => {
    return (
        <Routes>
            <Route path="/" element={<Home {...weatherData} />} />
            <Route path="/all" element={<AllCities/>} />
        </Routes>
    )
}

export default routes