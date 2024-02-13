import React, { lazy } from "react";
const Home = lazy(() => import("Pages/Home"))
const About = lazy(() => import("Pages/About"))
const Vehicles = lazy(() => import("Pages/Vehicles"))
const Testimonials = lazy(() => import("Pages/Testimonials"))
const Contact = lazy(() => import("Pages/Contact"))
const CarPage = lazy(() => import("Pages/CarPage"))
const NotFound = lazy(() => import("Pages/NotFound"))

const privateRoutes = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/vehicles",
        element: <Vehicles />
    },
    {
        path: "/testimonials",
        element: <Testimonials />
    },
    {
        path: "/contact",
        element: <Contact />
    },
    {
        path: "/carpage/:id",
        element: <CarPage />
    },
    {
        path: "*",
        element: <NotFound />
    }
]

export default privateRoutes;