import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Base from "./Base"
import Loading from "./components/Loading"
const Country = ({ match }) => {

    const [country, setCountry] = useState("")
    const [borderCountries, setBorderCountries] = useState("")
    useEffect(() => {
        axios.get(`https://restcountries.com/v2/name/${match.params.country}?fullText=true`).then(res => setCountry(res.data))
        return () => {
        }
    }, [match.params.country])

    useEffect(() => {
        setBorderCountries("")
        const ourRequest = axios.CancelToken.source()
        if (country[0] && country[0].borders) {
            axios.get(`https://restcountries.com/v2/all`, {
                cancelToken: ourRequest.token, // <-- 2nd step
            }).then(res => (
                setBorderCountries(country[0].borders.map(c => res.data.filter(cr => cr.alpha3Code === c)))
            ))
        }
        return () => {
            ourRequest.cancel() // <-- 3rd step
        }

    }, [country])

    return (
        <Base>
            {!country ? <Loading /> : (
                <main className="Main Country" >
                    <div className="container">
                        <Link to={`/`} className="btn" >
                            <i className="fas fa-long-arrow-alt-left"></i><span>Back</span>
                        </Link>
                        {country[0] && (
                            <div className="content">
                                <div className="flag">
                                    <img src={country[0].flags.svg} alt="flag" />
                                </div>
                                <div className="info">
                                    <h2 className="name">{country[0].name}</h2>
                                    <div className="more-info">
                                        <ul className="col-1 col">
                                            <li> <strong>Native Name:</strong> <span>{country[0].nativeName}</span> </li>
                                            <li> <strong>Population:</strong> {new Intl.NumberFormat().format(country[0].population)} </li>
                                            <li> <strong>Region:</strong> <span>{country[0].region}</span> </li>
                                            <li> <strong>Sub Region:</strong> <span>{country[0].subregion}</span> </li>
                                            <li> <strong>Capital:</strong> <span>{country[0].capital}</span> </li>
                                        </ul>
                                        <ul className="col-2 col">
                                            <li> <strong>Top Level Domain:</strong> {country[0].topLevelDomain.join(", ")} </li>
                                            <li> <strong>Currencies:</strong> <span>{country[0].currencies.map(c => c.name).join(", ")} </span> </li>
                                            <li> <strong>Languages:</strong> <span>{country[0].languages.map(c => c.name).join(", ")}</span> </li>
                                        </ul>
                                    </div>
                                    {country[0].borders && (
                                        <div className="border-countries">
                                            <strong>Border Countries: </strong>
                                            {borderCountries ? (
                                                <div className="ctr">
                                                    {borderCountries.map((c, i) => (
                                                        <Link key={i} to={`/${c[0].name}`} >
                                                            <span className="btn" key={i} > {c[0].name} </span>
                                                        </Link>
                                                    ))}
                                                </div>) : "Loading..."}
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </main>
            )}
        </Base>
    )
}

export default Country
