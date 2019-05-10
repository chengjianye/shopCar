import Index from 'view/index'
import Shopcar from 'view/shopcar/index.jsx'
import List from 'view/list/index.jsx'

const Routes = [{
    path: "/index",
    name: '首页',
    component: Index
}, {
    path: "/shopcar",
    name: '购物车',
    component: Shopcar
}, {
    path: "/list",
    name: '查看购物车',
    component: List
}]

export default Routes