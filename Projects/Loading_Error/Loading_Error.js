import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
  const [IsLoading, setIsLoading] = useState(true);
  const [IsError, setIsError] = useState(false);
  const [user, setUser] = useState('default user');
  // console.log(loading)
  useEffect(()=>{
    fetch(url).then((resp)=>{
      if(resp.status >= 200 && resp.status < 300){
        return resp.json()
      }else{
        setIsLoading(false)
        setIsError(true)
      }
    }).then((user)=>{
      setIsLoading(false)
      const {login} = user
      setUser(login)
    }).catch((err)=>console.log(err))
  },[])
  if(IsLoading){
    return <h2>Loading...</h2>
  }else if(IsError){
    return <h2>Error...</h2>;
  }
  return <h2>{user}</h2>
};

export default MultipleReturns;
