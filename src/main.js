import { createApp } from 'vue'   // importa o Vue
import App from './App.vue'       // importa o componente principal
import router from './router'     // importa o sistema de rotas

const app = createApp(App)        // cria a aplicação Vue

app.use(router)                   // ativa a navegação entre páginas

app.mount('#app')                 // monta a app no index.html
