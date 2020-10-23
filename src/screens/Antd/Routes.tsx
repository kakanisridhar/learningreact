import React, { Fragment, lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router';

type Routes = {
  exact?: boolean;
  path?: string | string[];
  guard?: any;
  layout?: any;
  component?: any;
  routes?: Routes;
}[];

export const renderRoutes = (routes: Routes = []) => (
  <Suspense fallback={<h2>Loading</h2>}>
    <Switch>
      {routes.map((route, i) => {
        const Guard = route.guard || Fragment;
        const Layout = route.layout || Fragment;
        const Component = route.component;

        return (
          <Route
            key={i}
            path={route.path}
            exact={route.exact}
            render={props => (
              <Guard>
                <Layout>
                  {route.routes ? (
                    renderRoutes(route.routes)
                  ) : (
                    <Component {...props} />
                  )}
                </Layout>
              </Guard>
            )}
          />
        );
      })}
    </Switch>
  </Suspense>
);

const routes: Routes = [
  {
    exact: true,
    path: '/sidenavdemo',
    component: lazy(() => import('./features/SideNavDemo/SideNavDemo'))
  },
  {
    exact: true,
    path: '/inputs',
    component: lazy(() => import('./features/Inputs/Inputs'))
  },
  {
    exact: true,
    path: '/designer',
    component: lazy(() => import('./features/ScreenDesigner/ScreenDesigner'))
  },
  {
    exact: true,
    path: '/',
    component: lazy(() => import('./features/Welcome/Welcome'))
  },
  {
    component: () => <Redirect to={'/'} />
  }
];

export default routes;
