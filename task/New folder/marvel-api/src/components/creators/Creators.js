import React,{useState,useEffect} from 'react'
import axios from 'axios'
import CreatorBox from './CreatorBox'

const hash="32bd7e54c057df65d5ff065a83ca1fa9"

const Creators = () => {
  const[items,setItems]=useState([])
  const[isLoading,setLoading]=useState(true)

  useEffect(()=>{
    const fetch=async()=>{
      const result = await axios(`https://gateway.marvel.com/v1/public/creators?ts=1&apikey=de576865dbdd9fc8c9f37ff91d573293&hash=32bd7e54c057df65d5ff065a83ca1fa9`)
          console.log(result.data.data.results)
          setItems(result.data.data.results)
          setLoading(false)
    }
    fetch()
  },[])
  return (
    <div>
      <CreatorBox items={items} isLoading={isLoading} />
    </div>
  )
}

export default Creators