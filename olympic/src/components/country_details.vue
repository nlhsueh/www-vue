
<template>
    <div class="card-body">
        <button @click="goBack" class="btn btn-primary mb-3">Back to Home</button>

        <h5 class="card-title"> {{ countryName }}</h5>
        <img :src="'/img/' + countryImg" class="card-img-top">
        <div class="medals mt-2">
            <span class="medal gold">{{ gold }}</span>
            <span class="medal silver">{{ silver }}</span>
            <span class="medal bronze">{{ bronze }}</span>
        </div>
        <p class="mt-2">{{ countryDescription }}</p> 

        <updateMedals :countryList="countryList" :selectedCountryProp="countryName" @updateMedals="updateCountryMedals" />

    </div>

</template>

<script>
export default {
    data() {
        return {
            goldMedals:null,
            silverMedals:null,
            bronzeMedals:null,
        }
    },
    props: ['countryList','countryName', 'countryImg', 'gold', 'silver', 'bronze'],
    data() {
        return {
            desc: {
                Australia: "澳洲, 位於大洋洲, 人口約2,570萬, 面積約769萬平方公里。",
                Azerbaijan: "亞塞拜然, 位於西亞與東歐交界, 人口約1,000萬, 面積約8.6萬平方公里。",
                Belgium: "比利時, 位於西歐, 人口約1,150萬, 面積約3萬平方公里。",
                Brazil: "巴西, 位於南美洲, 人口約2.12億, 面積約851萬平方公里。",
                Canada: "加拿大, 位於北美洲, 人口約3,800萬, 面積約998萬平方公里。",
                China: "中國, 位於東亞, 人口約14.1億, 面積約960萬平方公里。",
                France: "法國, 位於西歐, 人口約6,700萬, 面積約55萬平方公里。",
                Germany: "德國, 位於中歐, 人口約8,300萬, 面積約35.7萬平方公里。",
                "Great Britain": "英國, 位於歐洲西北部, 人口約6,700萬, 面積約24.3萬平方公里。",
                "Hong Kong": "香港, 位於中國南方, 人口約750萬, 面積約1,100平方公里。",
                India: "印度, 位於南亞, 人口約13.9億, 面積約328萬平方公里。",
                Italy: "義大利, 位於南歐, 人口約6,000萬, 面積約30萬平方公里。",
                Japan: "日本, 位於東亞, 人口約1.26億, 面積約37.8萬平方公里。",
                Kazakhstan: "哈薩克, 位於中亞, 人口約1,900萬, 面積約272萬平方公里。",
                Moldova: "摩爾多瓦, 位於東歐, 人口約260萬, 面積約3.3萬平方公里。",
                "Republic of Korea": "南韓, 位於東亞, 人口約5,200萬, 面積約10萬平方公里。",
                "South Africa": "南非, 位於非洲南部, 人口約6,000萬, 面積約122萬平方公里。",
                Sweden: "瑞典, 位於北歐, 人口約1,000萬, 面積約45萬平方公里。",
                Turkey: "土耳其, 橫跨歐亞大陸, 人口約8,500萬, 面積約78萬平方公里。",
                "United States": "美國, 位於北美洲, 人口約3.3億, 面積約983萬平方公里。"
            }
        };
    },   
    computed: {
        countryDescription() {
            return this.desc[this.countryName] || 'Description not available'; 
        }
    },
    methods: {
        goBack() {
            this.$emit('clearSelection'); 
        },
        updateCountryMedals(countryList) {
            this.countryList = countryList;
        },
    }         
}        
</script>

<style> 
</style>    