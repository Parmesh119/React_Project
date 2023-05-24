import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [user, setUser] = useState([])
  const getUsers = async () => {
    const response = await fetch(url)
    const users = await response.json()
    console.log('abcd')
    setUser(users)
    console.log(users)
    // console.log(users)
  }
  useEffect(()=>{
    getUsers()
  },[])
  return (
    <>
      <h2>GitHub Users</h2>
      <ul className='users'>
        {user.map((users)=>{
          const {id, login, avatar_url, html_url} = users
          return (<li key={id}>
            <img src={avatar_url} alt={login} />
            <h4>{login}</h4>
            <a href={html_url}>profile</a>
          </li>)
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;
