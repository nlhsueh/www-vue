
<template>
    <div class="container mt-3">
        <sort @sortByName="sortByName" @sortByGold="sortByGold" @sortByTotal="sortByTotal" />

        <div class="row justify-content-center" id="medalTable">
            <div v-for="country in actualCountryList" :key="country.name" class="country-card col-lg-2 col-md-3 col-sm-4 col-6">
                <c_medal :countryName="country.name" :countryImg="country.img" :gold="country.gold" :silver="country.silver"
                    :bronze="country.bronze" />
            </div>
        </div>

    </div>
</template>
  
<script>

export default {
    inject: ['countryList'],
    computed: {
      actualCountryList() {
          return this.countryList();
      }
    },    
    methods: {
        sortByName() {
            this.actualCountryList.sort((a, b) => a.name.localeCompare(b.name))
        },
        sortByGold() {
            this.actualCountryList.sort((a, b) => b.gold - a.gold);
        },
        sortByTotal() {
            this.actualCountryList.sort((a, b) => b.total - a.total);
        },
    },
    mounted() {
        console.log('=== mounted() in medals ===');
        console.log('actualCountryList: ', this.actualCountryList);
    }
}
</script>

  
<style></style>  