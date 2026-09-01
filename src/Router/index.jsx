import { BrowserRouter, Routes, Route } from "react-router";
import { AboutUs } from "../pages/AboutUs";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about-us" element={<AboutUs />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
