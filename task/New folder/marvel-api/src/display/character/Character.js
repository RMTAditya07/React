import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Option from './Option';
import { Redirect } from "react-router-dom";
// import { his}



const CharacterItems=({item})=>{
  
    return (
        <div  className='content'>
      <div className='content-inner'>
        <div className='content-front'>
          <img src={item.thumbnail.path + "/portrait_xlarge.jpg"} alt='' />
        </div>
        <div className='content-back'>
          <h1>{item.name}</h1>
          <ul>
          <li>
              <strong>ID:</strong> {item.id}
            </li>
            <li>
              <strong>Name:</strong> {item.name}
            </li>
            <li>
              <strong>Description:</strong> {item.description}
            </li>
            
          </ul>
        </div>
      </div>
    </div>
    )
  }
   

const Character = () => {
  let charRes=null
  const [items, setItems] = useState([]);
  const [clicked, setclicked] = useState(false)

useEffect(() => {
  fetchProducts();
}, []);


const fetchProducts = () => {
    const api="https://gateway.marvel.com"
    let heroUrl = `${api}/v1/public/characters`;
    const hash="32bd7e54c057df65d5ff065a83ca1fa9"
    const apiKey="de576865dbdd9fc8c9f37ff91d573293"
    
    let url = `${heroUrl}?ts=1&apikey=${apiKey}&hash=${hash}`;
    axios
    .get(url)
    .then((res) => {
      console.log(res.data.data.results);
      setItems(res.data.data.results);
    })
    .catch((err) => {
      console.log(err);
    });
};

const redirect=(id)=>{
  // window.open(`https://gateway.marvel.com/v1/public/characters/${item.id}?ts=1&apikey=de576865dbdd9fc8c9f37ff91d573293&hash=32bd7e54c057df65d5ff065a83ca1fa9`);
  const api="https://gateway.marvel.com"
  let heroUrl = `${api}/v1/public/characters/${id}`;
  const hash="32bd7e54c057df65d5ff065a83ca1fa9"
  const apiKey="de576865dbdd9fc8c9f37ff91d573293"
  
  let url = `${heroUrl}?ts=1&apikey=${apiKey}&hash=${hash}`;
  axios
  .get(url)
  .then((res) => {
    console.log(res.data.data.results);
    charRes=res.data.data.results
    setclicked(true)
  })
}

return (
    <section className="contents">
      {clicked&&<div>
        results
        JSON.stringify(charRes)
        </div>}
        {!clicked&&
            items.map(item=>(
              <div onClick={()=>redirect(item.id)} >
                <CharacterItems key={item.id} item={item} ></CharacterItems>
              </div>
            ))
        }
    </section>
  
  );
};
export default Character;