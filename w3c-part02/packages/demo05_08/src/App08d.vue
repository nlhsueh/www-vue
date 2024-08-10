<template>
  <h1>Scoped Slots</h1>
  <p>App.vue controls how local data from the scoped slot is rendered.</p>
  <slot-comp v-slot="food">
    <hr>
    <h2>{{ food.foodName }}<img :src=food.foodUrl></h2>
    <p class="greenP">{{ food.foodDesc }}</p>
  </slot-comp>
</template>

<script></script>

<style>
  #app {
    width: 300px;
  }
  h2, .greenP {
    background-color: lightgreen;
    padding: 10px;
    margin: 0;
  }
  img {
    float: right;
    height: 70px;
    margin-left: 10px;
  }
</style> 