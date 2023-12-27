import {  useState } from "react"
import Data from "./project1 birthday reminder/data.js"
import './project1 birthday reminder/data.css'


const Card = () => {
    const[data,setData]=useState(Data)
    const handleClick = () => {
      setData([]);
    };
    
  return (
    <div className="Profile">
      <section className="Card">
        <h3 className="black">Today Birthday {data.length} 🎂</h3>
        {data.map((e, i) => {
          return (
            <div className="cont" key={i}>
              <img src={e.image}></img>
              <div className="sub-cont">
                <label>{e.name}</label>
                <p>{e.age}</p>
              </div>
            </div>
          );
        })}
        <button onClick={handleClick}>Clear All</button>
      </section>
    </div>
    
    
  )
}

export default Card