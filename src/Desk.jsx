import {useEffect, useState } from "react";

const Desk = ({e})=>{
    let[legs,setLegs]=useState(e)
    let[tableColor,settableColor]=useState("Table")
    let[timing,settiming]=useState("")
    useEffect(()=>{
        alert("welcome")
    },[])

    useEffect(()=>{
        console.log("legs number chnage")
    },[legs])

    useEffect(() => {
        console.log("Level Up");
      }, [legs]);

      useEffect(()=>{
        settableColor("White")
      },[tableColor])


      useEffect(()=>{
        alert("game on")
      },[timing])

     
  


    return(
        <div>
            <h1> {legs}</h1>
            <button  onClick={()=>{setLegs(legs + 1);}}>Legs level Up</button> 
            <button  onClick={()=>{setLegs(legs - 1);}}>Legs down</button> 
            <button  onClick={()=>{setLegs(0);}}>0</button> 
            <button  onClick={()=>{settableColor("White");}}>Change color to white</button> 
            <button onClick={()=>{settableColor("blue")}}>Change color to blue</button>
            <h1>{tableColor}</h1>
        </div>
    )
}
export default Desk;

