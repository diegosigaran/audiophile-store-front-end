import styles from './pageGutter.module.scss';

// TODO: Need better typing on this
const PageGutter  = ( {children, inlineStyle}) => {

    return (
        <div className={`${styles['page-gutter']}`} style={inlineStyle}>
            {children}
        </div>
    )

}
export default PageGutter;