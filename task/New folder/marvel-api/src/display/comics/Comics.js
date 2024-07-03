import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';


const CharacterItems=({item})=>{

    const redirect=()=>{
        window.open(`https://gateway.marvel.com/v1/public/comics/${item.id}?ts=1&apikey=de576865dbdd9fc8c9f37ff91d573293&hash=32bd7e54c057df65d5ff065a83ca1fa9`);
        
    }
    return (
        <div onClick={redirect} className='content'>
      <div className='content-inner'>
        <div className='content-front'>
        <img src="https://i5.walmartimages.com/asr/91f0eed3-0434-4bbd-a65d-52521425d0e4.eee8c704e61afa339cf789f94ef50b5d.jpeg" alt='' />
        </div>
        <div className='content-back'>
          <h1>{item.title}</h1>
          <ul>
          <li>
              <strong>ID:</strong> {item.id}
            </li>
            <li>
              <strong>Name:</strong> {item.title}
            </li>
            <li>
              <strong>Page Count:</strong> {item.pageCount}
            </li>
            
          </ul>
        </div>
      </div>
    </div>
    )
  }
   

const Comics = () => {
  const [items, setItems] = useState([]);
useEffect(() => {
  fetchProducts();
}, []);


const fetchProducts = () => {
    const api="https://gateway.marvel.com"
    let heroUrl = `${api}/v1/public/comics`;
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

return (
    <section className="contents">
        {
            items.map(item=>(
                <CharacterItems key={item.id} item={item}></CharacterItems>
            ))
        }
    </section>
  
  );
};
export default Comics;