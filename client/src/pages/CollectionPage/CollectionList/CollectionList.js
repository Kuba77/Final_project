import React from 'react'
import BookItem from '../../../components/BookItem/BookItem'

const CollectionList = ({ collection }) => {
    return (
        collection.map((item, index) => (
            <BookItem
            index={index}
            imageSrc={item.imageUrls[2]}
            title={item.name}
            author={item.author}
            price={item.currentPrice}
            />
        ))
    )
 }

export default CollectionList
