<template>
  <h1>Food</h1>
  <p>The user can now change the favorite status of the food items with the use of a new data property initialized by the
    'is-favorite' prop value.</p>

  <a href="https://www.w3schools.com/vue/vue_props.php">Read here to see what is Props</a>
  <ul>
    <li>元件可以設計 method 來修改資料的值</li>
    <li>這個例子，我們加上一個 favoriate 的按鈕，來改變元件的狀態</li>
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