<template>
    <div>
        <h2>{{ foodName }}</h2>
        <p>{{ foodDesc }}</p>
    </div>
</template>

<script>
export default {
    props: [
        'foodName',
        'foodDesc'
    ]
};
</script>

<style></style>        