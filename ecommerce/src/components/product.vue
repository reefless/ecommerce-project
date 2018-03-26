<template>
    <div>
    <v-container grid-list-xs class="productDetail">
        <v-layout row>
            <v-flex xs5>
                <img class="imgHero" v-bind:src="item.imgURL"/>
            </v-flex>
            <v-flex xs7>
                <v-card-title primary-title>
                    <v-card-text><h1 class="titleHero">{{item.productName}}</h1></v-card-text>
                    <v-card-text>{{item.desc}}</v-card-text>
                    <v-card-text>${{item.price}}</v-card-text>
                </v-card-title>
                <v-card-actions>
                    <v-btn outline color="indigo lighten-1" class="orderBtn" @click="orderNow">Order Now</v-btn>
                </v-card-actions>
            </v-flex>
        </v-layout>
    </v-container>
  <v-footer height="auto" class="grey darken-3">
    <v-layout row wrap justify-center>
      <v-flex xs12 py-3 text-xs-center white--text>
        &copy;2018 — <strong>B&B</strong>
      </v-flex>
    </v-layout>
  </v-footer>
  </div>
</template>
<script>
import store from '../store' 
import Vue from 'vue'
export default {
  name: 'App',
  data(){
      return{
          item: []
      }
  },
  computed: {
    isLoggedIn() {
      return store.state.auth;
    }
  }, 
  methods:{
    orderNow(){
        if(store.state.auth){
            alert("Thank you for the order!")
            this.$router.push('/')
        }else{
            alert("You must log in to order!")
        }
    }
  },
  mounted(){
      Vue.$http.get('http://localhost:3000/getProduct/' + this.$route.params.productId)
        .then((response) => {
            this.item = response.data
        })
        .catch((error) => {
            console.log(error)
        })
  }
}</script>

<style scoped>
    .productDetail{
        margin-top: 100px;
        height: 500px;
    }
    .titleHero{
        text-transform: uppercase;
        font-size: 36px;
    }
    .orderBtn{
        margin: 0 auto;
    }
</style>