import styles from './heroSection.module.scss';
import useViewportWidth from "../../../hooks/useViewportWidth.tsx";
import { ViewportType } from "../../../assets/data/constants/viewport.ts";
import { Link } from "react-router-dom";
import ProductImageNonmobile from "../../../assets/images/Bitmap.png";
// import ProductImageMobile from "../../../assets/images/"
import PageGutter from "../../../layouts/pageGutter/pageGutter.tsx";
import SiteGutter from "../../../layouts/siteGutter/siteGutter.tsx";


const HeroSection = () => {

    return (
            <div className={`${styles['hero-section-container']}`}>
                <PageGutter inlineStyle={{display: "flex", alignItems: "center", overflow: "hidden"}}>
                    {/* It would be cool to be able to dynamically change this via a dashboard */}
                    <div className={`${styles['hero-section-information']}`}>
                        <div className={`${styles['sub-title']}`}> NEW PRODUCT </div>
                        <div className={`${styles['product-title']}`} > XX99 MARK II HEADPHONES </div>
                        <div className={`${styles['product-description']}`}> Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.  </div>
                        <button className={`btn-primary`}> <Link to={"/product/----"}> SEE PRODUCT </Link> </button>
                    </div>
                    <div className={`${styles['hero-section-image']}`}>
                        {/* Do I need a mask? /*/}
                        {/* Can I separate the image from the 'haze' in the background? */}
                        <img src={ProductImageNonmobile} alt={"Product Image"} />
                    </div>
                </PageGutter>
            </div>
    )

}

export default HeroSection;