import Vue from 'vue' 
import Router from 'vue-router'
import userController from '../components/dashboardContents/userController.vue' 
 
const DashboardLayout = () => import('../components/dashboardLayout.vue') 
 
function loadView(view) { 
    return () => import( `../components/dashboardContents/${view}.vue`) 
} 

 
const routes = [     
    {       
        path: '/',       
        component: DashboardLayout,       
        children: [         
            
            {           
                name: 'vehiclePath',           
                path: 'vehicle',           
                component: loadView('vehicleController')         
            },  
            {           
                name: 'userPath',           
                path: 'user',           
                component: loadView("userController"),       
            },        
        ]     
    },   
]   
Vue.use(Router) 
 
  const router = new Router({mode: 'history', routes: routes}) 
 
  export default router 