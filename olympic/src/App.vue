
<template>
    <carousel />

    <ul class="nav">
        <li class="nav-item">
            <router-link to="/home" class="nav-link active">HOME</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/medals" class="nav-link active">Medals</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/updateMedals" class="nav-link">Update Medals</router-link>
        </li>
    </ul>

    <div>
        <router-view></router-view>
    </div>

    <paris_footer />
</template>
  
<script>

export default {
    data() {
        return {
            medals: null,
            img_url: null,
            countryList: [
                { 'gold': 12, 'silver': 13, 'broze': 20, },
            ],
        };
    },
    async created() {
        await this.fetch_data();
        this.build_country_list();
    },
    provide() {
        return {
            countryList: () => this.countryList,
        }
    },
    methods: {
        async fetch_data() {
            let response = await fetch("medals.json");
            let data = await response.json();
            this.medals = data.medals;
            response = await fetch("img_url.json");
            data = await response.json();
            this.img_url = data.img_url;
        },
        build_country_list() {
            if (!this.medals || !this.img_url) {
                console.log('Medals/img_url are not built');
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
            // console.log('country list: ', this.countryList);
        },
    },
}
</script>