<template>
    <div class="container mt-3">
        <sort @sortByName="sortByName" @sortByGold="sortByGold" @sortByTotal="sortByTotal" />

        <div class="row justify-content-center" id="medalTable">
            <div v-for="country in countryList" :key="country.name" class="country-card col-lg-2 col-md-3 col-sm-4 col-6">
                <c_medal :countryName="country.name" :countryImg="country.img" :gold="country.gold" :silver="country.silver"
                    :bronze="country.bronze" />
            </div>
        </div>
    </div>
</template>
  
<script>
// mapState is a Vuex helper function that allows you to easily map state properties from the Vuex store to computed properties in your Vue components. This makes it more convenient to access and use the store's state within your components without manually writing out computed properties for each piece of state you want to access.

import { mapState, mapActions, mapMutations } from 'vuex';

export default {
  computed: {
    // ... is a spread operator in Javascript
    ...mapState({
      countryList: state => state.countryList,
      hasFetchedData: state => state.hasFetchedData,
    }),
    // Original code without mapState:
    // countryList() {
    //   return this.$store.state.countryList;
    // },
    // hasFetchedData() {
    //   return this.$store.state.hasFetchedData;
    // }
  },

  created() {
    if (!this.hasFetchedData) {
      // The then() method is called on this promise. The callback function inside then() will be executed once the fetchData promise resolves, indicating that the data has been successfully fetched.
      this.fetchData().then(() => {
        console.log('Data fetched, countryList is:');
        console.log(this.countryList);
      });
    }
  },

  mounted() {
    console.log('mounted is called, countryList is:');
    console.log(this.countryList);
  },
  methods: {
    ...mapActions(['fetchData']),
    // Original code:
    //  fetchData() {
    //    return this.$store.dispatch('fetchData');
    //  },
    ...mapMutations(['sortByName', 'sortByGold', 'sortByTotal']),
    // Original
    // sortByName() {
    //   return this.$store.commit('sortByName');
    // },
    // sortByGold() {
    //   return this.$store.commit('sortByGold');
    // },
    // sortByTotal() {
    //   return this.$store.commit('sortByTotal');
    // }

  },
};
</script>
