import styles from './siteLayout.module.scss'
import { RouterProvider } from 'react-router';
import router from '../../routes/routes.tsx'
import Header from '../header/header.tsx';
import SiteGutter from '../siteGutter/siteGutter.tsx';
import Footer from '../footer/footer.tsx';

const SiteLayout = () => {

    return (

        <div className={`${styles['site-layout-container']}`}>
            <SiteGutter>
                <Header/>
                <RouterProvider router={router} />
                <Footer/>
            </SiteGutter>
        </div>

    )

}

export default SiteLayout;