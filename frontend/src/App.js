import logo from './logo.svg';
import './App.css';
import axiosInstance from "./services/axios";
import { useState } from 'react';


function App() {


  const [data, setData] = useState([]);



  const handleClick = () => {

    const data = axiosInstance
      .get("")
      .then((res) => {setData(res.data); console.log(res.data)});

    

  } 





  return (
    <div>

      <button onClick={handleClick}>HELLO</button>
      <p>{data}</p>
    </div>
  );
}

export default App;
