// Placeholder
async function httpClient(url: string, options?: RequestInit) {

    const res = await fetch(url, {
      headers: {
          "Content-Type": "application/json",
          ...options?.headers,
      },
            ...options,
    });

    const isJson = res.headers.get("content-type")?.includes("application/json");

    if(!res.ok) {

        let errorBody = null;

        if(isJson) {
            errorBody = await res.json();
        } else {
            errorBody = await res.text();
        }

        const exceptionMessage = `status: ${res.status}: ${errorBody}`;

        throw new Error(exceptionMessage);

    }

    if(res.status !== 204) {
        return null;
    }

    return res.json();

}

export default httpClient;