<template>
  <div>
    <div class="main">
      <div class="cont">
        <div class="image">
           <img v-bind:src="background">
        </div>
        <div class="input">

          <div class="tab_button">
            <a class="btn btn-primary" href="/register" role="button">SING UP</a>
            <a class="btn btn-outline-primary" href="/login" role="button">SIGN IN</a>
          </div>
          <div class="input_part">
            <div class="input-container">
              <i class="fa fa-user icon"></i>
              <input class="input-field" type="text" placeholder="Username" name="usrnm">
            </div>
            <div class="input-container">
              <i class="fa fa-envelope icon"></i>
              <input class="input-field" type="text" placeholder="Email" name="email">
            </div>
            <div class="input-container">
              <i class="fa fa-key icon"></i>
              <input class="input-field" type="password" placeholder="Password" name="psw">
            </div>
            <div class="input-container">
              <i class="fa fa-key icon"></i>
              <input class="input-field" type="password" placeholder="Confirm Password" name="psw">
            </div>
          </div>

          <div class="submit_part">
            <button type="button" class="btn btn-primary">SIGN Up</button>
            <div>
              <span>If you are member?</span> <a style="text-decoration: none;" href="/login">Sign In</a>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import image from '../assets/background.png'

export default {
  data(){
    return{
      background: image
    }
  },
  methods: {

  }
}
</script>
<style scoped>
body{
  margin: 0px;
  padding: 0px;
}
.main{
  width: 100%;
}
.cont{
  /* border: 10px ridge;
  border-radius: 25px; */
  margin-top: 15vh;
  margin-bottom: 15vh;
  width: 90%;
  display: flex;
  margin-left: 10%;
}
.image{
  width: 60%;
}
.image img {
  width: 90%;
}
.input{
  width: 40%;
  margin-top: 13vh;
  margin-left: -200px;
}
.input .tab_button{
  width: 100%;
  justify-content: center;
  text-align: center;
}

.input .input_part{
  margin-top: 5vh;
  width: 100%;
  justify-content: center;
  text-align: center;
}

.input-container .icon {
  background-color:#2A81EA ;
  padding: 10px;
  color: white;
  min-width: 50px;
  text-align: center;
  border-radius: 10px ;
}
.input-container .input-field {
  width: 60%;
  padding: 5px 0px 5px 15px;
  outline: none;
  margin-bottom: 18px;
  border-radius: 10px ;
  border: 1px black solid;
  
}
.input-container .input-field:focus {
  border: 2px solid dodgerblue;
}
.submit_part{
  margin-top: 5vh ;
  text-align: center;
}

.submit_part div{
  margin-top: 2vh;
  
}
</style>