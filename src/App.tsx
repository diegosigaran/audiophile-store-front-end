import './styles/styles.scss';
import { RouterProvider } from 'react-router';
import router from './routes/routes.tsx';
import Header from './layouts/header/header.tsx';
import SiteGutter from './layouts/siteGutter/siteGutter.tsx';
import Footer from './layouts/footer/footer.tsx';
import SiteLayout from "./layouts/siteLayout/siteLayout.tsx";

function App() {

  return (
    <>
      <SiteLayout />
    </>
  )

}

export default App
