import styles from './categoryCard.module.scss'
import { useState, useRef, useEffect } from 'react';

const CategoryCard = ({ image, categoryName, link }) =>{

    const cardImage = useRef<HTMLImageElement | null>(null);
    const card = useRef<HTMLDivElement | null>(null);
    const [shopButtonHovered, setShopButtonHovered] = useState(false);

    return (
        <div ref={card} className={`${styles['category-card-container']}`}>
            <div className={`${styles['category-card-content']}`}>
                <img ref={cardImage} src={image} alt={categoryName} />
                <div className={`${styles['category-card-text']}`}>
                    <div className={`${styles['category-name']}`}> { categoryName} </div>
                    <div
                        className={`
                            ${styles['shop-link']} 
                            ${ shopButtonHovered ? styles['rotate-180-clockwise-selector'] : styles['rotate-180-clockwise-reverse-selector'] }`}
                        onMouseEnter={() => setShopButtonHovered(!shopButtonHovered)}
                        onMouseLeave={() => setShopButtonHovered(!shopButtonHovered)}
                    >
                        SHOP
                    </div>
                </div>
            </div>
            <div className={`${styles['category-card-pseudo']}`}></div>
        </div>
    )

}

export default CategoryCard;