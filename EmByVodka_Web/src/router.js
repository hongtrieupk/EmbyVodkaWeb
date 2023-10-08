import { createWebHistory, createRouter } from 'vue-router'
import ShopMasterPage from './components/shop/ShopMasterPage'
import AdminMasterPage from './components/admin/AdminMasterPage'
import ShopPageHome from './components/shop/pages/home/ShopPageHome'
import ShopPageAboutUs from './components/shop/pages/ShopPageAboutUs'
import ShopPageContactUs from './components/shop/pages/ShopPageContactUs'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '',
			component: ShopMasterPage,
			children: [
				{
					path: '',
					component: ShopPageHome
				},
				{
					path: 'about-us',
					component: ShopPageAboutUs
				},
				{
					path: 'contact-us',
					component: ShopPageContactUs
				},
				{
					path: '/:catchAll(.*)',
					component: ShopPageHome
				}
			]
		},
		{ path: '/admin', component: AdminMasterPage }
	]
})

export default router