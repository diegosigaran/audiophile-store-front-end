import { http, HttpResponse } from "msw";

const products = [
    { id : 1, name: "Laptop", price: 999 },
    { id : 2, name: "Headphones", price: 199 },
]

export const handlers = [

    http.get("/api/products", () => {
        return HttpResponse.json(products);
    }),

    http.get("/api/products/:id", ({ params }) => {
        const product = products.find((product) => product.id === params.id);
        return HttpResponse.json(product);
    })

]