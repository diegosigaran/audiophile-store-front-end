import styles from './siteLayout.module.scss'
import { Outlet } from 'react-router';
import Header from '../header/header.tsx';
import SiteGutter from '../siteGutter/siteGutter.tsx';
import Footer from '../footer/footer.tsx';

const SiteLayout = () => {

    return (

        <div className={`${styles['site-layout-container']}`}>
                <Header/>
                <main>
                    <Outlet />
                </main>
                <Footer/>
        </div>

    )

}

export default SiteLayout;