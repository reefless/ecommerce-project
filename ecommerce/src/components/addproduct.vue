<template>
<v-layout row warp>
<div class="container2" style="margin:auto">
<main class="container">
  <!-- <object data="https://images-na.ssl-images-amazon.com/images/I/51XP7y8908L._SL1024_.jpg" type="image/png" width="50%" height="90%"> -->
    <!-- <img v-bind:src="this.imgURL" onerror="this.src='http://www.stickpng.com/assets/images/585e5e47cb11b227491c33ee.png'" width="50%" height="90%"> -->
  <!-- </object> -->
  <!-- Right Column -->
  <div class="right-column">
<h1 style="margin-top:30px">Add New Product</h1>
  <div style="margin-left:40px; margin-top:30px">
    <label>Product Name</label>
    <input type="text" id="pname" name="productname" placeholder="Product name.." v-model="product.productName">
    <label>Product Price</label>
    <input type="text" id="pprice" name="productprice" placeholder="Product Price.." v-model="product.price">
    <label>Image URL</label>
    <input type="text" id="pprice" name="url" placeholder="Image URL.." v-model="product.imgURL">
    <label>Product Description</label>
    <textarea id="pdes" name="productdescription" placeholder="Product Description.." style="height:200px" v-model="product.desc"></textarea>
    <input type="submit" value="Add" @click="addDB">
  </div>
  </div>
</main></div>

</v-layout>
</template>
<script>
import Vue from 'vue'
export default {
    data(){
      return{
        product: {
          productName: '',
          price: '',
          imgURL: '',
          desc: ''
        }
      }
    },
    methods:{
      addDB(){
        Vue.$http.post('http://localhost:3000/addProduct', this.product)
          .then((response) => {
              console.log(response.data)
              this.$router.push('/')
          })
          .catch((error) =>{
              console.log(error)
          })
      }
    }
}

</script>

<style scoped>
/* Basic Styling */
html, body {
  height: 100%;
  width: 100%;
  margin: 0;
  font-family: 'Roboto', sans-serif;
}
 
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px;
  display: flex;
}
input[type=text], select, textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
}

input[type=submit] {
    background-color: rgb(116, 179, 238);
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
.container2 {
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 0 100px;
    margin: 0 !important;
    width: 100%; 
    padding-top: 50px;
}
</style>
