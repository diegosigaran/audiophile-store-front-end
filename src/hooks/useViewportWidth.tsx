import useWindowSize from "./useWindowSize.tsx";
import {ViewportBreakpoints} from "../assets/data/constants/viewport.ts";
import { useReducer, useEffect } from "react";

// TODO: I should specify a type here once I get some more typescript experience
function reducer(state : any, action : any) {

    switch (action.type) {

        case "mobile":
            return { isDesktop: false, isMobile: true, isTablet: false };

        case "tablet":
            return { isDesktop: false, isMobile: false, isTablet: true };

        case "desktop":
            return { isDesktop: true, isMobile: false, isTablet: false };

        default:
            throw new Error(`Unknown action type ${action.type}`);

    }

}

const useViewportWidth = () => {

    const windowSizeObj = useWindowSize();

    const [state, dispatch] = useReducer(reducer, { isDesktop: false, isMobile: false, isTablet: false } );

    useEffect(() => {

        if(windowSizeObj.width < ViewportBreakpoints.mobile) {
            dispatch({ type: "mobile" })
        } else if(windowSizeObj.width > ViewportBreakpoints.mobile && windowSizeObj.width < ViewportBreakpoints.desktop) {
            dispatch({ type: "tablet" })
        } else {
            dispatch({ type: "desktop" })
        }

    }, [windowSizeObj.width]);

    // TODO: Add typing here:
    return { isDesktopViewport: state.isDesktop, isTabletViewport: state.isTablet, isMobileViewport: state.isMobile }

}

export default useViewportWidth;