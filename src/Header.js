import { useEffect, useState } from "react"


const Header = () => {
    const [darkTheme, setDarkTheme] = useState(true)
    useEffect(() => {
        let localtheme = localStorage.getItem("darkTheme")
        document.body.dataset.theme = localtheme === "true" ? "dark" : "light"
    })
    const toggleTheme = () => {
        setDarkTheme(!darkTheme)
        localStorage.setItem("darkTheme", darkTheme)
    }
    return (
        <header className="Header">
            <div className="container">
                <h1 className="heading" >Where in the world?</h1>
                <button className="btn-theme" onClick={toggleTheme} >
                    <i className={darkTheme ? "far fa-moon" : "fas fa-moon"}></i><span>Dark Mode</span>
                </button>
            </div>
        </header>
    )
}

export default Header
