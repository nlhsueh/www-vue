<template>
    <div id="titleCarousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="/img/banner01.png" class="d-block w-100" alt="Slide 1">
                <div class="carousel-caption d-none d-md-block">
                    <h1 class="text-white"> {{olympic_title_en}} </h1>
                </div>
            </div>
            <div class="carousel-item">
                <img src="/img/banner02.png" class="d-block w-100" alt="Slide 2">
                <div class="carousel-caption d-none d-md-block">
                    <h1 class="text-white"> {{olympic_title_tw}}  </h1>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#titleCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#titleCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            olympic_title_en: 'Paris Olympic 2024',
            olympic_title_tw: '巴黎奧運- 2024'
        }
    },
};
</script>

<style>
    .carousel-item img {
        width: 1200px;
        height: 300px;
        object-fit: cover;
    }
    .carousel-caption h1 {
            font-size: 3em;
            text-shadow: 2px 2px 4px black;
        }

        @media (max-width: 1200px) {
            .carousel-caption h1 {
                font-size: 2.5em;
            }
        }

        @media (max-width: 992px) {
            .carousel-caption h1 {
                font-size: 2em;
            }
        }

        @media (max-width: 768px) {
            .carousel-caption h1 {
                font-size: 1.5em;
            }
        }

        @media (max-width: 576px) {
            .carousel-caption h1 {
                font-size: 1.2em;
            }
        }    
</style>    