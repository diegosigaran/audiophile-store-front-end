import './styles/styles.scss';
import { useEffect } from "react";
import { RouterProvider } from 'react-router';
import routes from "./routes/routes.tsx";

function App() {


  return (
    <>
        <RouterProvider router={routes} />
    </>
  )

}

export default App
