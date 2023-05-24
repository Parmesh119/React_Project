import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0)
  return (
    <>
    <section>
        <h2>Regular Counter</h2>
        <h2>{value}</h2>
        <button type="reset" className='btn' onClick={()=>setValue(value+1)}>increase</button>
        <button type="reset" className='btn' onClick={()=>setValue(value-value)}>reset</button>
        <button type="reset" className='btn' onClick={()=>setValue(value-1)}>decrease</button> 
      </section>
    </>
  );
};

export default UseStateCounter;
