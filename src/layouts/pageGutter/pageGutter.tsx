import styles from './pageGutter.module.scss';
import type {CSSProperties, ReactNode} from "react";

interface PageGutterProps {
    children: ReactNode;
    inlineStyle?: CSSProperties;
}

// TODO: Need better typing on this
const PageGutter: React.FC<PageGutterProps>  = ( {children, inlineStyle}) => {

    return (
        <div className={`${styles['page-gutter']}`} style={inlineStyle}>
            {children}
        </div>
    )

}
export default PageGutter;