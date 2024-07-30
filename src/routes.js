import { Route, Routes } from "react-router-dom";

const routes = () => {
    return (
        <Routes>
            <Route path="/" element={<div>home</div>} />
            <Route path="/all" element={<div>all cities</div>} />
        </Routes>
    )
}

export default routes