import './styles/styles.scss';
import { RouterProvider } from 'react-router';
import router from './routes/routes.tsx';
import Header from './layouts/header/header.tsx';
import SiteGutter from './layouts/siteGutter/siteGutter.tsx';
import Footer from './layouts/footer/footer.tsx';

function App() {

  return (
    <>
        <SiteGutter>
            <Header/>
            <RouterProvider router={router} />
            <Footer/>
        </SiteGutter>
    </>
  )

}

export default App
