import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [show, setShow] = useState(false)
  return (
    <>
      <button type="button" className="btn" onClick={()=>setShow(!show)}>Show/Hide</button>
      {show && <Item/>}
      </>
  );
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth)
  const checkSize = () => {
    setSize(window.innerWidth)
  }
  useEffect(()=>{
    window.addEventListener('resize', checkSize)
    return ()=>{
      window.removeEventListener('resize', checkSize)
    }
  },[])
  return (
    <>
      <h2>Window</h2>
      <h3>Size: {size} PX</h3>
    </>
  )
}
export default ShowHide;
