import config from '~/config';

// Layouts
import { HeaderOnly } from '~/layouts';

// Pages
import { Signup } from '~/pages/Signup/signup'
import { Login } from '~/pages/Login/login'
import { Home } from '~/pages/Home/home'
import { Main } from '~/pages/Main/main'
import { Caygiapha } from '~/pages/Main/Caygiapha/caygiapha'

const publicRoutes = [
  { path: config.routes.home, component: Home, layout: HeaderOnly },
  { path: config.routes.login, component: Login, layout: null },
  { path: config.routes.signup, component: Signup, layout: HeaderOnly },
  { path: config.routes.main, component: Main },
  { path: config.routes.caygiapha, component: Caygiapha },
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }