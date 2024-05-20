const express = require('express');
const cors = require('cors');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
import { Request, Response } from 'express';

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

//const data = JSON.parse(fs.readFileSync('./src/data/user.json', 'utf8'));
const data2 = JSON.parse(fs.readFileSync('./src/data/user2.json', 'utf8'));

const date = new Date();
const year = date.getFullYear();
const y = year%100; //　年の下2桁

app.get('/api/v1/user_list', (req: Request, res: Response) => {
  res.json(data2);
})

app.post('/api/v1/delete', (req: Request, res: Response) => {
  console.log(req.body.id);

  interface Item {
    id: number;
    name: String;
  }

  const itemDelete = data2.findIndex(
    (item: Item) => item.id === req.body.id
  );
  if( -1 < itemDelete) {
    data2.splice(itemDelete, 1);
  }

  let filePath = './src/data/user2.json';
  fs.writeFile(filePath, JSON.stringify(data2, null), (err: NodeJS.ErrnoException | null) => {
    if (err) throw err;
    console.log('File written successfully');
    res.json(data2);
    console.log(data2);
  });
})

app.post('/api/v1/entry', (req: Request, res: Response) => {
  // console.log(req.body.id);
  // console.log(req.body.name);
  console.log(req.body);

  interface Item {
    id: number;
    name: String;
  }

  data2.push(req.body);

  let filePath = './src/data/user2.json';
  fs.writeFile(filePath, JSON.stringify(data2, null), (err: NodeJS.ErrnoException | null) => {
    if (err) throw err;
    console.log('File written successfully');
    res.json(data2);
    console.log(data2);
  });
})

app.get('/api/v1/lottery', (req: Request, res: Response) => {
  let lots = [];
  const temVal = 99;

  // 最年長を検索
  let eldest = 0;
  for(let i in data2) {
    const yearVal = Math.floor(data2[i].id/1000);
    // y は今年の下2桁のこと 例)2024年 -> 24
    //if(eldest < y-yearVal){ // 本番用
    if(eldest < temVal-yearVal){ // サンプル用
      // eldest = y-yearVal + 1; // 本番用
      eldest = temVal-yearVal + 1; // サンプル用
    }
  }

  //console.log(eldest);
  // くじの生成
  for(let i in data2) {
    const yearVal = Math.floor(data2[i].id/1000);

    //let j = eldest-(y-yearVal); // 本番用
    let j = eldest-(temVal-yearVal); // サンプル用
    //console.log(data2[i].name + " " + j); // 本番用
    console.log(data2[i].name + " " + j); // サンプル用

    for(let k = 0; k < j; k++){
      lots.push(data2[i].name);
    }
  }
  console.log(lots);
  const randomIndex = Math.floor(Math.random() * lots.length);
  console.log(randomIndex);
  res.json(lots[randomIndex]);
})

app.get('/', (req: Request, res: Response) => {
  //res.send('hella!');
  res.json({"text": "sample"});
  console.log("こんにちは！");
})

module.exports = app;
