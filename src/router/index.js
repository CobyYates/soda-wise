import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/product/:id",
    name: "Product",
    // children: [
    //   {
    //     path: "/add-new",
    //     component: () =>
    //       import(/* webpackChunkName: "add-new" */ "../views/AddNew.vue")
    //   }
    // ],
    component: () =>
      import(/* webpackChunkName: "product" */ "../views/Product.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue")
  },
  {
    path: "/add-new",
    name: "AddNew",
    component: () =>
      import(/* webpackChunkName: "add-new" */ "../views/AddNew.vue")
  },
  {
    path: "/edit-product/:id",
    name: "EditProduct",
    component: () =>
      import(/* webpackChunkName: "edit-product" */ "../views/EditProduct.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
