import { useEffect, useState } from "react";
import axios from "axios";
import Main from "./Main";
import Loading from "./components/Loading";
import Base from "./Base";

function App() {
  const [countries, setCountries] = useState([])


  useEffect(() => {
    const ourRequest = axios.CancelToken.source()
    axios.get("https://restcountries.com/v3/all", {
      cancelToken: ourRequest.token, // <-- 2nd step
    }).then(res => setCountries(res.data))
    return () => {
      ourRequest.cancel() // <-- 3rd step
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
