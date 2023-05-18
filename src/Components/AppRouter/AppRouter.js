import { Route, Routes } from "react-router-dom"
import { Home } from "../../Pages/Home"
import { AboutUs } from "../../Pages/AboutUs"
import { SinisterCorridorsGame } from "../game1/SinisterCorridorsGame"

export const AppRouter = () => {
    return (
        <>
        {/* Creates the routes for the links in the NavBar Component */}
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/sinister-corridors" element={<SinisterCorridorsGame />} />
        </Routes>
        </>
    )
}