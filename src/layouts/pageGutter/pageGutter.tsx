import styles from './pageGutter.module.scss';

const PageGutter : React.FC< { children: React.ReactNode }>  = ( {children }) => {

    return (
        <div className={`${styles['page-gutter']}`}>
            {children}
        </div>
    )

}

export default PageGutter;