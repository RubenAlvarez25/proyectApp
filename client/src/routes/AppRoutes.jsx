import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavbarComponent } from "../components/navbarComponent/NavbarComponent";
import { HomePageComponent } from "../pages/homePage/HomePageComponent";
import { NewsArchivedPageComponent } from "../pages/newsArchivedPage/NewsArchivedPageComponent";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <NavbarComponent />

      <Routes>
        <Route path="/" element={<HomePageComponent />} />
        <Route path="/archived" element={<NewsArchivedPageComponent />} />
      </Routes>
    </BrowserRouter>
  );
};
