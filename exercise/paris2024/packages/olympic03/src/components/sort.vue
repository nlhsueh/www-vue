<template>
    <div class="row m-3">
        <div class="col">
            <button class="btn btn-primary" @:click="sortByName">Sort by Name</button>
            <button class="btn btn-success" @:click="sortByGold">Sort by Gold</button>
            <button class="btn btn-warning" @:click="sortByTotal">Sort by Total Medals</button>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        'CountryList'
    ],
    method: {
        sortByName() {
            this.countryList.sort((a, b) => a.name.localeCompare(b.name))
        },
        sortByGold() {
            this.countryList.sort((a, b) => b.gold - a.gold);
        },
        sortByTotal() {
            this.countryList.sort((a, b) => b.total - a.total);
        },

    }
};
</script>

<style></style>   