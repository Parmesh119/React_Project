import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstname, setFirstName] = useState('')
  const [email,setEmail] = useState('')
  const [people, setPeople] = useState([])
  const submit = (e) => {
    e.preventDefault()
    // console.log(firstname, email)
    if(firstname && email){
      // console.log('Submitted values')
      const person={firstname, email}
      setPeople(()=>{
        return [...people, person]
      })
      setEmail('')
      setFirstName('')
      console.log(person)
    }else{
      console.log('Empty values')
    }
  }
  return (
    <>
      <article>
        <form className="form" >
          <div className="form-control">
            <label htmlFor="firstName">Name :</label>
            <input type="text" name="firstName" id="firstName" onChange={(e)=>setFirstName(e.target.value)} value={firstname}/>
          </div>
          <div className="form-control">
            <label htmlFor="secondName">Email :</label>
            <input type="text" name="secondName" id="secondName" onChange={(e)=>setEmail(e.target.value)} value={email}/>
          </div>
          <button type="button" className="submit" onClick={submit}>submit</button>
        </form>
        {
          people.map((person)=>{
            const {firstname, email} = person
            return (
              <>
                <div className='item'>
                  <h3>{firstname}</h3>
                  <h3>{email}</h3>
                </div>
              </>
            )
          })
        }
      </article>
    </>
  );
};

export default ControlledInputs;
