import React from 'react';
import Form from './components/Form';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import CSS file
import './App.css';

function App() {
  return (
    <div className="App">
      <Form />
      <ToastContainer position='top-center'/>
    </div>
  );
}

export default App;