<template>
  <h3>Slots in Vue</h3>
  <p>We create card-like div boxes from the foods array.</p>
  <div id="wrapper">
    <slot-comp v-for="x in foods">
      <img v-bind:src="x.url">
      <h4>{{x.name}}</h4>
      <p>{{x.desc}}</p>
    </slot-comp>
  </div>

  <footer>
    <slot-comp>
      <h3>Footer</h3>
    </slot-comp>
  </footer>
  
</template>

<script>
  export default {
    data() {
      return {
        foods: [
        { name: 'Apple', desc: 'Apples are a type of fruit that grow on trees.', url: 'img_apple.svg'},
        { name: 'Pizza', desc: 'Pizza has a bread base with tomato sauce, cheese, and toppings on top.', url: 'img_pizza.svg'},
        { name: 'Rice', desc: 'Rice is a type of grain that people like to eat.', url: 'img_rice.svg'},
        { name: 'Fish', desc: 'Fish is an animal that lives in water.', url: 'img_fish.svg'},
        { name: 'Cake', desc: 'Cake is something sweet that tates good but is not consodered healthy.', url: 'img_cake.svg'}
      ]
      }
    }
  }
</script>

<style>
  #wrapper {
    display: flex;
    flex-wrap: wrap;
  }
  #wrapper img {
    display: block; 
    margin: auto; 
    width: 60%;
  }
</style>   