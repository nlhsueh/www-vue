<template>

    <div class="container mt-3">
        <h2 class="welcome-text">歡迎來到巴黎奧運 2024</h2>
        <div>
            <router-link to="/medals" class="nav-link link-like active"> 看看目前的得獎狀況</router-link>
        </div>
        <br><br>
        <div>
            <p> This is a small project for learning Vue. See <a
                    href="https://github.com/nlhsueh/www-vue/tree/olympic07">HERE</a> for its source code</p>
        </div>
    </div>

</template>

<script>
</script>

<style>
    .welcome-text {
        color: #1a0f4b;
        /* 白色文字 */
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        /* 文字陰影 */
        animation: fadeIn 1s ease-in-out;
    }

    /* 動畫樣式，可根據需求修改 */
    @keyframes fadeIn {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }

    .link-like {
        color: #007bff;
        text-decoration: underline;
        cursor: pointer;
    }

    .link-like:hover {
        color: #0056b3;
        text-decoration: none;
    }
</style>