import config from '~/config';

// Layouts
import { HeaderOnly } from '~/layouts';

// Pages
import { Signup } from '~/pages/Signup/signup'
import { Login } from '~/pages/Login/login'
import { Home } from '~/pages/Home/home'
import { Caygiapha } from '~/pages/Main/Caygiapha/caygiapha'
import { Ghinhanketthuc } from '~/pages/Main/Ghinhanketthuc/ghinhanketthuc'
import { Tracuu } from '~/pages/Main/Tracuu/tracuu'


const publicRoutes = [
  { path: config.routes.home, component: Home, layout: HeaderOnly },
  { path: config.routes.login, component: Login, layout: null },
  { path: config.routes.signup, component: Signup, layout: HeaderOnly },
  // { path: config.routes.main, component: Main },
  { path: config.routes.main, component: Caygiapha },
  { path: config.routes.ghinhanketthuc, component: Ghinhanketthuc },
  { path: config.routes.tracuu, component: Tracuu },
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }