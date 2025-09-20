import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import Projects from "../pages/Projects/Projects";
import Company from "../pages/Company/Company";
import Contact from "../pages/Contact/Contact";
import Training from "../pages/Training/Training";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/products",
        Component: Products,
      },
      {
        path: "/project",
        Component: Projects,
      },
      {
        path: "/company",
        Component: Company,
      },
      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: "/training",
        Component: Training,
      },
    ],
  },
]);
