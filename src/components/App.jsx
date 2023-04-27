import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./SharedLayout";

const About = lazy(() => import("../pages/About"));
const Home = lazy(() => import("../pages/Home"));
const NotFound = lazy(()=> import("../pages/NotFound"))
const ProductDetails = lazy(() => import("../pages/ProductDetails"));
const Products = lazy(() => import("../pages/Products"));
const Mission = lazy(() => import("./Mission"));
const Team = lazy(() => import("./Team"));
const Reviews = lazy(() => import("./Reviews"));


export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        {/* The * character in the path query literally indicates that this route can match any URL value. Therefore, if none of the preceding <Route>s are suitable, the latter will accurately display the user's page with some message that the route he took does not exist. */}
        <Route path="*" element={<NotFound />} />
        <Route path="about" element={<About />}>
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<ProductDetails />} />
      </Route>
    </Routes>
  );
};

