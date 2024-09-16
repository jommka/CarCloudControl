import {ADMIN_ROUTE, CONNECTIONS_ROUTE, ERROR_ROUTE, MAIN_ROUTE, SESSIONS_ROUTE} from "./utils/consts";
import Admin from "./pages/Admin";
import Error from "./pages/Error";
import Devices from "./pages/Devices";
import Sessions from "./pages/Sessions";
import Connections from "./pages/Connections";


export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
]

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: Devices,
    },
    {
        path: SESSIONS_ROUTE,
        Component: Sessions
    },
    {
        path: CONNECTIONS_ROUTE,
        Component: Connections
    },
    {
        path: ERROR_ROUTE,
        Component: Error
    },
]