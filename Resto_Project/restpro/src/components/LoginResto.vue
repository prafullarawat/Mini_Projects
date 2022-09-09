<template>
  <h4>Welcome To Login</h4>

  <div class="login">
    <input type="text" v-model="email" placeholder="Enter_Email" />
    <input type="password" v-model="password" placeholder="Enter_Password" />

    <button v-on:click="login">Login_Here</button>
    <p>
      <router-link to="/SignUp">SignUp</router-link>
    </p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "LoginResto",

  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    async login() {
      let result = await axios.get(
        `http://localhost:3000/user?email=${this.email}&password=${this.password}`
      );

      if (result.status == 200 && result.data.length > 0) {
        localStorage.setItem("user-info", JSON.stringify(result.data[0]));
        this.$router.push({ name: "ProHomiie" });
      }
      //console.log(result);
      else {
        alert("Please Enter Right Credintials");
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({ name: "ProHomiie" });
    }
  },
};
</script>

<style>
.login input {
  width: 300px;
  margin: 1%;
  height: 40px;
  padding-left: 20px;
  display: block;
  padding-left: 20px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid red;
}

.login button {
  width: 150px;
  height: 40px;
  color: blue;
  background: pink;
}
/* body {
  background: url("C:\Users\prafulla.rawat\Desktop\Task-Lead\Task-Lead\restpro\src\assets\backg.jpeg");
} */
</style>
