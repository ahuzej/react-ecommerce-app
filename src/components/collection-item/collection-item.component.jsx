import React from 'react';
import './collection-item.style.scss';

const CollectionItem = ({ imageUrl, id, name, price }) => <div className='item' key={id}>
    <div className='img'
        style={{
            backgroundImage: `url(${imageUrl})` 
        }}
    />
    <div className='content'>
        <h3>{name}</h3>
        <span>{`${price}$`}</span>

    </div>
</div>

export default CollectionItem;