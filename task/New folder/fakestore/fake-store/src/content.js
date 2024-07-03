import React from 'react'
import product from './product';

const Content =() => {
    console.log(product);
    const listItems=product.map((item)=>
    <div className='card' key={item.id}>
        <div className='card_img'>
        <img src={item.image}/>
        </div>
        <div className='card_header'>
            <h1>{item.title}</h1>
            <h2>{item.price}</h2>
            <p>{item.description}</p>
            <h4>{item.category}</h4>
          
        </div>

        
    </div>
    );
    return(
        <div className='main'>
            {listItems}
        </div>
    )

}
export default Content;