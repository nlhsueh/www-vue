<template>
  <h1>Food</h1>
  <p>Components created with v-for based on an array.</p>
  <div id="wrapper">
    <food-item v-for="x in foods" v-bind:food-name="x" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      foods: ['Apples', 'Pizza', 'Rice', 'Fish', 'Cake']
    };
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
  margin: 10px;
  padding: 0 20px;
  background-color: lightgreen;
}
</style>  