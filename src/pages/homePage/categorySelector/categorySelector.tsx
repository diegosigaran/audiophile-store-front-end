import styles from './categorySelector.module.scss';
import CategoryCard from './categoryCard/categoryCard.tsx';
import Headphones from '../../../assets/images/xx99_mark_I_headphones.png';
import Speakers from '../../../assets/images/speaker_category.png';
import Earphones from '../../../assets/images/earphones_category.png';
import { useEffect } from 'react';
import PageGutter from "../../../layouts/pageGutter/pageGutter.tsx";

const catalogData = [
    { name: "Headphones", image: Headphones, link: 'headphones' },
    { name: "Speakers", image: Speakers, link: 'speakers' },
    { name: "Earphones", image: Earphones, link: 'earphones' },
]

const CategorySelector = () =>{

    return (

        <div className={`${styles['category-selector-container']}`}>
            <PageGutter>
                <div className={`${styles['category-selector-wrapper']}`}>
                    {
                        catalogData.map((categoryData) => {

                            return (
                                <CategoryCard image={categoryData.image} link={categoryData.link} categoryName={categoryData.name} />
                            )

                        })
                    }
                </div>
            </PageGutter>
        </div>
    )

}

export default CategorySelector;