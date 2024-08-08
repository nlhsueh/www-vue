

## v01 bind banner title
bind the banner title

## v02 list all country-medals string
* show all country-medals string
* use `v-for`

```javascript
const medals = [
    "United-States 3 8 9",
    "France 5 8 3",
    "Japan 6 2 4",
    "China 5 5 2",
    "Great-Britain 2 5 3",
    "Australia 5 4 0",
    "Republic-of-Korea 5 3 1",
    "Italy 2 3 3",
    "Canada 2 1 2",
    "Hong-Kong 2 0 1",
    "Kazakhstan 1 0 2",
    "South-Africa 1 0 2",
    "Brazil 0 1 2",
    "Sweden 0 1 2",
    "Germany 2 0 0",
    "Belgium 1 0 1",
    "Turkey 0 1 1",
    "India 0 0 2",
    "Moldova 0 0 2",
    "Azerbaijan 1 0 0"
];
```

## v03 show all country images

The images are stored in `img/xxx.png`:
* Use v-for to show the image
* use `computed` to return the right directory url
  * create an array to save the urls
  * return the array of urls

```javascript
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
    }
```    

See the ![Reference fig](https://docs.google.com/presentation/d/1S4oSWcHsF3ESJHSEQt-a3xh3t-G7ykZ5igCRfhTbqG8/edit#slide=id.g2f13508a7a7_0_6)

## v04 country
* show all coutry image and their medals
* `created` life cycle, when the vue object is created, run the method `created()`
  * in the method, we call `build_country_list` to build the list of country objects
* sort by name, sort by gold and sort by totol medals

learn
* use `created()` to compute something for further display

See the ![Reference fig](https://docs.google.com/presentation/d/1S4oSWcHsF3ESJHSEQt-a3xh3t-G7ykZ5igCRfhTbqG8/edit#slide=id.g2f13508a7a7_0_6)


## v05 update medals
* design an input form that we can update the medals status
* use the `select` component to choose the country
* design fields for us to input the medals, saving to the countryList data.

See the ![Reference fig](https://docs.google.com/presentation/d/1S4oSWcHsF3ESJHSEQt-a3xh3t-G7ykZ5igCRfhTbqG8/edit#slide=id.g2f13508a7a7_0_21)



learn
* `v-model`
* input to update the data

## v06 watch data
* when we choose the country, the fields of medals are also updated 

learn
* `watch`

See the ![Reference fig](https://docs.google.com/presentation/d/1S4oSWcHsF3ESJHSEQt-a3xh3t-G7ykZ5igCRfhTbqG8/edit#slide=id.g2f13508a7a7_0_26)
