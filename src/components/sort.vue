<template>
    <div class="row m-3">
        <div class="col">
            <button class="btn btn-primary" @click="sortByName">Sort by Name</button>
            <button class="btn btn-success" @click="sortByGold">Sort by Gold</button>
            <button class="btn btn-warning" @click="sortByTotal">Sort by Total Medals</button>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        sortByName() {
            this.$emit('sortByName');
        },
        sortByGold() {
            this.$emit('sortByGold');
        },
        sortByTotal() {
            this.$emit('sortByTotal');
        },
    }
};
</script>

<style>
.btn {margin-right: 10px;}

</style>   