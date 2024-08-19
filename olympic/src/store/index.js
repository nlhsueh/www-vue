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
            img_url: {
                Australia: "australia.png",
                Azerbaijan: "azerbaijan.png",
                Belgium: "belgium.png",
                Brazil: "brazil.png",
                Canada: "canada.png",
                China: "china.png",
                France: "france.png",
                Germany: "germany.png",
                Great_Britain: "great-britain.png",
                Hong_Kong: "hong-kong.png",
                India: "india.png",
                Italy: "italy.png",
                Japan: "japan.png",
                Kazakhstan: "kazakhstan.png",
                Moldova: "moldova.png",
                Republic_of_Korea: "skorea.png",
                South_Africa: "south-africa.png",
                Sweden: "sweden.png",
                Turkey: "turkey.png",
                United_States: "united-states.png"
            },
            countryList: [],
            selectedCountry: "",
            goldMedals: 0,
            silverMedals: 0,
            bronzeMedals: 0,
            hasFetchedMedals: false, // Flag to track if fetchMedals has been called
        };
    },
    mutations: {
        setCountryList(state, countryList) {
            state.countryList = countryList;
        },
        setMedals(state, medals) {
            state.medals = medals;
        },
        updateMedalsInStore(state, updatedCountry) {
            const index = state.countryList.findIndex(c => c.name === updatedCountry.name);
            console.log('Updated country list', updatedCountry);
            if (index !== -1) {
                state.countryList.splice(index, 1, updatedCountry);
                console.log('State country list', state.countryList);
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
        setHasFetchedMedals(state, value) {
            state.hasFetchedMedals = value;
        },
    },
    actions: {
        async fetchMedals({ commit, state }) {
            if (state.hasFetchedMedals) {
                console.log('fetch medals have been called');
                return;
            }
            try {
                const response = await fetch("medals.json");
                const data = await response.json();

                // Build the country list after fetching the medals
                const countryList = buildCountryList(data.medals, state.img_url);
                commit('setCountryList', countryList);
            } catch (error) {
                console.error("Error fetching medals:", error);
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
