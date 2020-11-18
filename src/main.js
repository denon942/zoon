import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import firebase from 'firebase'

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyAksFTUM6a3d6zXzeDMDuhFiISWyB41KaM",
  authDomain: "zoon-2a329.firebaseapp.com",
  databaseURL: "https://zoon-2a329.firebaseio.com",
  projectId: "zoon-2a329",
  storageBucket: "zoon-2a329.appspot.com",
  messagingSenderId: "576694358321",
  appId: "1:576694358321:web:7101b40185a6dba958a010",
  measurementId: "G-MPHP1K3HP8"
};
firebase.initializeApp(firebaseConfig);
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
