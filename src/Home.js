import React, { useState } from 'react';
import image from "./1664006918432.jpeg";
import rock from "./rock-one-eyebrow-raised-rock-staring.gif";

function Home() {
  const interestList = ['Going to the gym', 'Watching F1', 'Cars', 'Sleeping'];

  // State to store the list
  const [list, setList] = useState(interestList);

  // Function to randomize the order of the list using sort
  const randomizeList = () => {
    const newList = [...list].sort(() => Math.random() - 0.5);
    setList(newList);
  };
  
  return (
    <div className="App">
      <h1>
        Welcome to Shivam Bakshi's CSS 480 webpage!
      </h1>
      <br/>
      <img src= {image} alt= "Shivam Bakshi" style={{width: '200px'}} ></img>
      <img src= {rock} alt= "Shivam Bakshi" style={{width: '200px'}} ></img>
      <br/>
      
      <p>I'm a fourth year UW Bothell student that is majoring in Computer Science. 
        A little fun about me is that I am one of two people in my entire family that is left handed.</p>
     
      <div className='h3'>
        <h3>Somethings that interest me include:</h3>
      </div> 
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button className='button' onClick={randomizeList}>Reorder List</button>
    </div>
  );
}

export default Home;