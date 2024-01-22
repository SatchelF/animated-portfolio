import Sidebar from "../sidebar/sidebar"
import "./navbar.scss"

const Navbar = () => {
    return (
    <div className="navbar">
        <Sidebar/>
        <div className="wrapper">
            <span>My Portfolio</span>
            <div className="social">
                <a href="https://github.com/SatchelF "><img src="/github.png" alt="" /></a>
                <a href="https://www.instagram.com/satchel_.percy"><img src="/instagram.png" alt="" /></a>
                <a href="https://www.linkedin.com/in/satchel-fausett-a00534231"><img src="/linkedin.png" alt="" /></a>
            </div>
        </div>
    </div>
    )
}

export default Navbar