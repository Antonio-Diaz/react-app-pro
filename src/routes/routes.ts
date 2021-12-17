import React, { lazy } from "react";
import NoLazy from "../01-lazyload/pages/NoLazy";

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: React.LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string;
}

const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout"*/ "../01-lazyload/layout/LazyLayout"));

export const routes: Route[] = [
  {
    to: "/LazyLayout/",
    path: "/LazyLayout/*",
    Component: LazyLayout,
    name: "LazyLayout",
  },
  {
    to: "/NoLazyLayout",
    path: "NoLazyLayout",
    Component: NoLazy,
    name: "NoLazyLayout",
  },
];
