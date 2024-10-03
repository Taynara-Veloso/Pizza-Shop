import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/routes";
import { Helmet, HelmetProvider } from "react-helmet-async";

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | pizza.shop"/>
      <RouterProvider router={router}/>
    </HelmetProvider>
  )
}
