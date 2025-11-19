const url = window.location.href;

const getUrl = () => {

    if(url.includes("localhost")) {

        return "";

    }

}

export { getUrl };