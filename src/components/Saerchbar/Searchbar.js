import React, {useState} from 'react';
import './Searchbar.scss'
import { toast } from 'react-toastify'

function Searchbar({onChange}) {
    
    const [imageName, setImageName] = useState('');
 

    const handlerNameChange = event => {
       
            setImageName(event.currentTarget.value.toLowerCase())
    }

    const handlerSubmit = event => {
        event.preventDefault();

        if (imageName.trim() === '') {
            toast.error('Enter name of image, what would you like to find');
            return;

        }

        onChange(imageName);
        setImageName('');

    }

        return(
        <header className="Searchbar">
            <form onSubmit={handlerSubmit} className="SearchForm">
                <button type="submit" className="SearchForm-button">
                    <span className="SearchForm-button-label">Search</span>
                </button>

                <input
                    className="SearchForm-input"
                    type="text"
                    autoComplete="off"
                    value = {imageName}
                    autoFocus
                    placeholder="Search images and photos"
                    onChange={handlerNameChange}
                />
            </form>
        </header>
        )
}


export default Searchbar;