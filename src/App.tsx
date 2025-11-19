import './styles/styles.scss';
import SiteLayout from "./layouts/siteLayout/siteLayout.tsx";
import { useEffect } from "react";

function App() {

    useEffect(() => {

        const fetchData = async () => {

            const response = await fetch("http://localhost:5226/weatherforecast", {mode: "cors"});

            console.log(response);

        }

        fetchData();


        console.log("here");

    }, [])



  return (
    <>
      <SiteLayout />
    </>
  )

}

export default App
