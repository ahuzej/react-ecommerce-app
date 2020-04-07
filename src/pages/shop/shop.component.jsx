import React from 'react';
import SHOP_DATA from './shop.data';

import CollectionPreviewList from '../../components/collection-preview-list/collection-preview-list.component';

class ShopPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const { collections } = this.state;
        return <div className="shop-page">
            {collections.map(
                ({id, ...otherCollectionProps}) => <CollectionPreviewList id={id} {...otherCollectionProps} />
            )}
        </div>
    }
}


export default ShopPage;