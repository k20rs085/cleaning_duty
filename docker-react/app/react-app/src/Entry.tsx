import React, { useState, useEffect } from 'react';
import './Entry.css';
import { User } from './UserList';

interface EntryProps {
  handleValueChange: (newValue: User[]) => void;
}

const Entry: React.FC<EntryProps> = ({ handleValueChange }) => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");

  const buttonClick = () => {
    // 確認ウィンドウがあれば良いよね

    // POSTリクエスト 設定
    const requestOption = {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: id , name: name })
    };

    // 送信 & 受信
    fetch("http://127.0.0.1:3001/api/v1/entry", requestOption)
      .then((res) => res.json())
      .then((json) => handleValueChange(json)) // 親の値を変更
      .catch(() => alert("error"));

    // inputを空に
    setId("");
    setName("");
  };
  return (
    <div>
        <input
          type="number"
          value={id}
          onChange={(event) => setId(event.target.value)}
          className="StNum"
        />
        <input
          type='text'
          value={name}
          onChange={(event) => setName(event.target.value)}
          className='StName'
        />
        <button className='entry' onClick={buttonClick}>entry</button>
    </div>
  );
}

export default Entry;
