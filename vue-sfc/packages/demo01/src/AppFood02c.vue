<template>
  <h1>Food</h1>
  <p>My favorite food has a diploma image attached to it.</p>
  <a href="https://www.w3schools.com/vue/vue_props.php">Read here to see what is Props</a>
  <ul>
    <li>也可以傳一個 boolean 來控制元件的呈現，這個例子我們傳一個 v-bind </li>
    <li>這個例子也注意一下 img 的儲存方式</li>
  </ul>


  <div id="wrapper">
    <food-item food-name="Apples" food-desc="Apples are a type of fruit that grow on trees." v-bind:is-favorite="true" />
    <food-item food-name="Pizza" food-desc="Pizza has a bread base with tomato sauce, cheese, and toppings on top."
      v-bind:is-favorite="false" />
    <food-item food-name="Rice" food-desc="Rice is a type of grain that people like to eat." v-bind:is-favorite="false" />
  </div>
</template>

<script></script>

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