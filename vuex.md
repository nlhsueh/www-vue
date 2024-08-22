
## Using VUEX

If you use Vuex to manage the state of your application, you can solve the problem of sharing and updating data like `countryList` across components more efficiently. Vuex provides a centralized store for all the components in your application, which means that any data stored in Vuex can be accessed and updated from any component, ensuring consistency and reactivity across your app.

### Step-by-Step Solution Using Vuex

1. **Install Vuex** (if not already installed):
   ```bash
   npm install vuex@next
   ```

2. **Create a Vuex Store**:
   Define a Vuex store where `countryList` and other shared state variables are stored.

```javascript
// store/index.js
import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            medals: null,
            img_url: null,
            countryList: [],
            selectedCountry: "",
            goldMedals: 0,
            silverMedals: 0,
            bronzeMedals: 0,
            hasFetchedData: false, // Flag to track if fetchData has been called
        };
    },

    // Mutations are for synchronous state changes and directly modify the state.
    mutations: {
        setCountryList(state, countryList) {
            state.countryList = countryList;
        },
        setMedals(state, medals) {
            state.medals = medals;
        },
        setImgUrl(state, img_url) {
            state.img_url = img_url;
        },
        updateMedalsInStore(state, updatedCountry) {
            const index = state.countryList.findIndex(c => c.name === updatedCountry.name);
            if (index !== -1) {
                state.countryList.splice(index, 1, updatedCountry);
            }
        },
        sortByName(state) {
            state.countryList.sort((a, b) => a.name.localeCompare(b.name));
        },
        sortByGold(state) {
            state.countryList.sort((a, b) => b.gold - a.gold);
        },
        sortByTotal(state) {
            state.countryList.sort((a, b) => b.total - a.total);
        },
        setHasFetchedData(state, value) {
            state.hasFetchedData = value;
        },
    },

    // Actions are for asynchronous operations or complex logic and commit mutations to modify the state.
    actions: {
        async fetchData({ commit, state }) {
            if (state.hasFetchedData) {
                console.log('Fetch data has already been called');
                return;
            }
            try {
                const medalsResponse = await fetch("medals.json");
                const medalsData = await medalsResponse.json();
                commit('setMedals', medalsData.medals);

                const imgUrlResponse = await fetch("img_url.json");
                const imgUrlData = await imgUrlResponse.json();
                commit('setImgUrl', imgUrlData.img_url);

                // Build the country list after fetching the data
                const countryList = buildCountryList(medalsData.medals, imgUrlData.img_url);
                console.log('contryList in state', countryList);
                commit('setCountryList', countryList);
                commit('setHasFetchedData', true); // Mark data as fetched
            } catch (error) {
                console.log("Error fetching data:");
            }
        },
    },
    getters: {
        getCountryList(state) {
            return state.countryList;
        },
    },
});

export default store;
```

3. **Integrate Vuex into Your Vue Application**:
   In your main entry file (`main.js`), import the Vuex store and add it to your Vue app.

   ```javascript
   import { createApp } from 'vue';
   import App from './App.vue';
   import router from './router'; // Assuming you have a router
   import store from './store';

   const app = createApp(App);
   app.use(router);
   app.use(store);
   app.mount('#app');
   ```

4. **Access the Vuex Store in Components**:
   Now, in any component, you can access `countryList` and other state variables using Vuex. You can also dispatch actions to fetch and update data.

```javascript
import { mapState, mapActions, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapState({
      countryList: state => state.countryList,
      hasFetchedData: state => state.hasFetchedData,
    }),
  },

  created() {
    if (!this.hasFetchedData) {
      this.fetchData().then(() => {
        console.log('Data fetched, countryList is:');
        console.log(this.countryList);
      });
    }
  },

  mounted() {
    console.log('mounted is called, countryList is:');
    console.log(this.countryList);
  },
  methods: {
    ...mapActions(['fetchData']),
    ...mapMutations(['sortByName', 'sortByGold', 'sortByTotal']),

  },
};
</script>


```

5. **Ensure Reactivity**:

- Any update to `countryList` via Vuex will automatically be reactive in all components using it, ensuring that your application stays in sync without needing to manually pass data through props or use `provide/inject`.

### Advantages of Using Vuex:
- **Centralized State Management**: All your application’s state is managed in a single place, making it easier to maintain and debug.
- **Global Access**: Any component can access and update the state, making it easy to share data across your application.
- **Reactivity**: Vuex ensures that state changes are reactive, so any component using the state will automatically update when the state changes.

### Summary:
- **Vuex** provides a robust solution for managing and sharing state across components, avoiding the limitations of `provide/inject`.
- You define your shared state in a centralized store, access it via computed properties, and update it with actions and mutations.
- This approach ensures that your application’s state remains consistent, reactive, and easy to manage.


## directory

my-vue-project/
│
├── public/                     # Static assets (not processed by Webpack)
│   └── index.html              # Main HTML file
│
├── src/
│   ├── assets/                 # Project assets like images, fonts, etc.
│   │   └── logo.png
│   │
│   ├── components/             # Vue components
│   │   ├── Carousel.vue
│   │   ├── MedalCard.vue
│   │   └── Footer.vue
│   │
│   ├── router/                 # Vue Router configuration
│   │   └── index.js
│   │
│   ├── store/                  # Vuex store directory
│   │   ├── index.js            # Main Vuex store setup
│   │   ├── actions.js          # Global actions (optional)
│   │   ├── mutations.js        # Global mutations (optional)
│   │   ├── state.js            # Global state (optional)
│   │   └── modules/            # Vuex modules (optional)
│   │       └── medals.js       # Example module (can have multiple modules)
│   │
│   ├── views/                  # Vue views (pages)
│   │   ├── MedalsView.vue      # Page displaying medal information
│   │   └── UpdateMedalsView.vue# Page for updating medals
│   │
│   ├── App.vue                 # Root component
│   ├── main.js                 # Entry point, bootstraps the app
│   └── style.css               # Global styles (optional)
│
├── .gitignore                  # Git ignore rules
├── package.json                # Project metadata and dependencies
└── README.md                   # Project documentation


## mapState

The `...` in JavaScript, often referred to as the **spread syntax** or "spread operator," is used to spread or expand elements of an iterable (like an array or object) into individual elements. In the context of Vue's `computed` properties and Vuex's `mapState`, it is used to integrate or "spread" the mapped state properties into the component's `computed` properties.

### In the Given Context:
```javascript
computed: {
  ...mapState({
    countryList: (state) => state.countryList,
  }),
},
```

### What Does `...mapState` Do Here?

1. **`mapState` Function**:
   - `mapState` is a Vuex helper function that helps map state from the Vuex store to your component’s computed properties.
   - In your case, `mapState` is mapping the `countryList` from the Vuex store to a computed property called `countryList` in your component.

2. **Spread Syntax (`...`)**:
   - The spread syntax `...` is used here to "spread" the result of `mapState` into the `computed` properties of the component.
   - The result of `mapState` is an object where each key is the name of the computed property, and each value is a function that returns the corresponding state from the Vuex store.
   - By using the spread syntax, you effectively insert all the properties from the object returned by `mapState` directly into the `computed` object.

### How It Works:
- `mapState` returns an object like this:
  ```javascript
  {
    countryList: function() {
      return this.$store.state.countryList;
    }
  }
  ```
- The `...` operator spreads this object into the `computed` object, so it’s as if you had written:
  ```javascript
  computed: {
    countryList() {
      return this.$store.state.countryList;
    }
  }
  ```
- This means that `countryList` becomes a computed property in your component, and its value is automatically updated whenever the `countryList` in the Vuex store changes.

### Summary:
- The `...` (spread syntax) is used to expand the properties returned by `mapState` directly into the `computed` properties of the component.
- This makes it easier and cleaner to map Vuex state properties to your component without having to write out each computed property manually.
- It helps maintain a concise and readable code structure, especially when mapping multiple state properties.