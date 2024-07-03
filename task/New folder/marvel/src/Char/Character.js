import React,{useState,useEffect} from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const CharacterItem = ({item})=>{
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
    const navigate = useNavigate();
    const [charRes,setChar]=useState([])
    const [items,setItems]=useState([])
    const [clicked,setClicked]=useState(false)
    useEffect(()=>{
        fetchChar()
    },[])

    const fetchChar = () => {
        const api="https://gateway.marvel.com"
        let heroUrl = `${api}/v1/public/characters`;
        const hash="32bd7e54c057df65d5ff065a83ca1fa9"
        const apiKey="de576865dbdd9fc8c9f37ff91d573293"
        
        let url = `${heroUrl}?ts=1&apikey=${apiKey}&hash=${hash}`;
        axios
        .get(url)
        .then((res) => {
            // console.log(res.data.data.results);
            setItems(res.data.data.results);
        })
        .catch((err) => {
            console.log(err);
        });
 
    }
    const redirect = (id) => {
        // const api="https://gateway.marvel.com"
        // let heroUrl = `${api}/v1/public/characters/${id}`;
        // const hash="32bd7e54c057df65d5ff065a83ca1fa9"
        // const apiKey="de576865dbdd9fc8c9f37ff91d573293"
        
        // let url = `${heroUrl}?ts=1&apikey=${apiKey}&hash=${hash}`;
        // axios
        // .get(url)
        // .then((res) => {
        //     // console.log(res.data.data.results);
        //     console.log(JSON.stringify(res.data.data.results))
        //     setChar(JSON.stringify(res.data.data.results))
        //     // console.log(JSON.stringify(charRes))
        //     console.log(charRes)
        //     // console.log(charRes[0].name)
        //     setClicked(true)
        // })
        navigate('/characterId')


    }
    return(
        <div>
            <section className="contents">
            {
                clicked&&<div>
                    
                </div>
            }       
            {
                !clicked&&
                items.map(item => (
                    <div onClick={()=>redirect(item.id)}>
                        <CharacterItem key={item.id} item={item}></CharacterItem>
                    </div>
                ))
            }
            </section>
        </div>
    )
}

export default Character