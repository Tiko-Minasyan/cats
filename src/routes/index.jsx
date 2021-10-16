import { Redirect } from "react-router-dom";

import MainPage from "../pages/MainPage";
import NotFound from "../pages/NotFound";

const AppRoutes = [
  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/cats" />,
  },
  {
    path: "/cats",
    exact: true,
    component: () => <MainPage />,
  },
  {
    path: "/",
    exact: false,
    component: () => <NotFound />,
  },
];

export default AppRoutes;
