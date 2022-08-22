import { useState,useEffect } from "react";



function Game() {
    const [level, setLevel] = useState(0);
    const [gameTime, setGameTime] = useState({});
  
    useEffect(() => {
      console.log('welcome');
    }, [gameTime]);
  
    useEffect(() => {
      alert('hello')
    }, []);
  
    useEffect(() => {
      console.log("Level Up");
    }, [level]);

    useEffect(() => {
    console.log({gameTime});
     }, [gameTime]);

     useEffect(()=>{
        alert("games")
     },[gameTime])
  
    return (
      <div className="game">
        <h1>Game</h1>
        <h1>{level}</h1>
        <button
          onClick={()=>{setLevel(level + 1);}}>Level Up</button>
        <div>
          <button
            onClick={() => {
              setGameTime(new Date());
            }}
          >
            Check Time
          </button>
        </div>
        
      </div>
    );
  }
export default Game;