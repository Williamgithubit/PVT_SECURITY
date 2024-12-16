import Home from "../Components/Home";
import Hero from "../Components/Hero";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/hero',
        element: <Hero />
    }


])

const Routes = () => {
    return(
        <RouterProvider router={router} />
    )
}

export default Routes;