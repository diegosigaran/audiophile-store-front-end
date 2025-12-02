// Placeholder
import HomePage from "../pages/homePage/homePage.tsx";
import CheckoutPage from "../pages/checkoutPage/checkoutPage.tsx";
import ProductPage from "../pages/productPage/productPage.tsx";
import ErrorPage from "../pages/Error404Page/Error404Page.tsx";
import UserProfilePage from "../pages/userProfilePage/userProfilePage.tsx";
import InventoryPage from "../pages/corporate/inventoryPage/inventoryPage.tsx";
import DashboardPage from "../pages/corporate/dashboardPage/dashboardPage.tsx";
import CouponPage from "../pages/corporate/couponPage/couponPage.tsx";
import OrdersPage from "../pages/corporate/orders/ordersPage.tsx";
import SiteLayout from "../layouts/siteLayout/siteLayout.tsx";

import {createBrowserRouter, Navigate} from "react-router";

const redirectList = [
    { from: "/speakers", to: "/products/speakers" },
    { from: "/headphones", to: "/products/headphones" },
    { from: "/earphones", to: "/products/earphones" },
]

const redirectRoutes = redirectList.map(({from, to}) => ({
    path: from,
    element: <Navigate to={to} />,
}));

const router = createBrowserRouter([
    {
        path: "/",
        element: <SiteLayout/>,
        children: [
            ...redirectRoutes,
            {
                index: true,
                path: "/home",
                element: <HomePage />
            },
            {
                path: "/checkout",
                element: <CheckoutPage/>
            },
            {
                path: "/product",
                element: <ProductPage />
            },
            {
                path: "/userProfilePage",
                element: <UserProfilePage />
            },
            {
                path: "/corporate",
                children: [
                    { path: "dashboard", element: <DashboardPage /> },
                    { path: "inventory", element: <InventoryPage/> },
                    { path: "coupons", element: <CouponPage /> },
                    { path: "orders", element: <OrdersPage/> }
                ]
            },
            {
                path: "*",
                element: <ErrorPage/>
            }
        ]
    },

])


export default router;