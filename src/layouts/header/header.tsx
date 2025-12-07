// Placeholder
import styles from './header.module.scss';
// import { useState } from 'react'; // Will eventually need to track if someone is logged in
import SiteGutter from "../siteGutter/siteGutter.tsx";
import { Link } from 'react-router';
import { mdiMenu } from "@mdi/js";
import AudiophileLogo from "../../assets/images/audiophile_logo.png";
import Icon from '@mdi/react';
import { mdiAccount } from "@mdi/js";
import { mdiCartOutline } from "@mdi/js";
import useViewportWidth from "../../hooks/useViewportWidth.tsx";

const Header = () => {

    const { isDesktopViewport } = useViewportWidth();

    return (
        <>

            <div className={`${styles['header-wrapper']}`}>
                    <SiteGutter>
                        <div className={`${styles['header-container']}`}>

                            {/*      Logo & Sidebar Menu Button          */}
                            <div className={`${styles['header-container--left']}`}>
                                {
                                    !isDesktopViewport &&
                                    <button className={`${styles['non-desktop-menu']}`}> <Icon path={mdiMenu} color={'white'} size={1} /> </button>
                                }
                                <div className={`${styles['header-logo-container']} logo`}> <Link to={"/home"}><img src={AudiophileLogo} alt={"Welcome to Audiophile"} />  </Link> </div>
                            </div>

                            {/*    Desktop Nav Links    */}
                            {
                                isDesktopViewport &&
                                <nav className={`${styles['desktop-header-nav']}`}>
                                    <Link to="/home" className={`${'link-underline'}`}> HOME </Link>
                                    <Link to={'/products/headphones'} className={`${'link-underline'}`}> HEADPHONES </Link>
                                    <Link to={'/products/speakers'} className={`${'link-underline'}`}> SPEAKERS </Link>
                                    <Link to={'/products/earphones'} className={`${'link-underline'}`}> EARPHONES </Link>
                                </nav>
                            }

                            {/*     Cart and Probile Buttons         */}
                            <div className={`${styles['header-options-container']}`}>
                                <button className={`${styles['view-cart-btn']} logo`}> <Icon path={mdiCartOutline} color={'white'} size={1} /> </button>
                                { isDesktopViewport && <button className={`${styles['view-cart-btn']} logo`}> <Icon path={mdiAccount} color={'white'} size={1} /> </button> }
                            </div>
                        </div>
                    </SiteGutter>
            </div>
        </>
    )

}

export default Header;