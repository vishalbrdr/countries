import { useEffect, useState } from "react";
import axios from "axios";
import Main from "./Main";
import Loading from "./components/Loading";
import Base from "./Base";

function App() {
  const [countries, setCountries] = useState([])


  useEffect(() => {
    axios.get("https://restcountries.com/v3/all").then(res => setCountries(res.data))
    return () => {
    }
  }, [])



  return (
    <div className="App" >
      <Base>
        {countries.length !== 0 ? <Main countries={countries} /> : <Loading />}
      </Base>
    </div>
  );
}

export default App;
