const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());


app.post("/login", (req, res) => {
    let userData = {
        username: req.body.username,
        password: req.body.password
    }

    if (userData.username == 'shashank' && userData.password == 'sak') {
        res.json({ flag: true, msg: 'Login Succes' });
    }
    else {
        res.json({ flag: false, msg: 'Login Failed' });
    }
});

let foodData = [
    { foodName: 'French Fries', price: 'Rs.250/', catogory: 'veg' },
    { foodName: 'Tandoori Mushrooms', price: 'Rs.450/', catogory: 'veg' },
    { foodName: 'Chicken Alabu', price: 'Rs.550/', catogory: 'non-veg' },
    { foodName: 'Dragon Prawns', price: 'Rs.650/', catogory: 'non-veg' },
];

let drinkData = [
    { drinkName: 'Virgin Mojito', price: 'Rs.250/', catogory: 'mocktail' },
    { drinkName: 'Pinacolada', price: 'Rs.350/', catogory: 'mocktail' },
    { drinkName: 'Sex on the Beach', price: 'Rs.550/', catogory: 'cocktail' },
    { drinkName: 'Moscow Mule', price: 'Rs.650/', catogory: 'cocktail' },
];

let data = [foodData, drinkData];
app.get('/data', (req, res) => {
    res.json(data);
});

app.listen(3200, () => {
    console.log("Backend application is running at port 3200");
});