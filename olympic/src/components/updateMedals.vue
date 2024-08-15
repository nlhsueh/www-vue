<template>
    <div class="row m-3">
        <form @submit.prevent="updateMedals">
            <div class="row m-3">
                <div class="col">
                    <select class="form-select" v-model="selectedCountry" id="country-select">
                        <option disabled value="">請選擇國家</option>
                        <option v-for="c in countryList" :key="c.name" :value="c.name">
                            {{ c.name }}
                        </option>
                    </select>
                </div>

                <div class="col">
                    <input class="form-control" type="number" v-model="goldMedals" placeholder="金牌數量" min="0">
                </div>
                <div class="col">
                    <input class="form-control" type="number" v-model="silverMedals" placeholder="銀牌數量" min="0">
                </div>
                <div class="col">
                    <input class="form-control" type="number" v-model="bronzeMedals" placeholder="銅牌數量" min="0">
                </div>
                <div class="col d-flex align-items-end">
                    <button type="submit" class="btn btn-primary w-100">更新</button>
                </div>
            </div>
        </form>
    </div>
 
</template>

<script>
export default {
    data() {
        return {
            selectedCountry:"",
            goldMedals:null,
            silverMedals:null,
            bronzeMedals:null,
        }
    },
    props: [
        'countryList'
    ],
    mounted() { // just for test
        console.log('Received countryList:', this.countryList);
    },    
    watch: {
        selectedCountry(newCountry) {
            const country = this.countryList.find(c => c.name === newCountry);
            if (country) {
                this.goldMedals = country.gold;
                this.silverMedals = country.silver;
                this.bronzeMedals = country.bronze;
            } else {
                this.goldMedals = 0;
                this.silverMedals = 0;
                this.bronzeMedals = 0;
            }
        }
    },

    methods: {
        updateMedals() {
            const country = this.countryList.find(c => c.name === this.selectedCountry);
                if (country) {
                    country.gold = this.goldMedals;
                    country.silver = this.silverMedals;
                    country.bronze = this.bronzeMedals;
                    country.total = country.gold + country.silver + country.bronze;
                }
            this.$emit('updateMedals', this.countryList);
        },
    }
};
</script>
