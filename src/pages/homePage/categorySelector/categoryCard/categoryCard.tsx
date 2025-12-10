import styles from './categoryCard.module.scss'
import { useRef, useEffect } from 'react';

const CategoryCard = ({ image, categoryName, link }) =>{

    const cardImage = useRef<HTMLImageElement | null>(null);
    const card = useRef<HTMLDivElement | null>(null);

    useEffect(() => {

        if(cardImage.current && card.current) {

            // const cardHeight = card.current.offsetHeight;

            // cardImage.current.style.height = ( cardHeight / 2 )+ 'px';

        }


    }, [])

    return (
        <div ref={card} className={`${styles['category-card-container']}`}>
            <div className={`${styles['category-card-content']}`}>
                <img ref={cardImage} src={image} alt={categoryName} />
                <div className={`${styles['category-card-text']}`}>
                    <div> { categoryName} </div>
                    <div> SHOP </div>
                </div>

            </div>
            <div className={`${styles['category-card-pseudo']}`}></div>

        </div>
    )

}

export default CategoryCard;