import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Forecast from './pages/forecast/Forecast'

const routes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/forecast" element={<Forecast/>} />
            <Route path="*" element={<Home/>} />
        </Routes>
    )
}

export default routes