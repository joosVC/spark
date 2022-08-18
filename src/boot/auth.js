import {LocalStorage} from 'quasar'

export default async ( {router} ) => {
  router.beforeEach((to, from, next) => {
    let loggedIn = LocalStorage.getItem('loggedIn');
    
    if ( !loggedIn && (to.path === '/admin') ) {
      next('/login')
    } else if ( !loggedIn && (to.path === '/backoffice/nieuwe-post') ) {
      next('/login')
    }else {
      next()
    }

  })
}
