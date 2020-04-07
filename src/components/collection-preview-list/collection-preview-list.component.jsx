import React from 'react';
import './collection-preview-list.style.scss';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreviewList = ({ title, items }) => {
    return <div className='preview-list'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items.filter(
                    (item, idx) => idx < 4).map(
                        ({id, ...otherCollectionProps}) => (
                    <CollectionItem id={id} {...otherCollectionProps} />
                ))}
        </div>
    </div>
}

export default CollectionPreviewList;