// 相同环境测试组件
import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import './layout.scss'
import App from './App'
import { MyRouteType } from './myType'

const components = import.meta.glob(['./components/**/*.*sx','./components/**/*.vue'])
// ,'./components/**/*.vue'
const componentsPromise = Object.keys(components)
.map(x=>components[x])
.map(f=>f()) 
const routes:MyRouteType[]=[]
console.log(componentsPromise);

Promise.all(componentsPromise)
.then(list=>{
    for(let module of list){
        const md:any = module
        for(let key in md){
            const Component = md[key]
            routes.push({
                path:'/'+key.toLocaleLowerCase(),
                key,
                component:Component
            })
        }
        
    }
    console.log(routes);
    
    const router = createRouter({
        history:createWebHashHistory(),
        routes
    })
        const app = createApp(App,{routes})
    app.use(router)
    app.mount('#app')
})

