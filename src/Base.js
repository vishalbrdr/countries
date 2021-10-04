import Header from "./Header"

const Base = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <div className="footer">
                &copy; 2021 <a href="https://www.instagram.com/vishal_brdr">Vishal Biradar</a>
            </div>
        </>
    )
}

export default Base
