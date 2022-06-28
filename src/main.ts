import { createApp } from "vue";
import App from "./App.vue";
import store from "./store/socket";
import st from "./store";
import router from "./router";
import socketio from 'socket.io-client';
import VueSocketIO from 'vue-3-socket.io'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"



const app = createApp(App);

export const SocketInstance = socketio('ws://api.scrumpoker.marcusp.com.br/');


SocketInstance.on('connect', () => {
    console.log('connected:', SocketInstance.id);
})

app.use(new VueSocketIO({
    debug: false,
    connection: SocketInstance,
    vuex: {
        store,
        actionPrefix: 'socket_'
    },
}))


app.use(router);
app.use(st);

app.mount("#app");
