import logo from './logo.svg';
import './App.css';
import axiosInstance from "./services/axios";


function App() {





  const handleClick = () => {

    axiosInstance
      .get("https://biapi.nve.no/magasinstatistikk/api/Magasinstatistikk/HentOffentligData")
      .then((res) => {console.log(res)});
  } 





  return (
    <div>

      <button onClick={handleClick}>HELLO</button>
    </div>
  );
}

export default App;
