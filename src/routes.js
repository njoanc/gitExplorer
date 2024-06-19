import { lazy } from "react";
import Home from "./components/Home";

const AboutUs = lazy(() => import("./components/About"));
const Users = lazy(() => import("./components/Users"));
const AuthProfile = lazy(() => import("./components/AuthProfile"));
const Login = lazy(() => import("./components/Login"));
const NotFound = lazy(() => import("./components/NotFound"));
const UserProfile = lazy(() => import("./components/UserProfile"));
const SearchUser = lazy(() => import("./components/SearchUser"));
const RepoDetail = lazy(() => import("./components/RepoDetail"));

export const appRoutes = [
  {
    path: "/",
    component: Home,
    requiresAuth: false,
  },
  {
    path: "/login",
    component: Login,
    requiresAuth: false,
  },
  {
    path: "/users",
    component: Users,
    requiresAuth: false,
  },
  {
    path: "/authProfile",
    component: AuthProfile,
    requiresAuth: true,
  },
  {
    path: "/about",
    component: AboutUs,
    requiresAuth: false,
  },
  {
    path: "/search",
    component: SearchUser,
    requiresAuth: false,
  },
  {
    path: "/users/user/:username",
    component: UserProfile,
    requiresAuth: false,
  },
  {
    path: "/repoDetail/:name/:username",
    component: RepoDetail,
    requiresAuth: false,
  },
  {
    path: "*",
    component: NotFound,
    requiresAuth: false,
  },
];
