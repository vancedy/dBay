import React, {useState} from 'react';
import {Item}  from './item'


const Items = (props) => {
    const listItems = props.items.map((item) => (
        <Item key={item.id} name={item.name} price={item.price} description={item.description}/>
    ))
    return(
        <>  {listItems}  </>
    )
}

export default Items;