<template>
    <div class="row m-3">
        <form @submit.prevent="updateMedals">
            <div class="row m-3">
                <div class="col">
                    <select class="form-select" v-model="selectedCountry" id="country-select">
                        <option disabled value="">請選擇國家</option>
                        <option v-for="c in countryList" :key="c.name" :value="c.name">
                            {{ c.name }}
                        </option>
                    </select>
                </div>

                <div class="col">
                    <input class="form-control" type="number" v-model="goldMedals" placeholder="金牌數量" min="0">
                </div>
                <div class="col">
                    <input class="form-control" type="number" v-model="silverMedals" placeholder="銀牌數量" min="0">
                </div>
                <div class="col">
                    <input class="form-control" type="number" v-model="bronzeMedals" placeholder="銅牌數量" min="0">
                </div>
                <div class="col d-flex align-items-end">
                    <button type="submit" class="btn btn-primary w-100">更新</button>
                </div>
            </div>
        </form>
    </div>
 
</template>