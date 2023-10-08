import { createWebHistory, createRouter } from 'vue-router'
import ShopMasterPage from './components/shop/ShopMasterPage'
import AdminMasterPage from './components/admin/AdminMasterPage'

const router = createRouter({
    history: createWebHistory(),
	routes: [
		{ path: '', component: ShopMasterPage },
		{ path: '/admin', component: AdminMasterPage}
	]
})

export default router