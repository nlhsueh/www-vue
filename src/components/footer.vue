<template>
    <footer class="bg-dark text-white text-center text-lg-start mt-5">
        <div class="text-center p-3 bg-dark" style="color: white;">
            © 2024 Copyright - Version {{ version }}
        </div>
    </footer>
</template>

<script>
    import { version } from '/package.json';

    export default {
        data() {
            return {
                version,
            };
        },
    };
</script>

<style></style>