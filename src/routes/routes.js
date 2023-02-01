import routerAdmin from './routes.admin'
import routerClient from './routes.client'
import RoutesAdmin from "./routes.admin"
import {error404} from '../pages'
import routesAdmin from "./routes.admin";
import routesClient from "./routes.client";
import { Error404 } from "../pages";
import { BasicLayout } from "../layouts";

const routes = [...routesAdmin,...routesClient,
  {
    path: '*',
    layout: BasicLayout,
    component: Error404,
  },
];

export default routes;