import config from '~/config';

// Layouts
import { HeaderOnly, HeaderAfterLogin } from '~/layouts';

// Pages
import { Signup } from '~/pages/Signup/signup'
import { Login } from '~/pages/Login/login'
import { Home } from '~/pages/Home/home'
import { Caygiapha } from '~/pages/Main/Caygiapha/caygiapha'
import { Ghinhanketthuc } from '~/pages/Main/Ghinhanketthuc/ghinhanketthuc'
import { Tracuu } from '~/pages/Main/Tracuu/tracuu'
import { Themthanhvien } from '~/pages/Main/Themthanhvien/themthanhvien'
import { Themthanhtich } from '~/pages/Main/Themthanhtich/themthanhtich'
import { Thaydoithongtin } from '~/pages/Main/Thaydoithongtin/thaydoithongtin'
import { Lapbaocao } from '~/pages/Main/Lapbaocao/lapbaocao'

const publicRoutes = [
  { path: config.routes.home, component: Home, layout: HeaderOnly },
  { path: config.routes.login, component: Login, layout: null },
  { path: config.routes.signup, component: Signup, layout: null },
  // { path: config.routes.main, component: Main },
  { path: config.routes.main, component: Caygiapha, layout: HeaderAfterLogin },
  { path: config.routes.ghinhanketthuc, component: Ghinhanketthuc, layout: HeaderAfterLogin },
  { path: config.routes.tracuu, component: Tracuu, layout: HeaderAfterLogin },
  { path: config.routes.themthanhvien, component: Themthanhvien, layout: HeaderAfterLogin },
  { path: config.routes.themthanhtich, component: Themthanhtich, layout: HeaderAfterLogin },
  { path: config.routes.thaydoithongtin, component: Thaydoithongtin, layout: HeaderAfterLogin },
  { path: config.routes.lapbaocao, component: Lapbaocao, layout: HeaderAfterLogin }
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }