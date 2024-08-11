<template>
    <h1>Dynamic Components</h1>
    <p>App.vue switches between which component to show.</p>
    <p>With the &lt;KeepAlive&gt; tag the components now remember the user inputs.</p>
    <button @click="toggleValue = !toggleValue">Switch component</button>
    <KeepAlive>
      <component :is="activeComp"></component>
    </KeepAlive>
  </template>
  
  <script>
    export default {
      data () {
        return {
          toggleValue: true
        }
      },
      computed: {
        activeComp() {
          if(this.toggleValue) {
            return 'comp-one'
          }
          else {
            return 'comp-two'
          }
        }
      }
    }
  </script>
  
  <style>
    #app {
      width: 350px;
      margin: 10px;
    }
    #app > div {
      border: solid black 2px;
      padding: 10px;
      margin-top: 10px;
    }
    h2 {
      text-decoration: underline;
    }
  </style>   