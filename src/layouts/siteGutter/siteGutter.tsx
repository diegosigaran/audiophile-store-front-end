import styles from './siteGutter.module.scss';

const siteGutter : React.FC<{ children : React.ReactNode }> = ({ children }) => {

    return (
        <div className={`${styles['site-gutter']}`}>
            { children }
        </div>
    )

}

export default siteGutter;
