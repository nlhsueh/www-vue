<template>
  <h1>Food</h1>
  <p><mark>Without the key attribute this page does not work correctly.</mark></p>
  <p><mark>Notice how the favorite status image on the 'Fish' element is transferred to the 'Cake' element when you click
      the "Remove Item" button. This is not correct.</mark></p>
  <button @click="removeItem">Remove Item</button>

  <div id="wrapper">
    <!-- incorrect version: without key -->
    <food-item v-for="x in foods" :food-name="x.name" :food-desc="x.desc" :is-favorite="x.favorite" />

    <food-item v-for="x in foods" :key="x.name" :food-name="x.name" :food-desc="x.desc" :is-favorite="x.favorite" />

    <!-- Correct version: with key -->
    <food-item v-for="x in foods" :key="x.name" :food-name="x.name" :food-desc="x.desc" :is-favorite="x.favorite" />
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
        { name: 'Cake', desc: 'Cake is something sweet that tates good.', favorite: false }
      ]
    };
  },
  methods: {
    removeItem() {
      this.foods.splice(1, 1);
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