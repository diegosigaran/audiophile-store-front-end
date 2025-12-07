import styles from './categorySelector.module.scss';
import CategoryCard from './categoryCard/categoryCard.tsx';
import Headphones from '../../../assets/images/xx99_mark_I_headphones.png';
import Speakers from '../../../assets/images/speaker_category.png';
import Earphones from '../../../assets/images/earphones_category.png';
import { useEffect } from 'react';

const catalogData = [
    { name: "Headphones", image: Headphones, link: 'headphones' },
    { name: "Speakers", image: Speakers, link: 'speakers' },
    { name: "Earphones", image: Earphones, link: 'earphones' },
]

const CategorySelector = () =>{

    return (
        <div className={`${styles['category-selector-container']}`}>
            {
                catalogData.map((categoryData) => {

                    return (
                        <CategoryCard image={categoryData.image} link={categoryData.link} categoryName={categoryData.name} />
                    )

                })
            }
        </div>
    )

}

export default CategorySelector;