import { BrowserRouter, Routes, Route } from "react-router";
import { AboutUs } from "../pages/AboutUs";
import { AppLayout } from "../layout/App";
import { AuthLayout } from "../layout/Auth";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          {/* <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="logout" element={<Logout />} />*/}
        </Route>
        <Route path="/" element={<AppLayout />}>
          {/* <Route path="" element={<Feed />} />
          <Route path="blog-posts" element={<BlogPost />} /> 
          <Route path="*" element={<NotFound />} /> */}
          <Route path="about-us" element={<AboutUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
