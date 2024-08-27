

## 05 Fallthrough attributes

A component can be called with attributes that are not declared as props, and they will simply fall through to the root element in the component.

With fallthrough attributes you get a better overview from the parent where the component is created, and it simplifies our code because we don't need to declare the attribute as a prop.

Typical attributes used to fall through are **class**, **style** and **v-on**.

```javascript
// App:
    <ul>
        <todo-item
          v-for="x in items"
          :key="x"
          :item-name="x"
          style="background-color: lightgreen;"
        />
    </ul>
// Component:
    <li>{{ itemName }}</li>
```  
[W3school](https://www.w3schools.com/vue/vue_fallthru-attr.php)

## 06 Scoped styling

Styling defined inside the `<style>` tag in a component, or in App.vue, is actually available globally in all components.

To keep the styling limited locally to just the component, we can use the scope attribute on that component: `<style scoped>`

```javascript
    <style scoped>
        p {
            background-color: pink;
            width: 150px;
        }
    </style>  
```

[W3school](https://www.w3schools.com/vue/vue_scoped-styling.php)

## 07 Local components

The way we have included components so far makes them accessible from all *.vue files in a project.

Components can be made to be local, meaning that they are only accessible inside a specific *.vue file.

```javascript
// In App07.vue:
    <script>
      import CompOne from './components/Comp07b.vue';

      export default {
        components: {
          'comp-one': CompOne
        }
      }
    </script>
```

[W3school](https://www.w3schools.com/vue/vue_local-components.php)

## 08 Slot

Slots are a powerful feature in Vue that allow for more flexible and reusable components.

We use slots in Vue to send content from the parent into the `<template>` of a child component.
* 08a: 透過 slot 來傳遞 tag 的內容
```javascript
// App:
    <slot-comp>Hello World!</slot-comp>
// Component `slot-comp`:
    <div>
        <p>SlotComp.vue</p>
        <slot></slot>
    </div>
```
* 08b: slot 有 v-for 的屬性; slot 內可以有很多元素
```javascript
App:
    <slot-comp v-for="x in foods">
      <img v-bind:src="x.url">
      <h4>{{x.name}}</h4>
      <p>{{x.desc}}</p>
    </slot-comp>
Component:
    <div>
        <slot></slot>
    </div>
```
* 08c: 有 slot name

```javascript
// App:

  <slot-comp v-slot:bottomSlot>'Hello!'</slot-comp>
  <slot-comp       #bottomSlot>'Hello!'</slot-comp>

// Component:
  <h3>Component</h3>
  <div>
      <slot name="topSlot"></slot>
  </div>
  <div>
      <slot name="bottomSlot"></slot>
  </div>
```
* 08d: Scoped Slot with an Array of Objects: component 提供 local 資料，以及透過 v-bind 綁定

[Slot](https://www.w3schools.com/vue/vue_slots.php)

## 09 Dynamic components

Dynamic Components can be used to flip through pages within your page, like tabs in your browser, with the use of the 'is' attribute.

* 09a: 使用 `<component>` 作為一個錨點，配合 `is` 來決定要使用哪一個元件。
  * 如果沒有使用 `KeepAlive`, 元件不會保存他的狀態
  * 可以透過 include, exclude, max 來設定要記憶的元件、不要記憶的元件、最多記憶個數的元件

[Dynamic component](https://www.w3schools.com/vue/vue_dynamic-components.php)

## 10 Teleport

The Vue <Teleport> tag is used to move content to a different place in the DOM structure.

[Teleport](https://www.w3schools.com/vue/vue_teleport.php)

## HTTP Requests

The HTTP request is a part of the communication between a client and a server.

The client sends an HTTP request to the server, which handles the request and returns an HTTP response.

* 11a: 透過 `fetch` 來進行 HTTP GET request
  * `async` and `await`: to read files 
  * `pre` and `/pre`: show the json file content
* 11b: 透過 `response.json()` to transform to object

```javascript

    async fetchData() {
      const response = await fetch("bigLandMammals.json");
      const data = await response.json();
      const randIndex = Math.floor(Math.random()*data.results.length);
      this.randomMammal = data.results[randIndex];
    }
```