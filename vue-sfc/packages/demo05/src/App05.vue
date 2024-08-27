<template>
  <h3>Todo List</h3>
  <p>In this example, the style attribute falls through from App.vue into the li element which is the components root element.</p>
  <ul>
    <todo-item
      v-for="x in items"
      :key="x"
      :item-name="x"
      style="background-color: lightgreen;"
    />
  </ul>
  <input placeholder="Add things to do here" v-model="newItem" @keydown.enter="addItem">
  <button @click="addItem">Add</button>
</template>

<script>
export default {
  data() { 
    return {
      newItem: '',
      items: ['Buy apples','Make pizza','Mow the lawn']
    };
  },
  methods: {
    addItem() {
      this.items.push(this.newItem);
      this.newItem = '';
    }
  }
}
</script>

<style>
  ul {
    width: 150px;
  }
</style>    