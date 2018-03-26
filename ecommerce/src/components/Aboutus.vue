<template>
<div>
    <v-parallax src="http://davidjpfisher.com/wp-content/uploads/2014/11/Beer-at-Bar.jpg" style="opacity: 0.8;">
    <div class="transbox">
        <p> 
            <font size="6"> 
            About us
            </font>
            <br>
            <br>
            <font size="4">
            Launched in 2018, B&B has the largest selection of imported beers and ciders in Thailand, delivered to your doorstep. Our team is focused on helping you discover and choose your beers, and get them delivered fast to your door. We believe that a great experience is as important as a great beer.
            </font>
        </p>
    </div>
    </v-parallax>
   
    <div>
        <br>
        <v-layout row warp>
            <v-card style="margin-left:20px; size: height:auto; line-height: 1.6">
            <v-flex xs12>
        <v-card-title primary-title>
          <div>
            <h1 style="text-align: center; margin: auto">B&B</h1>
            <br>
            <h5 style="text-align: center; margin: auto; opacity: 0.6">BOSS AND BEER</h5>
            <br>
            <br>
            <h5 style="text-align: center; margin: auto; opacity: 0.6">Line: @bossandbeere</h5>
            <br>
            <br>
            <h5 style="text-align: center; margin: auto; opacity: 0.6">Tel: 0814902880</h5>
            <br>
            <br>
             <v-card-media src="http://www.bettereyewear.com/v/vspfiles/assets/images/authentic-logo.png" style="height:80px;">
             </v-card-media>
             <br>
             <br>
             <v-card-media src="https://www.longmanbrewery.com/wp-content/uploads/the-beer-awards-3-star.png" style="height:125px">
             </v-card-media>
          </div>
        </v-card-title>
          </v-flex>
      </v-card>
      <div class="container">
            <h1>Contact Form</h1>
            <br>
        <form action="/action_page.php">
        <label for="fname">First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name..">

        <label for="lname">Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name..">

        <label for="country">Country</label>
        <select id="country" name="country">
            <option value="australia">Australia</option>
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
        </select>

        <label for="subject">Subject</label>
        <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea>

        <input type="submit" value="Submit">
        </form>
        </div>
   
        </v-layout>
        </div>

       
        
        <br>
</div>
</template>
 <script>
     
 </script>
 <style scoped>
 div.transbox {
  margin: 30px;
  margin-bottom: 50px;
  margin-left: 150px;
  background-color: #ffffff;
  opacity: 0.6;
  width: 50%;
  height: auto;
}

div.transbox p {
  margin: 2%;
  color: #000000;
  text-align: center;
  font-family: Verdana;
  line-height: 1.6;
}
body {font-family: Arial, Helvetica, sans-serif;}

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
    background-color: #4CAF50;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

input[type=submit]:hover {
    background-color: #45a049;
}

.container {
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px;
    height: auto;
    width: 25%
}
h1{
    text-align: left;
}
label{
    float: left;
}
 </style>
 