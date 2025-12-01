// Placeholder
import styles from './header.module.scss';
// import { useState } from 'react'; // Will eventually need to track if someone is logged in
import PageGutter from "../pageGutter/pageGutter.tsx";
import { useState } from 'react';
// import { Link } from 'react-router';
import { ViewportType } from "../../assets/data/constants/viewport.ts";
import MenuIcon from "../../assets/icons/menu.svg";
import { mdiMenu } from "@mdi/js";
import AudiophileLogo from "../../assets/images/audiophile_logo.png";
import Icon from '@mdi/react';
import { mdiAccount } from "@mdi/js";
import { mdiCartOutline } from "@mdi/js";
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
                                    <button className={`${styles['non-desktop-menu']}`}> <Icon path={mdiMenu} color={'white'} size={1} /> </button>
                                }
                                <div className={`${styles['header-logo-container']} logo`}> <img src={AudiophileLogo} alt={"Welcome to Audiophile"} /> </div>
                            </div>
                            {
                                widthType == ViewportType.desktop &&
                                <nav className={`${styles['desktop-header-nav']}`}>
                                    {/*<Link to="/home" > Home </Link>*/}
                                    <div> HOME </div>
                                    <div> HEADPHONES </div>
                                    <div> SPEAKERS </div>
                                    <div> EARPHONES </div>
                                </nav>
                            }
                            <div className={`${styles['header-options-container']}`}>
                                <button className={`${styles['view-cart-btn']} logo`}> <Icon path={mdiCartOutline} color={'white'} size={1} /> </button>
                                { widthType == ViewportType.desktop && <button className={`${styles['view-cart-btn']} logo`}> <Icon path={mdiAccount} color={'white'} size={1} /> </button> }
                            </div>

                        </div>
                    </PageGutter>
            </div>
        </>
    )

}

export default Header;