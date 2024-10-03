import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/routes";

export function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}
