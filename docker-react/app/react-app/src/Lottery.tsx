import React, { useState, useEffect } from 'react';
import './Lottery.css'

import Result from './Result';

export interface User {
    id: number;
    name: string;
}

const Lottery = () => {
    const [ userName, setUserName ] = useState("");

    const buttonClick = () => {
        // 確認ウィンドウがあれば良いよね
        console.log("プッシュ！")

        // 送信 & 受信
        fetch("http://127.0.0.1:3001/api/v1/lottery")
          .then((res) => res.json())
          .then((json) => setUserName(json))
          .catch(() => alert("error"));
    };

    return (
        <div>
            <a className='btn lottery' onClick={() => buttonClick()}><span>Draw lots!</span></a>
            <Result name={userName} />
            {/* <button className='lottery' onClick={() => buttonClick()}>Draw lots!</button> */}
        </div>
    )
}

export default Lottery
