import { lazy, type PropsWithChildren } from "react";
import { createBrowserRouter, RouterProvider as ReactRouterProvider } from "react-router";
import { ErrorPage } from "@/pages/error-page";
import { CheckAuthProvider } from "./CheckAuthProvider";
import { ROUTES } from "@/core/config/routes";

const Layout = lazy(() => import("@/pages/layout"));
const NotFoundPage = lazy(() => import("@/pages/not-found-page"));
const LoginPage = lazy(() => import("@/pages/login-page"));

const router = createBrowserRouter([
    {
        path: "*",
        element: <NotFoundPage />
    },
    {
        path: ROUTES.LOGIN,
        element: (
            <CheckAuthProvider>
                <LoginPage />
            </CheckAuthProvider>
        )
    },
    {
        path: ROUTES.INDEX,
        element: (
            <CheckAuthProvider>
                <Layout />
            </CheckAuthProvider>
        ),
        errorElement: <ErrorPage />
    }
]);

export const RouterProvider = ({ children }: PropsWithChildren) => (
    <>
        <ReactRouterProvider router={router} />
        {children}
    </>
);
