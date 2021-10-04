import { Link } from "react-router-dom"

const Card = ({ country }) => {

    const { name: { common: name }, flags, population, region, capital } = country

    return (
        <Link to={`/${name}`} >
            <div className="Card" >
                <div className="flag">
                    <img src={flags[0]} width="200" alt={name + " flag"} />
                </div>
                <div className="country-info">
                    <h2 className="country-name"> {name} </h2>
                    <ul className="coiuntry-stats" >
                        <li><strong>Population:</strong> <span> {new Intl.NumberFormat().format(population)} </span> </li>
                        <li><strong>Region:</strong> <span> {region} </span> </li>
                        <li><strong>Capital</strong> <span> {capital} </span> </li>
                    </ul>
                </div>
            </div>
        </Link>
    )
}

export default Card
