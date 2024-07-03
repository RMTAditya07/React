import React from 'react'
import Details from './Details'

export const Item = item => {
        //const api_url=`https://gateway.marvel.com/v1/public/characters/${item.id}?ts=1&apikey=de576865dbdd9fc8c9f37ff91d573293&hash=32bd7e54c057df65d5ff065a83ca1fa9`
        const redirect=()=>{
            //getapi(api_url)
          //window.open(`https://gateway.marvel.com/v1/public/characters/${item.id}?ts=1&apikey=de576865dbdd9fc8c9f37ff91d573293&hash=32bd7e54c057df65d5ff065a83ca1fa9`);
          <Details />
          
    }
    return (
        <div onClick={redirect} className='content'>
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

