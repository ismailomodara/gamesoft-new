import Vue from "vue";
import VueRouter from "vue-router";

const Home = () => import("../pages/index.vue");

const AdminLogin = () => import("../pages/admin/login");
const AdminDashboard = () => import("../pages/admin/dashboard");

const AdminCategories = () => import ("../pages/admin/categories/index");
const AdminCategoriesBase = () => import ("../pages/admin/categories/base");
const AdminCategory = () => import ("../pages/admin/categories/id");
const AdminCategoryStage = () => import ("../pages/admin/categories/stage");

const AdminContests = () => import("../pages/admin/contests/index");
const AdminContestsAdd = () => import("../pages/admin/contests/add");
const AdminContestsBase = () => import("../pages/admin/contests/base");
const AdminContest = () => import("../pages/admin/contests/id");

const Users = () => import("../pages/admin/users/index");
const UsersBase = () => import("../pages/admin/users/base");
const AdminUser = () => import("../pages/admin/users/id");

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
    path: "/admin/contests",
    name: "admin.contests",
    component: AdminContests,
    meta: {
      requiresAuth: true,
      layout: 'admin'
    }
  },
  {
    path: "/admin/contests/add",
    name: "admin.contests-add",
    component: AdminContestsAdd,
    meta: {
      requiresAuth: true,
      layout: 'admin'
    }
  },
  {
    path: "/admin/contests/:id/",
    component: AdminContestsBase,
    children: [
      {
        path: "",
        name: "admin.contests-contest",
        component: AdminContest,
        meta: {
          requiresAuth: true,
          layout: 'admin'
        }
      }
    ]
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
    path: "/admin/categories/:id/",
    component: AdminCategoriesBase,
    children: [
      {
        path: "",
        name: "admin.categories-category",
        component: AdminCategory,
        meta: {
          requiresAuth: true,
          layout: 'admin'
        }
      },
      {
        path: "stage/:stageId",
        name: "admin.categories-category-stage",
        component: AdminCategoryStage,
        meta: {
          requiresAuth: true,
          layout: 'admin'
        }
      }
    ]
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
        component: AdminUser,
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
