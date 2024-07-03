import React from 'react'

import CharacterItems from './CharacterItems'

const Character = ({items,isLoading}) => {
    return isLoading ? <h1>Loading</h1> :
    <section className="contents">
        {
            items.map(item=>(
                <CharacterItems key={item.id} item={item}></CharacterItems>
            ))
        }
    </section>
}

export default Character