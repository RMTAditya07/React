import React from 'react'
import CreatorItems from './CreatorItems'

const CreatorsBox = ({items,isLoading}) => {
    return isLoading ? <h1>Loading</h1> :
    <section className="contents">
        {
            items.map(item=>(
                <CreatorItems key={item.id} item={item}></CreatorItems>
            ))
        }
    </section>
}

export default CreatorsBox