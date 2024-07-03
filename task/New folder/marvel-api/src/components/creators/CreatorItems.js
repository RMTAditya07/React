import React from 'react'

const CreatorItems = ({item}) => {
   
    return (
        <div className='content'>
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
              <strong>Name:</strong> {item.fullName}
            </li>
            <li>
              <strong>Modified:</strong> {item.modified}
            </li>
            
          </ul>
        </div>
      </div>
    </div>
    )
}

export default CreatorItems