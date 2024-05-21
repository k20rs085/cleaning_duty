"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
const data = JSON.parse(fs.readFileSync('./src/data/user.json', 'utf8'));
//const data2 = JSON.parse(fs.readFileSync('./src/data/user2.json', 'utf8'));
const date = new Date();
const year = date.getFullYear();
const y = year % 100; //　年の下2桁
app.get('/api/v1/user_list', (req, res) => {
    res.json(data);
});
app.post('/api/v1/delete', (req, res) => {
    console.log(req.body.id);
    const itemDelete = data.findIndex((item) => item.id === req.body.id);
    if (-1 < itemDelete) {
        data.splice(itemDelete, 1);
    }
    let filePath = './src/data/user.json';
    fs.writeFile(filePath, JSON.stringify(data, null), (err) => {
        if (err)
            throw err;
        console.log('File written successfully');
        res.json(data);
        console.log(data);
    });
});
app.post('/api/v1/entry', (req, res) => {
    // console.log(req.body.id);
    // console.log(req.body.name);
    console.log(req.body);
    data.push(req.body);
    let filePath = './src/data/user.json';
    fs.writeFile(filePath, JSON.stringify(data, null), (err) => {
        if (err)
            throw err;
        console.log('File written successfully');
        res.json(data);
        console.log(data);
    });
});
app.get('/api/v1/lottery', (req, res) => {
    let lots = [];
    //const temVal = 99; // サンプル用
    const base = 6;
    // くじの生成
    for (let i in data) {
        const yearVal = Math.floor(data[i].id / 1000);
        let j = base - (y - yearVal); // 本番用
        //let j = eldest-(temVal-yearVal); // サンプル用
        console.log(data[i].name + " " + j); // 本番用
        //console.log(data2[i].name + " " + j); // サンプル用
        for (let k = 0; k < j; k++) {
            lots.push(data[i].name);
        }
    }
    console.log(lots);
    const randomIndex = Math.floor(Math.random() * lots.length);
    console.log(randomIndex);
    res.json(lots[randomIndex]);
});
app.get('/', (req, res) => {
    //res.send('hella!');
    res.json({ "text": "sample" });
    console.log("こんにちは！");
});
module.exports = app;
