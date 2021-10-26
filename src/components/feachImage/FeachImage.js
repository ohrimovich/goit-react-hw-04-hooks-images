import React, { useState, useEffect } from "react";
import ImageGallery from '../ImageGallery/ImageGallery'
import Button from "../Button/Button";
import { toast } from 'react-toastify';
import PixabayAPI from "../../services/PixabayAPI";
import ImageGalleryItem from "../ImageGallaryItem/ImageGalleryItem";
import Modal from '../Modal/Modal';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import './FetchImage.scss'


function FeachImage({name}) {

    const [images, setImages] = useState([]);
    const [isVisible, setIsVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const [largeImage, setLargeImage] = useState('');
    const [alt, setAlt] = useState('');

      window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
                });

    const setState = (res) => {
        setImages(res);
        setIsVisible(true);
        setPage(prevPage => prevPage + 1);
    }

    useEffect(() => {
        if (!name) {
            return;
        }
        setLoading(true);
        PixabayAPI.fetchImage(name)
            .then(res => res.hits.length === 0 ? clearList() :
                setState(res.hits))
            .catch(error => console.log(error)).finally(() => setLoading(false))
    }, [name])

     const toggleModal = (largeImageURL='',largeImageAlt='') => {
         setShowModal(!showModal);
         setLargeImage(largeImageURL);
         setAlt(largeImageAlt);
  }

    const clearList = () => {
       
        setImages([]);
        setIsVisible(false);
        toast.error('Nothing not found')
        return;
    }
    
    const onLoadMore = () => {
        setIsVisible(false);
        setLoading(true);
        PixabayAPI.fetchImage(name, page)
            .then(res => {
                setImages(prevImages => [
                    ...prevImages, ...res.hits
                ]);
                setPage(page + 1);
            })
            .finally(() => {
                setLoading(false);
                setIsVisible(true);
            })
          
    }

        return (
            <>
                <ImageGallery >
                    <ImageGalleryItem list={images} onClick={toggleModal}/>
              </ImageGallery>
                {isVisible && <Button onLoadMore={onLoadMore} />}
                {showModal && <Modal largeImageURL={largeImage} alt={alt} onClick={toggleModal} />}
                {loading && <div className='Spinner'><Loader type="TailSpin"
                    color="#00BFFF"
                    height={50}
                    width={50}
                    timeout={20000}
                    /></div>
                }
            </>
        )
    }

export default FeachImage;