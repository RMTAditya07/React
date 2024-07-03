import React from 'react'
import {useEffect,useState} from 'react';

function BackToTop() {

    const[backToTop,setBackTotop]=useState(false);
    useEffect(() =>{
        window.addEventListener("scroll",() => {
            if(window.scrollY > 100){
                setBackTotop(true)
            }else{
                setBackTotop(false)
            }
        })
    },[])

    const scrollUp =() => {
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }
  return ( <div className='App'>
    {backToTop &&(
        <button style={{
            position:'fixed',
            bottom:'50px',
            right:'50px',
            height:'50px',
            width:'50px',
            fontSize:'50px'
        }}
        onClick={scrollUp}>^</button>
    )}
    </div>
  )
}

export default BackToTop