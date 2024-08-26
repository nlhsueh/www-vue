
<template>
    <carousel />

    <ul class="nav">
        <li class="nav-item">
            <router-link to="/" class="nav-link active">HOME</router-link>
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
</script>

  
<style></style>  