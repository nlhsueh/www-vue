<template>
  <div>
    <button @click="fetchData">Fetch Data</button>
    <!-- <p v-if="data">{{ data }}</p> -->

    <!-- When read json, use 'pre' to show -->
    <pre v-if="data">{{ data }}</pre>
</div>
</template>

<script>
export default {  
  data() {
    return {
      data: null,
    };
  },
  methods: {
    // fetchData() {
    //   const response = fetch("file.txt");
    //   this.data = response;
    // }

    // async fetchData() {
    //   const response = await fetch("file.txt");
    //   this.data = await response.text();
    // }

    async fetchData() {
      const response = await fetch("bigLandMammals.json");
      this.data = await response.json();
    }
  }
};
</script> 