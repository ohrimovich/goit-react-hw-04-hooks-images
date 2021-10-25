import React, { useEffect} from "react";
import { createPortal } from 'react-dom';
import './Modal.scss'

const modalRoot = document.querySelector('#modal-root')


export default function Modal({ onClick, largeImageURL, alt }) {
    
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown)
        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    })

    const handleKeyDown = e => {
            if (e.code === 'Escape') {
                onClick();
            }
        }

    const click = (e) => {
        if (e.currentTarget === e.target) {
            onClick();
    }
}
        return createPortal(
            <div className="Overlay" onClick={click}>
                <div className="Modal">
                    <img src={largeImageURL} alt={alt} />
                </div>
            </div>, modalRoot
        )
    }