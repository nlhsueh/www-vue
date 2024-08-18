import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            countryList: [],
            goldMedals: 0,
        };
    },
    mutations: {
        setCountryList(state, countryList) {
            state.countryList = countryList;
        },
        setGoldMedals(state, count) {
            state.goldMedals = count;
        },
    },
    actions: {
        async fetchMedals({ commit }) {
            // Fetch the medal data
            const data = await fetchMedalData(); // Replace with your actual data fetching logic
            commit('setCountryList', data.countryList);
            commit('setGoldMedals', data.goldMedals);
        },
        buildCountryList({ commit }, countryList) {
            // Process and commit the country list
            commit('setCountryList', countryList);
        },
    },
    getters: {
        getCountryList(state) {
            return state.countryList;
        },
        getGoldMedals(state) {
            return state.goldMedals;
        },
    },
});

export default store;
```
