import { lazy } from "react";

export const GlobalRoutes = [
    {
        path: "/",
        exact: true,
        component: lazy(() => import("../views/home/home")),
    },
];
