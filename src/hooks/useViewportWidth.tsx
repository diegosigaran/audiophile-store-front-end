import useWindowSize from "./useWindowSize.tsx";
import {ViewportBreakpoints} from "../assets/data/constants/viewport.ts";

const useViewportWidth = () => {

    const windowSizeObj = useWindowSize();

    if(windowSizeObj.width < ViewportBreakpoints.mobile) {
        return "mobile";
    } else if(windowSizeObj.width > ViewportBreakpoints.mobile && windowSizeObj.width < ViewportBreakpoints.desktop) {
        return "tablet";
    } else {
        return "desktop";
    }

}

export default useViewportWidth;