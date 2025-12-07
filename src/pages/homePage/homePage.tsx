import HeroSection from "./heroSection/heroSection.tsx";
import CategorySelector from "./categorySelector/categorySelector.tsx";
import styles from "./homePage.module.scss";
// Placeholder
const HomePage = () => {

    return (
        <div className={`${styles['home-page-container']}`}>
            <HeroSection />
            <CategorySelector />
            <div> Home Page  </div>
        </div>
    )

}

export default HomePage;