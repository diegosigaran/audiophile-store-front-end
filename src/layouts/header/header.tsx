// Placeholder
import styles from './header.module.scss';
// import { useState } from 'react'; // Will eventually need to track if someone is logged in
import PageGutter from "../pageGutter/pageGutter.tsx";
import { useState } from 'react';

const Header = () => {



    return (
        <>
            <PageGutter>
                <div className={`${styles['header-container']}`}>

                    <div className={`${styles['header-logo-container']} logo`}> Logo </div>
                    <nav className={`${styles['header-nav']}`}> Links </nav>
                    <button className={`${styles['shopping-cart-container']} logo`}></button>
                </div>
            </PageGutter>
        </>
    )

}

export default Header;