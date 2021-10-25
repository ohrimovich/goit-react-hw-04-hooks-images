import './ImageGalleryItem.scss'
import React from 'react';

function  ImageGalleryItem ({onClick, list}) {
    
   const click = (event) => {
        const largeImageURL = event.target.dataset.url;
        const largeImageAlt = event.target.dataset.alt;
        onClick(largeImageURL, largeImageAlt);
    }

        return (
            list.map(item => <li key={item.id} onClick={click} className="ImageGalleryItem">
                <img src={item.webformatURL} alt={item.tags} data-alt={item.tags} data-url={item.largeImageURL} className="ImageGalleryItem-image" />
            </li>)
        )
    }

export default ImageGalleryItem;