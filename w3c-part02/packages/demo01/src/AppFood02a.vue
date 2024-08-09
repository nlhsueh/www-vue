<template>
  <h1>Food</h1>

  <a href="https://www.w3schools.com/vue/vue_props.php">Read here to see what is Props</a>
  <ul>
    <li>用 Prop 我們可以對元件傳遞參數</li>
  </ul>

  <food-item food-name="Apples" />
  <food-item food-name="Pizza" />
  <food-item food-name="Rice" />
</template>

<script></script>

<style>
#app>div {
  border: dashed black 1px;
  display: inline-block;
  width: 120px;
  margin: 10px;
  padding: 10px;
  background-color: lightgreen;
}
</style>   