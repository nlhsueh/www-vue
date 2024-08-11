<template>
  <p>Try clicking the button more than once to see new animals picked randomly.</p>
  <button @click="fetchData">Fetch Data</button>
  <div v-if="randomMammal">
    <h2>{{ randomMammal.name }}</h2>
    <p>Max weight: {{ randomMammal.maxWeight }} kg</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      randomMammal: null
    };
  },
  methods: {
    async fetchData() {
      const response = await fetch("bigLandMammals.json");
      const data = await response.json();
      const randIndex = Math.floor(Math.random()*data.results.length);
      this.randomMammal = data.results[randIndex];
    }
  }
};
</script>      