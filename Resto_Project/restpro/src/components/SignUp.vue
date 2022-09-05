<template>
  <img src="../assets/restologo1.jpg" alt="" />
  <h3>Welcome To Resto SignUp</h3>
  <div class="register">
    <input type="text" v-model="name" placeholder="Enter Name" />
    <input type="text" v-model="email" placeholder="Enter Email" />
    <input type="password" v-model="password" placeholder="Enter Password" />
    <button v-on:click="signUp">SignUp</button>
    <p>
      <router-link to="/Login">LoginHere</router-link>
    </p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SignUp",

  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async signUp() {
      console.log("SignUp....!!!", this.name, this.email, this.password);
      let result = await axios.post("http://localhost:3000/user", {
        name: this.name,
        email: this.email,
        password: this.password,
      });

      console.log(result);

      if (result.status == 201) {
        localStorage.setItem("user-info", JSON.stringify(result.data));
        this.$router.push({ name: "ProHomiie" });
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
.logo {
  width: 100px;
}
.register input {
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

.register button {
  width: 150px;
  height: 40px;
  color: blue;
  background: pink;
}
</style>
