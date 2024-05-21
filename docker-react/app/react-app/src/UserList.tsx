import React, { useState, useEffect } from 'react';
import './UserList.css'

import Delete from './Delete';
import Entry from './Entry';

export interface User {
  id: number;
  name: string;
}

function UserList() {
  const [users, setUsers] = useState<User[]>([]);

  // コンポーネントがマウントされた時にデータを読み込む
  useEffect(() => {
    // GETリクエスト送信 & 受信
    fetch("http://127.0.0.1:3001/api/v1/user_list")
      .then((res) => res.json())
      .then((json) => setUsers(json))
      .catch(() => alert("error"));
  }, []);

  // 子コンポーネントから受け取った値で親コンポーネントのusersを更新する関数
  const handleValueChange = (newValue: User[]) => {
    setUsers(newValue);
  };

  return (
    <div>
      <h1>Member</h1>
      <ul>
        {users.map(user => (
          <li key={user.id} className='data'>
            {Math.floor(user.id/1000)}RS{( '000' + (user.id%1000) ).slice( -3 )} - {user.name}
            <Delete handleValueChange={handleValueChange} id={user.id}/>
          </li>
        ))}
      </ul>
      <Entry handleValueChange={handleValueChange} />
    </div>
  );
}

export default UserList;
