import React from 'react';
import './NewCollection.css';
import Item from '../Items/item'
import new_collection from '../Assets/images/new_collections';
const NewCollections = () => {
  return (
    <div className='new-collection'>
      <h1>NEW COLLECTIONS</h1>
      <hr/>
      <div className="collections">
        {new_collection.map((item, i) => {
          return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        })}

      </div>
    </div>
  )
}

export default NewCollections