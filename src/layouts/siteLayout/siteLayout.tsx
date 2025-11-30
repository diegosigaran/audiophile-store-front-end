import styles from './siteLayout.module.scss'
import { Outlet } from 'react-router';
import router from '../../routes/routes.tsx'
import Header from '../header/header.tsx';
import SiteGutter from '../siteGutter/siteGutter.tsx';
import Footer from '../footer/footer.tsx';

const SiteLayout = () => {

    return (

        <div className={`${styles['site-layout-container']}`}>
            <SiteGutter>
                <Header/>
                <main>
                    <Outlet />
                </main>
                <Footer/>
            </SiteGutter>
        </div>

    )

}

export default SiteLayout;