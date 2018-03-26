<template>
  <div>
  <v-parallax src="https://prime-adventure.com/wp-content/uploads/2017/04/INTUITION4.jpg" style="opacity: 0.9;">
      <v-layout column align-center justify-center>
        <h1  style="text-shadow: 1px 1px #000000; font-size:72px">Welcome to BOSS and BEER</h1>
        <h4 class="gold--text" style="text-shadow: 1px 1px #000000; font-size:38px; font-style: italic;">Because alcohol makes everything better!</h4>
      </v-layout>
    </v-parallax>    
    
    <v-container container class="productHeader">
      <h1>OUR BEERS</h1>
    </v-container>
    <v-container grid-list-xs class="productList">
        <v-flex xs3 v-for="object in products">
          <router-link :to="'/product/' + object._id">
            <v-card>
              <img v-bind:src="object.imgURL"/>
                <v-card-title primary-title>
                  <v-card-text class="nameInfo">{{object.productName}}</v-card-text>
                </v-card-title>
              </v-card>
          </router-link>
        </v-flex>
        <!-- <v-flex xs3>
          <v-card>
            <img src="https://www.trumansbeer.co.uk/media/1432/trumans_swift_website_pumpclipmockup_191217-01.png?anchor=center&mode=crop&width=260&height=367&rnd=131598763080000000"/>
              <v-card-title primary-title>
                <v-card-text class="nameInfo">Swift</v-card-text>
              </v-card-title>
            </v-card>
        </v-flex>
        <v-flex xs3>
          <v-card>
            <img src="https://www.trumansbeer.co.uk/media/1439/trumans_zephyr_website_pumpclipmockup_191217.png?anchor=center&mode=crop&width=260&height=367&rnd=131631611330000000"/>
              <v-card-title primary-title>
                <v-card-text class="nameInfo">Zephyr</v-card-text>
              </v-card-title>
            </v-card>
        </v-flex>
        <v-flex xs3>
          <v-card>
            <img src="https://www.trumansbeer.co.uk/media/1428/trumans_lazarusr_website_pumpclipmockup_191217-01.png?anchor=center&mode=crop&width=260&height=367&rnd=131598756980000000"/>
              <v-card-title primary-title>
                <v-card-text class="nameInfo">Lazarus</v-card-text>
              </v-card-title>
            </v-card>
        </v-flex>
        <v-flex xs3>
          <v-card>
            <img src="https://www.trumansbeer.co.uk/media/1413/roller.png?anchor=center&mode=crop&width=260&height=367&rnd=131562683460000000"/>
              <v-card-title primary-title>
                <v-card-text class="nameInfo">Roller IPA</v-card-text>
              </v-card-title>
            </v-card>
        </v-flex>
        <v-flex xs3>
          <v-card>
            <img src="https://www.trumansbeer.co.uk/media/1416/pale-ale.png?anchor=center&mode=crop&width=260&height=367&rnd=131562684150000000"/>
              <v-card-title primary-title>
                <v-card-text class="nameInfo">Pale Ale</v-card-text>
              </v-card-title>
            </v-card>
        </v-flex>
        <v-flex xs3>
          <v-card>
            <img src="https://www.trumansbeer.co.uk/media/1436/trumans_gypsyqueen_website_pumpclipmockup_220118-01.png?anchor=center&mode=crop&width=260&height=367&rnd=131624747580000000"/>
              <v-card-title primary-title>
                <v-card-text class="nameInfo">Gypsy</v-card-text>
              </v-card-title>
            </v-card>
        </v-flex> -->
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
  data(){
    return {
      products: []
    }
  },
  mounted(){
    console.log(store.state.role)
    // alert(store.state.role)
    Vue.$http.get('http://localhost:3000/getProducts')
      .then((response) => {
          console.log(response.data)
          this.products = response.data
      })
      .catch((error) =>{
          console.log(error)
      })
  }
}
</script>

<style scoped>
  .productHeader{
    border-bottom: 1px solid #c5c5c5;
    margin-top: 25px;
  }
  .productList{
    margin-top: 50px;
    
  }
  .SearchBox {
      font-family:verdana;
      border-radius: 10px;
      border: 1px solid #adadad;
      padding: 10px;
      max-width: 99%;
      max-height: 100px;
      margin: auto;
  }
  .flex.xs3{
    display: inline-flex;
    margin: 0 20px;
  }
  .nameInfo{
    text-align: center; 
    font-weight: bold;
    font-size: 18px;
  }
  .card{
    box-shadow: none;
    -webkit-box-shadow: none;
  }
  .card:hover {
    -webkit-transform:scale(0.9);
    -ms-transform: scale(0.9);
    transform: scale(0.9);
  }
  .card__text.nameInfo{
    color: #2c3e50;
  }
  a{
    text-decoration: none;
  }
</style>
