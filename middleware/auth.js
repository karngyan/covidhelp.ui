export default function({app, route, redirect}) {
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
