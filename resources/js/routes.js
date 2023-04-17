import { createRouter, createWebHistory } from 'vue-router';

import AllProduct from './components/AllProduct.vue';
import CreateProduct from './components/CreateProduct.vue';
import EditProduct from './components/EditProduct.vue';
import ExampleComponent from './components/ExampleComponent.vue';
 

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'home',
            path: '/',
            component: AllProduct
        },
        {
            name: 'create',
            path: '/create',
            component: CreateProduct
        },
        {
            name: 'edit',
            path: '/edit/:id',
            component: EditProduct
        },
        {
            name: 'example',
            path: '/example',
            component: ExampleComponent
        }
    ]
  });
  
  export default router;