
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'badge', component: () => import('pages/Badge.vue') },
      { path: 'map', component: () => import('pages/Map.vue') },
      { path: 'spellendatabank', component: () => import('pages/Databank.vue')},
      { path: 'databankspel', component: () => import('pages/DatabankSpel.vue')}
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
