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
import { mapState, mapActions, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapState({
        countryList: (state) => state.countryList,
        hasFetchedMedals: (state) => state.hasFetchedMedals,
    }),
  },
  created() {
    if (!this.hasFetchedMedals) {
        console.log('Call fetchMedals in medals.vue');
        this.fetchMedals();
    }
  },
  mounted() {
    console.log('mounted is called');
    console.log(this.countryList);
    console.log(this.$store.state.countryList);
  },
  methods: {
    ...mapActions(['fetchMedals']),
    ...mapMutations(['sortByName', 'sortByGold', 'sortByTotal']),
  },
  watch: {
    // This will trigger when the route changes and re-fetch the data
    '$route': 'fetchMedals',
  }  
};
</script>
