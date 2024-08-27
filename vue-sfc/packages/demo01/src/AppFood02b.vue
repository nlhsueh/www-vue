<template>
  <h1>Food</h1>
  <a href="https://www.w3schools.com/vue/vue_props.php">Read here to see what is Props</a>
  <ul>
    <li>參數可以多個，就像這個例子，我們傳了 food-name, food-desc 兩個參數</li>
  </ul>

  <div id="wrapper">
    <food-item food-name="Apples" food-desc="Apples are a type of fruit that grow on trees." />
    <food-item food-name="Pizza" food-desc="Pizza has a bread base with tomato sauce, cheese, and toppings on top." />
    <food-item food-name="Rice" food-desc="Rice is a type of grain that people like to eat." />
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