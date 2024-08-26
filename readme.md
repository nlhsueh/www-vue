
## New function in this version (Olympic07)

* Using VUEX
* Publish to Github pages:

> [https://nlhsueh.github.io/www-vue](https://nlhsueh.github.io/www-vue)

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


### directory

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


### mapState

The `...` in JavaScript, often referred to as the **spread syntax** or "spread operator," is used to spread or expand elements of an iterable (like an array or object) into individual elements. In the context of Vue's `computed` properties and Vuex's `mapState`, it is used to integrate or "spread" the mapped state properties into the component's `computed` properties.

#### In the Given Context:
```javascript
computed: {
  ...mapState({
    countryList: (state) => state.countryList,
  }),
},
```

#### What Does `...mapState` Do Here?

1. **`mapState` Function**:
   - `mapState` is a Vuex helper function that helps map state from the Vuex store to your component’s computed properties.
   - In your case, `mapState` is mapping the `countryList` from the Vuex store to a computed property called `countryList` in your component.

2. **Spread Syntax (`...`)**:
   - The spread syntax `...` is used here to "spread" the result of `mapState` into the `computed` properties of the component.
   - The result of `mapState` is an object where each key is the name of the computed property, and each value is a function that returns the corresponding state from the Vuex store.
   - By using the spread syntax, you effectively insert all the properties from the object returned by `mapState` directly into the `computed` object.

#### How It Works:
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

#### Summary:
- The `...` (spread syntax) is used to expand the properties returned by `mapState` directly into the `computed` properties of the component.
- This makes it easier and cleaner to map Vuex state properties to your component without having to write out each computed property manually.
- It helps maintain a concise and readable code structure, especially when mapping multiple state properties.


## How to deploy to GitHub Pages?

To deploy your Vue project to GitHub Pages, setting the root to the `dist` directory, you generally follow these steps. It looks like you might be encountering issues because of how GitHub Pages works or possibly due to the `.gitignore` file configuration. Let's go through the correct process:

### Step 1: Ensure `dist/` is not in `.gitignore`
If you want to deploy the `dist/` directory to GitHub Pages, you need to ensure that it is not ignored in your `.gitignore` file. Comment out or remove the line that ignores `dist/`:

### Step 2: Build the Project
Build your Vue project to generate the `dist/` directory:

```bash
npm run build
```

This command will create the `dist/` directory containing the production-ready files.

### Step 3: Deploy to GitHub Pages
You have two main approaches to deploy your `dist/` directory to GitHub Pages:

#### Method 1: Deploying from `dist/` to `gh-pages` branch
You can push the contents of the `dist/` directory to the `gh-pages` branch. Here's a simple way to do it:

1. Install the `gh-pages` package globally if you haven't already:

   ```bash
   npm install -g gh-pages
   ```

2. Deploy the `dist/` folder to GitHub Pages:

   ```bash
   npx gh-pages -d dist
   ```

This command will push the contents of the `dist/` directory to a `gh-pages` branch, which GitHub Pages will then serve.

#### Method 2: Use GitHub Actions to Automatically Deploy
You can automate the deployment process using GitHub Actions.

1. Create a `.github/workflows/deploy.yml` file in your project.

2. Add the following content to automate the build and deployment:

   ```yaml
   name: Deploy Vue to GitHub Pages

   on:
     push:
       branches:
         - main  # Change this to your main branch

   jobs:
     build:
       runs-on: ubuntu-latest

       steps:
       - name: Checkout code
         uses: actions/checkout@v2

       - name: Install dependencies
         run: npm install

       - name: Build project
         run: npm run build

       - name: Deploy to GitHub Pages
         uses: peaceiris/actions-gh-pages@v3
         with:
           github_token: ${{ secrets.GITHUB_TOKEN }}
           publish_dir: ./dist
   ```

3. Commit and push this workflow file. GitHub Actions will automatically build your project and deploy the `dist/` directory to the `gh-pages` branch every time you push to your main branch.

### Step 4: Set GitHub Pages Source
After deploying, go to your repository's "Settings" on GitHub:

- Scroll down to the "GitHub Pages" section.
- Ensure the source is set to the `gh-pages` branch (or the `dist/` directory if using another method like GitHub Actions).

### Conclusion
By using either `gh-pages` or GitHub Actions, you can deploy your Vue project's `dist/` directory to GitHub Pages. Ensure that `dist/` is not ignored in your `.gitignore` file if you choose to manually deploy, and set the appropriate branch as the source in GitHub Pages settings.