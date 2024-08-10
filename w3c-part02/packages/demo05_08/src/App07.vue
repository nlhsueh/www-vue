<template>
  <div>
    <h3>Local Component</h3>
    <p>The CompOne.vue component is a local component and can only be used inside App.vue.</p>
    <comp-one /> <br>
    <comp-two />
  </div>
</template>

<script>
  import CompOne from './components/Comp07b.vue';

  export default {
    components: {
      'comp-one': CompOne
    }
  }
</script>

<style>
  p {
    width: 200px;
  }
  #app div {
    border: dashed black 1px;
    margin: 10px;
    padding: 10px;
    display: inline-block;
  }
  .compOneDiv {
    background-color: lightgreen;
  }
  .compTwoDiv {
    background-color: lightcoral;
  }
</style>   