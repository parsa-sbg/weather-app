import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import AllCities from "./pages/allCities/AllCities";

const routes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/all" element={<AllCities/>} />
        </Routes>
    )
}

export default routes