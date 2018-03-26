<template>
  <div id="app">
    <v-toolbar color="white" light>
     <img src="@/assets/Logo.png" id="headlogo">
      <ul class="navmenu">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/aboutus">About Us</router-link></li>
      </ul>
      <v-spacer></v-spacer>
      <router-link to="/addProduct">
        <v-btn icon v-if="checkRole">
          <v-icon>add</v-icon>
        </v-btn>
      </router-link>
      <router-link to="/login">
          <v-btn icon v-if="!isLoggedIn">
              <v-icon>account_circle</v-icon>
          </v-btn>
      </router-link>
        <v-btn icon v-if="isLoggedIn" @click="logOut">
            <v-icon>exit_to_app</v-icon>
        </v-btn>
    </v-toolbar>
    <router-view></router-view>
  </div>
</template>

<script>
import store from './store' 
export default {
  name: 'App',
  computed: {
    isLoggedIn() {
      return store.state.auth
    },
    checkRole(){
      if(store.state.role == "admin")
        return true
      else
        return false
    }
  }, 
  methods:{
    logOut(){
      alert('You are logged out!')
      store.dispatch('logout')
    }
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.toolbar__content{
  height: auto !important; 
}
#headlogo{
  width:4%;
  height:auto;
}
.navmenu{
  display: -webkit-inline-box;
  list-style-type: none;
  /* text-align: -webkit-center; */
}
.navmenu li{
  font-size: 18px;
  padding: 0 30px;
}
.navmenu li a{
  text-decoration: none;
  color: #212121;
}
.navmenu li a:hover{
  color: #FFB300;
}
.navmenu li a:after {
    content: '';
    display: block;
    margin: auto;
    height: 1px;
    width: 0px;
    background: transparent;
    transition: width .5s ease, background-color .5s ease;
}
.navmenu li a:hover:after {
    width: 100%;
    background: #FFB300;
}
a{
  text-decoration: none;
}
</style>
