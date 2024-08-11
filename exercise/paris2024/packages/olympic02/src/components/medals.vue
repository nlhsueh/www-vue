
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
        props: ['countryList'],
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