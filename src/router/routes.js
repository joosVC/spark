const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Index.vue") },
      { path: "badge", component: () => import("pages/Badge.vue") },
      { path: "spark", component: () => import("pages/OverOns.vue") },
      { path: "maak", component: () => import("pages/acties/MaaktDaMee.vue") },
      { path: "spellen", component: () => import("pages/Speldatabank.vue") },
      {
        path: "spellen/spel",
        component: () => import("pages/SpelTemplate.vue"),
      },
      {
        path: "microbit",
        component: () => import("pages/SpelkistMicrobit.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
