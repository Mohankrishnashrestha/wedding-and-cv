import { useState } from "react"

function Info() {
    const name={
        nameFather:"Ram",
        nameTopic:"Name",
        nameMother:"Sita",
        nameSon:"luv",
      }
      const name2={
        nameFather:"Shyam",
        nameTopic:"Name",
        nameMother:"Geeta",
        nameSon:"Kush",
      }
        const[state, setState]=useState(name);
      const chamgeName = ()=>{
        setState(name2);
      }
      const reset = () =>{
        setState(name);
      }
      return (
        <div>
        <div>
          <div>{state.nameTopic}:{state.nameFather}</div>
          <div>{state.nameTopic}:{state.nameMother}</div>
          <div>{state.nameTopic}:{state.nameSon}</div>
          
        </div>
        <div>
            <button onClick={chamgeName}>click to change</button>
            <button onClick={reset}>Reset</button>

        </div>
        </div>
      )
}

export default Info