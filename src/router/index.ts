import { createRouter, createWebHistory } from 'vue-router'
import ClientsRegisterView from '../views/ClientsRegisterView.vue'
import ProductsRegisterView from '../views/ProductsRegisterView.vue'
import ProductsClientsRelationshipView from '../views/ProductsClientsRelationshipView.vue'
import ProductsClientsRelationshipListView from '../views/ProductsClientsRelationshipListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/client-register',
      name: 'client-register',
      component: ClientsRegisterView
    },
    {
      path: '/products-register',
      name: 'products-register',
      component: ProductsRegisterView
    },
    {
      path: '/products-clients-relationship',
      name: 'products-clients-relationship',
      component: ProductsClientsRelationshipView
    },
    {
      path: '/products-clients-relationship-list',
      name: 'products-clients-relationship-list',
      component: ProductsClientsRelationshipListView
    }
  ]
})

export default router
