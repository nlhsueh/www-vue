
## 01 Component
Components in Vue lets us decompose our web page into smaller pieces that are easy to work with.

We can work with a Vue component in isolation from the rest of the web page, with its own content and logic.

A web page often consists of many Vue components.

[Vue component](https://www.w3schools.com/vue/vue_components.php)

* A component is used three times (**AppFood01**)
* Every component has its own counter
* Components with `props` are created with `v-for` (**AppFood03**)
* Component with props are created with `v-for` and `key` attributes
  * (faulty and correct examples)

## 02 Props
Props is a configuration option in Vue.

With props we can **pass data** to the components via custom attributes to the component tag.

[Vue Props](https://www.w3schools.com/vue/vue_props.php)

* Props are defined in the component, as an array
* Two prop attributes are defined in the component
* A boolean prop is used to define whether a food is favorite or not
* The *foodIsFavorite* data property can be toggled with a button

## 03 v-for
Components can be reused with v-for to generate many elements of the same kind.

When generating elements with v-for from a component, it is also very helpful that props can be assigned dynamically based on values from an array.

[Vue v-for Components](https://www.w3schools.com/vue/vue_v-for-comp.php)


## 04 Emit

With the built-in `$emit()` method in Vue we can create a **custom event** in the child component that can be captured in the parent element.

Props are used to send data from the parent element to the child component, and $emit() is used to do the opposite: to pass information from the child component to the parent.

[Vue $emit() Method](https://www.w3schools.com/vue/vue_emit.php)

Examples: 
* The component emits the boolean favorite status
* The emitted boolean favorite status is received by App.vue
* The emitted boolean favorite status is received and updated in App.vue