import React,{useState,useEffect} from 'react'
import axios from 'axios'
import CharacterBox from './CharacterBox'

const hash="32bd7e54c057df65d5ff065a83ca1fa9"

const Character = () => {
  const[items,setItems]=useState([])
  const[isLoading,setLoading]=useState(true)

  useEffect(()=>{
    const fetch=async()=>{
      const result = await axios(`http://gateway.marvel.com/v1/public/characters?&ts=1&apikey=de576865dbdd9fc8c9f37ff91d573293&hash=${hash}`)
          console.log(result.data.data.results)
          setItems(result.data.data.results)
          setLoading(false)
    }
    fetch()
  },[])
  return (
    <div>
      <CharacterBox items={items} isLoading={isLoading} />
    </div>
  )
}

export default Character