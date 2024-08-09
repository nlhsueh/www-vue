<template>
    <div>
        <h2>
            {{ foodName }}
            <img src="/img_quality.svg" v-show="foodIsFavorite">
        </h2>
        <p>{{ foodDesc }}</p>
        <button @click="toggleFavorite">Favorite</button>
    </div>
</template>

<script>
export default {
    props: ['foodName','foodDesc','isFavorite'],
    data() {
        return {
            foodIsFavorite: this.isFavorite
        }
    },
    methods: {
        toggleFavorite() {
            this.$emit('toggle-favorite', this.foodName);
        }
    }
};
</script>

<style>
    img {
        height: 1.5em;
        float: right;
    }
</style>  