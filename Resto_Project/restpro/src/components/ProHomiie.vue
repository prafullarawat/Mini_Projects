<template>
  <HeaderResto />
  <h4>Welcome {{ name }}</h4>
  <div class="left">
    <h3>{{ single.name }}</h3>
    <img class="lefti" src="../assets/cars1.jpeg" alt="" />
    <p>Room Price: Rs. {{ this.single.price }}</p>
    <p>
      <button v-on:click="decrement('single')">-</button>
      <input v-model="single.quant" type="number" min="1" max="10" />
      <button v-on:click="increment('single')">+</button>
    </p>
    <p>Total Price: Rs. {{ this.single.price * this.single.quant }}</p>
    <p>
      <button @click="finalBook('single')" class="leftbutton">BookNow</button>
    </p>
  </div>

  <div class="right">
    <h3>{{ double.name }}</h3>
    <img class="righti" src="../assets/cars2.jpeg" alt="" />
    <p>Room Price: Rs. {{ this.double.price }}</p>
    <p>
      <button v-on:click="decrement('double')">-</button>
      <input v-model="double.quant" type="number" min="1" max="10" />
      <button v-on:click="increment('double')">+</button>
    </p>
    <p>Total Price: Rs. {{ this.double.price * this.double.quant }}</p>

    <p>
      <button @click="finalBook('double')" class="rightbutton">BookNow</button>
    </p>
  </div>
</template>
<script>
import HeaderResto from "./HeaderResto.vue";

import axios from "axios";

export default {
  name: "ProHomiie",

  components: {
    HeaderResto,
  },
  data() {
    return {
      name: "",
      single: {
        name: "Single Bed Room",
        price: 250,
        quant: 1,
      },
      double: {
        name: "Double Bed Room",
        price: 400,
        quant: 1,
      },
    };
  },
  methods: {
    increment(room) {
      if (room == "single") {
        this.single.quant++;
      } else {
        this.double.quant++;
      }
    },
    decrement(room) {
      if (room == "single") {
        this.single.quant > 1 ? this.single.quant-- : null;
      } else {
        this.double.quant > 1 ? this.double.quant-- : null;
      }
    },

    async finalBook(room) {
      let book = {};
      if (room == "single") {
        book = this.single;
      } else {
        book = this.double;
      }
      book = {
        ...book,
        total_price: book.quant * book.price,
        booking_date: new Date(),
      };
      let result = await axios.post("http://localhost:3000/booking", book);
      console.log(result);
    },
  },
  async mounted() {
    let user = localStorage.getItem("user-info");
    this.name = JSON.parse(user).name;
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
  },
};
</script>

<style>
td {
  width: 165px;
  height: 55px;
}
</style>
