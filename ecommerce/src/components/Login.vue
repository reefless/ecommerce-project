<template>
   <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="blue-grey darken-4">
                <v-toolbar-title>Login</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person" name="login" label="Login" type="text" v-model="loginInfo.username"></v-text-field>
                  <v-text-field prepend-icon="lock" name="password" label="Password" id="password" type="password" v-model="loginInfo.password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn dark color="blue-grey darken-4" @click="userSignup" style="margin:auto;">Sign up</v-btn>
                <v-btn dark color="blue-grey darken-4" @click="userLogin" style="margin:auto;">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Vue from 'vue'
import store from '../store'

export default {
  name: 'Login',
  data () {
    return {
        loginInfo:{
            username: '',
            password: ''
        }
    }
  },
  methods:{
      userLogin(){
          Vue.$http.post('http://localhost:3000/login', this.loginInfo)
            .then((response) => {
            console.log(response.data)
            if(response.data.role == "none"){
                alert("Wrong username or password!")
                this.loginInfo.username = ''
                this.loginInfo.password = ''
            }
            else{
                this.loginInfo.username = ''
                this.loginInfo.password = ''
                console.log(response.data.role)
                store.dispatch('login', response.data.role)
                this.$router.push('/')
            }
            })
            .catch((error) =>{
            console.log(error)
            })
      },
      userSignup(){
        this.$router.push('/register')
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #inspire{
        background-image: url('http://fairviewcatering.com/wp-content/uploads/2017/11/beer-background.jpg');
        background-repeat: no-repeat;
    }
    .card__actions{
        padding-bottom: 20px;
    }
</style>
