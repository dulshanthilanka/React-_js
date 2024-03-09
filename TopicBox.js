import React from 'react'
import './topicbox.css'
import { useState ,useEffect} from 'react';

export default function TopicBox(props) {
    let [count, setcount] = useState(0);

    const incriment = () =>{
        setcount(count+1);
    }

    const decriment = () =>{
        setcount(count-1);
    }

    useEffect=(()=>{
       alert("you did it");
    },[count]

    );

    const food = "favirout food is "+ props.food + count
  return (
    <div>
      <div className='topicbox'>
          <button class='btn' onClick={incriment}> PLUS </button>
          <button class='btn' onClick={decriment}> MINUS </button>
          <br/>
          <span> {food} </span>
      </div>
    </div>
  );
}