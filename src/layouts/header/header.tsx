// Placeholder
import styles from './header.module.scss';
// import { useState } from 'react'; // Will eventually need to track if someone is logged in
import PageGutter from "../pageGutter/pageGutter.tsx";
// import { useState } from 'react';
// import { Link } from 'react-router';
import { ViewportType } from "../../assets/data/constants/viewport.ts";
import MenuIcon from "../../assets/icons/menu.svg";
import useViewportWidth from "../../hooks/useViewportWidth.tsx";

const Header = () => {

    const widthType = useViewportWidth();

    return (
        <>
            <div className={`${styles['header-wrapper']}`}>
                    <PageGutter>
                        <div className={`${styles['header-container']}`}>
                            <div className={`${styles['header-container--left']}`}>
                                {
                                    widthType != ViewportType.desktop &&
                                    <button className={`${styles['non-desktop-menu']}`}> <img src={MenuIcon}/> </button>
                                }
                                <div className={`${styles['header-logo-container']} logo`}> Logo </div>
                            </div>
                            {
                                widthType == ViewportType.desktop &&
                                <nav className={`${styles['header-nav']}`}>
                                    {/*<Link to="/home" > Home </Link>*/}
                                </nav>
                            }
                            <button className={`${styles['shopping-cart-container']} logo`}></button>
                        </div>
                    </PageGutter>
            </div>
        </>
    )

}

export default Header;