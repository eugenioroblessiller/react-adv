import { lazy, LazyExoticComponent } from 'react';
import { ShoppingPage } from '../02-components-patterns/pages/ShoppingPage';

import { NoLazy } from './../01-lazyload/pages/NoLazy';

type JSXComponent = () => JSX.Element
interface Route {
    path: string,
    to: string,
    Component: LazyExoticComponent<JSXComponent> | JSXComponent,
    name: string
}

const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout"*/'../01-lazyload/layout/LazyLayout'))

export const routes: Route[] = [
    { path: '/shopping', to: '/shopping', Component: ShoppingPage, name: 'Shopping' },
    { path: '/lazyload/*', to: '/lazyload/', Component: LazyLayout, name: 'LazyLayout' },
    { path: 'no-lazy', to: '/no-lazy', Component: NoLazy, name: 'No Lazy' }
]