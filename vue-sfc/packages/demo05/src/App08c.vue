<template>
  <h1>App.vue</h1>
  <p>The component has two &lt;div&gt; tags with one &lt;slot&gt; in each.</p>
  <slot-comp v-slot:bottomSlot>'Hello!'</slot-comp>

  <!-- 可以用 #來做快捷鍵 -->
  <slot-comp #bottomSlot>'Hello! (Shorthand)'</slot-comp>

</template>

<script></script>

<style>
  #app {
    width: 500px;
  }
</style>                  