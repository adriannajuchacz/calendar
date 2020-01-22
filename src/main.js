import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueTextareaAutosize from 'vue-textarea-autosize'
import firebase from 'firebase/app'
import 'firebase/firestore'

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyC6py3mnfQJCE3m9qd3LwNWT-FtjgiFJzI",
  authDomain: "calendar-500a9.firebaseapp.com",
  databaseURL: "https://calendar-500a9.firebaseio.com",
  projectId: "calendar-500a9",
  storageBucket: "calendar-500a9.appspot.com",
  messagingSenderId: "727668380181",
  appId: "1:727668380181:web:e78662558fe5f19df1b41c"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
