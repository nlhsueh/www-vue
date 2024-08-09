<template>
  <h1>Food</h1>
  <p>Food description for the rice component is not provided so the default value is used instead.</p>

  <a href="https://www.w3schools.com/vue/vue_props.php">Read here to see what is Props</a>
  <ul>
    <li>元件參數可以設定是否是必要的 (required), 若非必要，則要設定一個預設值</li>
  </ul>


  <div id="wrapper">
    <food-item food-name="Apples" food-desc="Apples are a type of fruit that grow on trees." v-bind:is-favorite="true" />
    <food-item food-name="Pizza" food-desc="Pizza has a bread base with tomato sauce, cheese, and toppings on top."
      v-bind:is-favorite="false" />
    <food-item food-name="Rice" v-bind:is-favorite="false" />
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