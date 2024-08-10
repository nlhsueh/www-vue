<template>
    <h1>Food</h1>
    <p>The toggle button on the component emits an event to the parent "App.vue". The favorite status is modified in
        "App.vue", and the updated status is sent back to the component so that the image is toggled to reflect the favorite
        status.</p>
    <p>The result looks exactly like before, but now the favorite staus is modified where it should be in "App.vue" instead
        of in the "FoodItem.vue" component.</p>
    <div id="wrapper">
        <food-item v-for="x in foods" :key="x.name" :food-name="x.name" :food-desc="x.desc" :is-favorite="x.favorite"
            @toggle-favorite="receiveEmit" />
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            foods: [
                { name: 'Apples', desc: 'Apples are a type of fruit that grow on trees.', favorite: true },
                { name: 'Pizza', desc: 'Pizza has a bread base with tomato sauce, cheese, and toppings on top.', favorite: false },
                { name: 'Rice', desc: 'Rice is a type of grain that people like to eat.', favorite: false },
                { name: 'Fish', desc: 'Fish is an animal that lives in water.', favorite: true },
                { name: 'Cake', desc: 'Cake is something sweet that tates good.', favorite: false }
            ]
        };
    },
    methods: {
        receiveEmit(foodId) {
            let foundFood = this.foods.find(
                food => food.name === foodId
            );
            foundFood.favorite = !foundFood.favorite;
        }
    }
}
</script>
  
<style>
#wrapper {
    display: flex;
    flex-wrap: wrap;
}

#wrapper>div {
    border: dashed black 1px;
    flex-basis: 120px;
    margin: 10px;
    padding: 10px;
    background-color: lightgreen;
}
</style>  