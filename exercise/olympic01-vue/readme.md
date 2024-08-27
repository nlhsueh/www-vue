
## olympic01 SFC (single file component)
* 使用 Vue component, 改寫 olympic 的版本
* 不需要排序與更新獎牌數

## olympic02 props
* 透過 prop 傳遞參數給 medals.vue

## olympic03 emit
* 增加 sort.vue, 依據不同的方式進行排序
  * 使用 emit 讓 sort 回傳訊息給 App.vue
* 增加 updateMedals.vue, 可以選擇國家，修改金銀銅的數量

## olympic04 v-for
* 修改 medals 成為 c_medal, 也就是只呈現一個國家的樣貌，把列出全部樣貌的權限回到 App 上

## olympic05 read json
* 將獎牌資訊存到 json file, 透過 http fetch 來取得獎牌資訊

## olympic06
* router
* components communicate with provide/inject

```javascript
// main.js
  // import creatRouter, createWebHistory
  import { createRouter, createWebHistory } from 'vue-router'
  ...

  // createRouter
  const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/medals', component: medals },
        { path: '/updateMedals', component: updateMedals },
    ]
  });

  // use router and register components
  app.use(router);
  app.component('carousel', carousel);
  app.component('sort', sort);
  ...

// App.vue
  // design the router-link and router-view section
  <template>
      <carousel />
      <ul class="nav">
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

  ...
  export default {
      ...
      // share courtyList to other components
      provide() {
        return {
          // use the lazy evaluation
          countryList: () => this.countryList,
        }
    }
  ...

// medals.vue 
  export default {
    // import the countryList by inject
    inject: ['countryList'],

    // when the countryList changes, will react
    computed: {
      actualCountryList() {
          return this.countryList();
      }
    },    
  ...

// updateMedals.vue
  export default {
    inject: ['countryList'],
    computed: {
      actualCountryList() {
          return this.countryList();
      }
    },   
  ...
```

### Reactivity
The difference between `provide` methods that use `() => this.countryList` and simply `this.countryList` lies in the way Vue handles reactivity and the timing of when the data is accessed or updated.

#### 1. **Using `this.countryList` Directly:**
```javascript
provide() {
  return {
    countryList: this.countryList,
  }
}
```

#### Explanation:
- **Static Reference**: When you provide `this.countryList` directly, Vue provides a static reference to whatever `countryList` contains at the time the `provide` method is executed.
- **Reactivity**: If `this.countryList` is a reactive property (e.g., defined in `data`), changes to `this.countryList` will still be reactive in the parent component. However, since the provided value is a static reference, the child components will only reactively update if they directly reference the same object or array. If `this.countryList` is reassigned (i.e., replaced with a new array or object), the child components will not automatically get the new reference.

#### When to Use:
- This approach works well when you want to provide a reactive data structure (like an object or array) that child components will observe reactively. However, it might lead to issues if `this.countryList` is reassigned to a completely new value, as the child components may not automatically get the new reference.

### 2. **Using `() => this.countryList`:**
```javascript
provide() {
  return {
    countryList: () => this.countryList,
  }
}
```

#### Explanation:
- **Lazy Evaluation (Function Reference)**: By using a function like `() => this.countryList`, you're providing a function that returns the current value of `this.countryList` whenever it's called. This allows child components to always access the latest value of `countryList` as it exists at the moment of the call.
- **Reactivity**: If `countryList` is updated or reassigned in the parent component, child components will always receive the current value when they call the provided function. This ensures that even if `countryList` is replaced with a new value, the child components will have access to the updated value.

#### When to Use:
- This approach is particularly useful when `countryList` might be reassigned or when you want to ensure that child components always access the most up-to-date value, even if it changes after the parent component has been created.

#### Summary:
- **`this.countryList`**: Provides a direct reference to the data at the time of provisioning. The data is reactive, but if the reference changes (e.g., reassigned), the child components may not see the new data automatically.
- **`() => this.countryList`**: Provides a function that allows child components to retrieve the current value of `countryList` whenever they access it, ensuring they always get the most recent value.

In general, using `() => this.countryList` is more flexible and ensures that child components stay in sync with any changes to `countryList`, especially if there's a possibility of reassignment.

### history in router

In the context of Vue Router, the `history` option in `createRouter` specifies the routing mode your application will use to manage the navigation history. The `history` option can be set to different types of history modes, with the most common being `createWebHistory` and `createWebHashHistory`.

#### `history` in `createRouter`

- **Purpose**: The `history` option defines how the URL will be managed in your application. It controls how the router interprets and updates the browser's address bar as the user navigates between different routes in your Vue application.

#### Types of History Modes:

1. **`createWebHistory()`**:
   - **Description**: This uses the HTML5 History API (specifically, `pushState` and `replaceState`) to create clean URLs without a hash (`#`) symbol. The URL path looks like a traditional URL structure (e.g., `https://example.com/medals`).
   - **Use Case**: Use `createWebHistory` when you want clean, user-friendly URLs that look like traditional paths in a website.
   - **Requirements**: This mode requires proper server configuration. Specifically, the server must be configured to serve the `index.html` file for all routes, as the server needs to handle the case where a user refreshes the page or directly navigates to a URL.

2. **`createWebHashHistory()`**:
   - **Description**: This mode uses the hash (`#`) portion of the URL to simulate full URLs, so that the page doesn't reload when the URL changes. The URL will look something like `https://example.com/#/medals`.
   - **Use Case**: Use `createWebHashHistory` when you don't want to or cannot configure the server to handle HTML5 history mode. It works out of the box in any environment because everything after the `#` symbol is handled by the client-side application.
   - **No Server Configuration Needed**: Because the part after `#` is not sent to the server, it works regardless of the server configuration.

3. **`createMemoryHistory()`**:
   - **Description**: This mode is typically used for server-side rendering (SSR) or testing. It keeps the history of your navigation in memory, without interacting with the browser's URL.
   - **Use Case**: Mainly for SSR or when you don't need to manipulate the browser’s URL (like in some testing scenarios).

#### Summary
- **`createWebHistory()`**: Clean URLs without hashes, requiring server support.
- **`createWebHashHistory()`**: URLs with hashes, works without server configuration.
- **`createMemoryHistory()`**: Used for SSR or testing.

In your code:
```javascript
const router = createRouter({
  history: createWebHistory(), // This sets up HTML5 history mode for clean URLs
  routes: [
      { path: '/medals', component: medals },
      { path: '/updateMedals', component: updateMedals },
  ]
});
```
You're using `createWebHistory()`, which means your app will have clean, hash-free URLs, and you'll need to ensure your server is configured to handle all paths by serving your `index.html` for any unmatched routes.