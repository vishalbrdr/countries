import { useEffect, useState } from "react"
import Card from "./components/Card"

const Main = ({ countries }) => {

    const [filterText, setFilterText] = useState("")
    const [myCountries, setMyCountries] = useState(countries)
    const [region, setRegion] = useState("")
    const [showDropDowm, setShowDropDowm] = useState(false)

    const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"]
    useEffect(() => {
        const filteredCountries = countries.filter(country => (
            country.name.common.toLowerCase().includes(filterText)
        ))
        setMyCountries(filteredCountries)
        return () => {
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filterText])

    const handleChange = e => {
        setFilterText(e.target.value.toLowerCase())
        setRegion("")
    }
    const filterByRegion = (region) => {
        const filteredCountries = countries.filter(country => country.region === region)
        setMyCountries(filteredCountries)
        setRegion(region)
        setShowDropDowm(false)
    }
    const handleClick = () => {
        setRegion("")
        setMyCountries(countries)
        setShowDropDowm(!showDropDowm)
    }
    return (
        <main className="Main" >
            <div className="container">
                <div className="filter-section">
                    <div className="search-input">
                        <i className="fas fa-search"></i>
                        <input
                            type="text"
                            placeholder="Search for a country..."
                            value={filterText}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="dropdown">
                        {showDropDowm && <div className="overlay" onClick={() => setShowDropDowm(false)} ></div>}
                        <button
                            className="btn"
                            onClick={handleClick}
                        >
                            {region ? region : "Filter by Region"}
                            <i className="fas fa-chevron-down"></i>
                        </button>
                        <div className={showDropDowm ? "dropdown-options active" : "dropdown-options"}>
                            {regions.map((region, i) => (
                                <button
                                    key={i}
                                    onClick={() => filterByRegion(region)}
                                    className="btn"
                                >
                                    {region}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="countries">
                    {myCountries !== 0 && (
                        myCountries.map((country, i) => (
                            <Card country={country} key={i} />
                        ))
                    )}
                </div>
            </div>
        </main >
    )
}

export default Main
