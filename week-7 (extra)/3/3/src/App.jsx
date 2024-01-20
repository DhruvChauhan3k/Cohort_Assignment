import { Title } from "./Title"
import { useState } from "react"
import { Generate } from "./Generate"

function App() {
const[change,setchange]=useState(0)
  return (
    <div>
      <Title/>
      <div style={{textAlign:'center'}}>
      <input placeholder="No of Words" style={{width:'200px',textAlign:'center',fontSize:'17px'}} onChange={(e)=>{
        setchange(e.target.value)
      }}/></div>
      <Generate length={change} ></Generate>
    </div>
  )
}

export default App
