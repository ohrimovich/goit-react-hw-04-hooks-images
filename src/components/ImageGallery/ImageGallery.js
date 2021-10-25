import React from 'react';
import './ImageGallery.scss'

function ImageGallery({children}) {
    
        return (
            <ul className="ImageGallery" >
                {children}
            </ul>
        )
}

export default ImageGallery;