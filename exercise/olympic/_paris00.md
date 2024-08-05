

## v01 bind banner title
bind the banner title

## v02 list all country-medals string
show all country-medals string

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

