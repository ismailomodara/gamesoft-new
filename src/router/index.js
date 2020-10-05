import Vue from "vue";
import VueRouter from "vue-router";

const Home = () => import("../pages/index.vue");

const AdminLogin = () => import("../pages/admin/login");
const AdminDashboard = () => import("../pages/admin/dashboard");

const AdminCategories = () => import ("../pages/admin/categories/index")

const Users = () => import("../pages/admin/users/index");
const UsersBase = () => import("../pages/admin/users/base");
const User = () => import("../pages/admin/users/id");

const AllTransactions = () => import("../pages/admin/transactions/index")
const AllPayments = () => import("../pages/admin/payments/index")

const UserLogin = () => import("../pages/user/login");
const UserDashboard = () => import("../pages/user/dashboard");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      guest: true
    }
  },
  {
    path: "/admin/login",
    name: "admin.login",
    component: AdminLogin,
    meta: {
      guest: true
    }
  },
  {
    path: "/admin/dashboard",
    name: "admin.dashboard",
    component: AdminDashboard,
    meta: {
      requiresAuth: true,
      layout: 'admin'
    }
  },
  {
    path: "/admin/categories",
    name: "admin.categories",
    component: AdminCategories,
    meta: {
      requiresAuth: true,
      layout: 'admin'
    }
  },
  {
    path: "/admin/users",
    name: "admin.users",
    component: Users,
    meta: {
      requiresAuth: true,
      layout: 'admin'
    }
  },
  {
    path: "/admin/users/:id/",
    component: UsersBase,
    children: [
      {
        path: "",
        name: "admin.users-user",
        component: User,
        meta: {
          requiresAuth: true,
          layout: 'admin'
        }
      }
    ]
  },
  {
    path: "/admin/transactions",
    name: "admin.transactions",
    component: AllTransactions,
    meta: {
      requiresAuth: true,
      layout: 'admin'
    }
  },
  {
    path: "/admin/payments",
    name: "admin.payments",
    component: AllPayments,
    meta: {
      requiresAuth: true,
      layout: 'admin'
    }
  },
  {
    path: "/user/login",
    name: "user.login",
    component: UserLogin,
    meta: {
      guest: true
    }
  },
  {
    path: "/user/dashboard",
    name: "user.dashboard",
    component: UserDashboard,
    meta: {
      requiresAuth: true,
      layout: 'user'
    }
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
