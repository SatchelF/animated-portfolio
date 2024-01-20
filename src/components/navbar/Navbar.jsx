import Sidebar from "../sidebar/sidebar"
import "./navbar.scss"

const Navbar = () => {
    return (
    <div className="navbar">
        <Sidebar/>
        <div className="wrapper">
            <span>SATCHEL FAUSETT</span>
            <div className="social">
                <a href="#"><img src="/github.png" alt="" /></a>
                <a href="#"><img src="/instagram.png" alt="" /></a>
                <a href="#"><img src="/linkedin.png" alt="" /></a>
            </div>
        </div>
    </div>
    )
}

export default Navbar