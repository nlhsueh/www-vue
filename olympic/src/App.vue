
<template>
    <carousel />

    <div class="container mt-3">
        <sort @sortByName="sortByName" @sortByGold="sortByGold" @sortByTotal="sortByTotal" />

        <updateMedals :countryList="countryList" @updateMedals="updateMedals" />

        <div class="row justify-content-center" id="medalTable">
            <div v-for="country in countryList" :key="country.name" class="country-card col-lg-2 col-md-3 col-sm-4 col-6">
                <c_medal :countryName="country.name" :countryImg="country.img" :gold="country.gold" :silver="country.silver"
                    :bronze="country.bronze" />
            </div>
        </div>


        <paris_footer />
    </div>
</template>
  
<script>
import UpdateMedals from './components/updateMedals.vue';

export default {
    data() {
        return {
            medals: null,
            img_url: {
                Australia: "australia.png",
                Azerbaijan: "azerbaijan.png",
                Belgium: "belgium.png",
                Brazil: "brazil.png",
                Canada: "canada.png",
                China: "china.png",
                France: "france.png",
                Germany: "germany.png",
                Great_Britain: "great-britain.png",
                Hong_Kong: "hong-kong.png",
                India: "india.png",
                Italy: "italy.png",
                Japan: "japan.png",
                Kazakhstan: "kazakhstan.png",
                Moldova: "moldova.png",
                Republic_of_Korea: "skorea.png",
                South_Africa: "south-africa.png",
                Sweden: "sweden.png",
                Turkey: "turkey.png",
                United_States: "united-states.png"
            },
            countryList: [
            ],
            selectedCountry: "",
            goldMedals: 0,
            silverMedals: 0,
            bronzeMedals: 0,
        };
    },
    async created() {
        await this.fetch_medals();
        this.build_country_list();
        console.log(this.countryList);
    },
    methods: {
        async fetch_medals() {
            const response = await fetch("medals.json");
            const data = await response.json();
            this.medals = data.medals;
        },
        build_country_list() {
            if (!this.medals) {
                console.log('Medals is not built');
                return;
            }
            this.countryList = this.medals.map(medal => {
                const [name, gold, silver, bronze] = medal.split(' ');
                return {
                    name: name.replace(/-/g, ' '),
                    gold: parseInt(gold),
                    silver: parseInt(silver),
                    bronze: parseInt(bronze),
                    total: parseInt(gold) + parseInt(silver) + parseInt(bronze),
                    img: this.img_url[name.replaceAll('-', '_')],
                };
            });
            console.log('country list: ', this.countryList);
        },
        sortByName() {
            this.countryList.sort((a, b) => a.name.localeCompare(b.name))
        },
        sortByGold() {
            this.countryList.sort((a, b) => b.gold - a.gold);
        },
        sortByTotal() {
            this.countryList.sort((a, b) => b.total - a.total);
        },
        updateMedals(countryList) {
            this.countryList = countryList;
        }
    }
}
</script>

  
<style></style>  