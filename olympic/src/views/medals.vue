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
      countryList: state => state.countryList,
      hasFetchedData: state => state.hasFetchedData,
    }),
  },
  created() {
    if (!this.hasFetchedData) {
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
    ...mapMutations(['sortByName', 'sortByGold', 'sortByTotal']),
  },
};
</script>
