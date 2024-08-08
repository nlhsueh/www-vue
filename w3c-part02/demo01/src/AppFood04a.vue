<template>
  <h1>Food</h1>
  <p>Toggle with the 'Favorite' button to emit an event from 'FoodItem.vue' to 'App.vue' with the built-in Vue method
    '$emit()'.</p>
    <p>元件送訊息到 parent 的物件</p>
    
    <!-- toggle-favorite 可以說是一個自訂的事件，從元件來的事件 -->
  <div id="wrapper">
    <food-item v-for="x in foods" :key="x.name" :food-name="x.name" :food-desc="x.desc" :is-favorite="x.favorite"
      @toggle-favorite="receiveEmit" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      foods: [
        { name: 'Apples', desc: 'Apples are a type of fruit that grow on trees.', favorite: true },
        { name: 'Pizza', desc: 'Pizza has a bread base with tomato sauce, cheese, and toppings on top.', favorite: false },
        { name: 'Rice', desc: 'Rice is a type of grain that people like to eat.', favorite: false },
        { name: 'Fish', desc: 'Fish is an animal that lives in water.', favorite: true },
        { name: 'Cake', desc: 'Cake is something sweet that tastes good.', favorite: false }
      ]
    };
  },
  methods: {
    receiveEmit() {
      alert('Hello World!');
    }
  }
}
</script>

<style>
#wrapper {
  display: flex;
  flex-wrap: wrap;
}

#wrapper>div {
  border: dashed black 1px;
  flex-basis: 120px;
  margin: 10px;
  padding: 10px;
  background-color: lightgreen;
}
</style>  