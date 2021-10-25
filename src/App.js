import "./App.css";
import React, { useState} from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from "./components/Saerchbar/Searchbar";
import FeachImage from "./components/feachImage/FeachImage";


function  App() {

  const [imageName, setImageName] = useState('');

  const formSubmit = image => {
    setImageName(image)
  }

    return (
      
      <>
        <Searchbar onChange={formSubmit} />
        <ToastContainer autoClose={3000} />
        <FeachImage name={imageName}  />

      </>
    ) 
  };

export default App;


