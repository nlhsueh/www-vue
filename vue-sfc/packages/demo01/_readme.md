
## 01 Component
Components in Vue lets us decompose our web page into smaller pieces that are easy to work with.

We can work with a Vue component in isolation from the rest of the web page, with its own content and logic.

A web page often consists of many Vue components.

[Vue component](https://www.w3schools.com/vue/vue_components.php)

Example:
* A component is used three times (**AppFood01**)
  * 01a: a component can have its template and data
  * 01b: a component can have its method (click)

## 02 Props
Props is a configuration option in Vue.

With props we can **pass data** to the components via custom attributes to the component tag.

Example:
* An App can send properties (props) to the components (**AppFood02a**)
  * The App side:
```javascript
// App side:

    <food-item food-name="Apples" />

// The component side:
    <template>
        <div>
            <h2>{{ foodName }}</h2>
        </div>
    </template>

    <script>
    export default {
        props: [
            'foodName'
        ]
    };
</script>
```
Example:
* Two more properties are ok (**AppFood02b**)
* Can send a v-bind variable to the component (**AppFood02c**)
* Can set the props's type and if they are `required` (**AppFood02d**)
```javascript
export default {
    props: {
        foodName: {
            type: String,
            required: true
        },
        foodDesc: {
            type: String,
            required: false,
            default: 'This is the default description.'
        },
        isFavorite: {
            type: Boolean,
            required: false,
            default: false
        }
    }
};
```
* The component can change the value by calling method (**AppFood02e**)

[Vue Props](https://www.w3schools.com/vue/vue_props.php)

## 03 v-for
Components can be reused with `v-for` to generate many elements of the same kind.

When generating elements with `v-for` from a component, it is also very helpful that props can be assigned dynamically based on values from an array.

Example:
* Components with `props` are created with `v-for` (**AppFood03a**)
* Click to like the food, and click to un-like the food (**AppFood03b**)
* Component with props are created with `v-for` and `key` attributes
  * (faulty and correct examples) (**AppFood03c**)

If we modify the array after the elements are created with v-for, errors can emerge because of the way Vue updates such elements created with v-for. Vue reuses elements to optimize performance, so if we remove an item, already existing elements are reused instead of recreating all elements, and element properties might not be correct anymore.

The reason for elements being reused incorrectly is that elements do not have a unique identifier, and that is exactly what we use the `key` attribute for: to let Vue tell the elements apart.

[Vue v-for Components](https://www.w3schools.com/vue/vue_v-for-comp.php)

## 04 Emit

With the built-in `$emit()` method in Vue we can create a **custom event** in the child component that can be captured in the parent element.

Props are used to send data from the parent element to the child component, and `$emit()` is used to do the opposite: to pass information from the child component to the parent.

[Vue $emit() Method](https://www.w3schools.com/vue/vue_emit.php)

Examples: 
* The component `emits` the boolean favorite status (**AppFood04a**)
* The customerized event and the data back to App (**AppFood04b**)
```javascript
// Component:
  methods: {
      toggleFavorite() {
          this.$emit('toggle-favorite', this.foodName);
      }
  }
// App:
  methods: {
    receiveEmit(foodId) {
      alert( 'You clicked: ' + foodId );
    }
  }
```    
* The emitted boolean favorite status is received and updated in App.vue (**AppFood04c**)
```javascript
// App:
  methods: {
      receiveEmit(foodId) {
          let foundFood = this.foods.find(
              food => food.name === foodId
          );
          foundFood.favorite = !foundFood.favorite;
      }
  }
// Component:
  methods: {
      toggleFavorite() {
          this.$emit('toggle-favorite', this.foodName);
      }
  }
```