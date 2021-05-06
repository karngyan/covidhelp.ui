export default function({app, store, route, redirect, i18n }) {
  if (store.state.locale) {
    console.debug('switching locale to: ', store.state.locale)
    i18n.setLocale(store.state.locale)
  }

  if (app.$fire.auth) {
    const user = app.$fire.auth.currentUser
    if (user) {
      console.debug('[middleware] user logged in')
      if (route.path.includes('/login') || route.path.includes('/logout')) {
        redirect('/dashboard')
      }
    } else {
      console.debug('[middleware] no user here')
      if (route.path.includes('/dashboard')) {
        redirect('/login')
      }
    }
  }
}
