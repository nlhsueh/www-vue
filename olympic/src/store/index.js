import { createStore } from 'vuex';

// Define buildCountryList as a standalone function
function buildCountryList(medals, img_url) {
    if (!medals) {
        console.error('Medals data is not available');
        return [];
    }

    return medals.map(medal => {
        const [name, gold, silver, bronze] = medal.split(' ');
        const formattedName = name.replace(/-/g, ' ');

        return {
            name: formattedName,
            gold: parseInt(gold, 10),
            silver: parseInt(silver, 10),
            bronze: parseInt(bronze, 10),
            total: parseInt(gold, 10) + parseInt(silver, 10) + parseInt(bronze, 10),
            img: img_url[formattedName.replaceAll(' ', '_')],
        };
    });
}

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
                const medalsResponse = await fetch(`${import.meta.env.BASE_URL}medals.json`);
                const medalsData = await medalsResponse.json();
                commit('setMedals', medalsData.medals);

                const imgUrlResponse = await fetch(`${import.meta.env.BASE_URL}img_url.json`);
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
