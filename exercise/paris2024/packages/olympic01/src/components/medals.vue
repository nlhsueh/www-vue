
<template>
    <div class="row justify-content-center" id="medalTable">
        <div class="country-card col-lg-2 col-md-3 col-sm-4 col-6" v-for="country in countryList">
            <div class="card-body">
                <h5 class="card-title"> {{country.name}}</h5>
                <img :src="'/img/' + country.img" class="card-img-top">
                <div class="medals mt-2">
                    <span class="medal gold">{{country.gold}}</span>
                    <span class="medal silver">{{country.silver}}</span>
                    <span class="medal bronze">{{country.bronze}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                medals: [
                    "United-States 3 8 9",
                    "France 5 8 3",
                    "Japan 6 2 4",
                    "China 5 5 2",
                    "Great-Britain 2 5 3",
                    "Australia 5 4 0",
                    "Republic-of-Korea 5 3 1",
                    "Italy 2 3 3",
                    "Canada 2 1 2",
                    "Hong-Kong 2 0 1",
                    "Kazakhstan 1 0 2",
                    "South-Africa 1 0 2",
                    "Brazil 0 1 2",
                    "Sweden 0 1 2",
                    "Germany 2 0 0",
                    "Belgium 1 0 1",
                    "Turkey 0 1 1",
                    "India 0 0 2",
                    "Moldova 0 0 2",
                    "Azerbaijan 1 0 0"
                ],
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
                countryList: [],
                selectedCountry: "",
                goldMedals: 0,
                silverMedals: 0,
                bronzeMedals: 0,
            }
        },
        created() {
            this.build_country_list();
            console.log(this.countryList);
        },
        methods: {
            build_country_list() {
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
            },
        }
    }         
</script>

<style>  
    .country-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid #ddd;
        border-radius: 8px;
        height: 300px;
        margin: 10px;
        padding: 10px;
    }

    .card-img-top {
        width: 100px;
        height: auto;
        margin-bottom: 10px;
    }

    .card-body {
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
    }

    .medal {
        display: inline-block;
        width: 40px;
        height: 40px;
        line-height: 40px;
        border-radius: 4px;
        margin: 0 5px;
        color: black;
        font-size: 1.2em;
    }

    .gold {
        background-color: #FFD700;
    }

    .silver {
        background-color: #C0C0C0;
    }

    .bronze {
        background-color: #CD7F32;
    }
</style>    