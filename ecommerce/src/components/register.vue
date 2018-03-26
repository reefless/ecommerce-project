<template>
    <div class="bg">
        <v-container>
            <h1 style="color:white; margin-top:30px; margin-left:25px;">Create Account</h1>
            <v-layout  column>
            <v-flex xs12>
            <v-card-text class="text-sm-left text-field-info" style="color:white;">First Name<span class="required">*</span>
            </v-card-text>
            <v-text-field solo class="box white" style="color:black;" v-model="user.firstname"></v-text-field>
            </v-flex>
            <v-flex xs12>
            <v-card-text class="text-sm-left text-field-info" style="color:white;">Last Name<span class="required">*</span>
            </v-card-text>
            <v-text-field solo class="box white" style="color:black;" v-model="user.lastname"></v-text-field>
            </v-flex>
            <v-flex xs12>
            <v-card-text class="text-sm-left text-field-info" style="color:white;">Your Email<span class="required">*</span>
            </v-card-text>
            <v-text-field solo class="box white" style="color:black;" v-model="user.email"></v-text-field>
            </v-flex>
            <v-flex xs12>
            <v-card-text class="text-sm-left text-field-info" style="color:white;">Username<span class="required">*</span>
            </v-card-text>
            <v-text-field solo class="box white" style="color:black;" v-model="user.username"></v-text-field>
            </v-flex>
            <v-flex xs12>
            <v-card-text class="text-sm-left text-field-info" style="color:white;">Password<span class="required">*</span>
            </v-card-text>
            <v-text-field solo class="box white" style="color:black;" v-model="user.password"
          :type="e1 = 'password'"></v-text-field>
            </v-flex>
            <v-flex xs12  class="text-xs-left" style="margin-top:30px;">
            <p class="white--text">By creating an account you agree to our <a href="/#/privacy" style="color:dodgerblue">Terms & Privacy</a>.</p></v-flex>
            <v-flex class="text-xs-left" mt-15 style="margin-top:25px;">
                <v-btn color="white blue--text" @click="registerNow"><b>Register</b></v-btn>
                <v-btn color="white blue--text" @click="clearFields"><b>Cancel</b></v-btn>
            </v-flex>
            </v-layout>
        </v-container>
        <v-footer height="auto" class="white">
            <v-layout row wrap justify-center>
            <v-flex xs12 py-3 text-xs-center black--text>
                &copy;2018 — <strong>B&B</strong>
            </v-flex>
            </v-layout>
        </v-footer>
    </div>
</template>
<script>
import Vue from 'vue'
export default {
    data(){
        return{
            user:{
                firstname: '',
                lastname: '',
                email: '',
                username: '',
                password: ''
            }
        }
    },
    methods:{
        registerNow(){
            Vue.$http.post('http://localhost:3000/register', this.user)
            .then((response) => {
                console.log(response.data)
                this.$router.push('/')
            })
            .catch((error) =>{
                console.log(error)
            })
        },
        clearFields(){
            this.user = ''
        }
    }
}
</script>
<style scoped>
.bg {
    /* The image used */
    background-image: url("https://images.pexels.com/photos/301692/pexels-photo-301692.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
    opacity: 0.9;
    /* Full height */
    min-height: 100vh;
    /* Center and scale the image nicely */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    /*-webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
   /* filter: grayscale(100%);
    color: #ffffff;*/
    }
.box{
	width:300px;
	height:50px;
}
</style>