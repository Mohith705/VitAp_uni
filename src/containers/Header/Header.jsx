import Navbar from "../../components/Navbar/Navbar";
import "./header.css";

const Header = () => {
    return (
        <>
            <Navbar />
            <div className="uni_header">
                <div className="uni_header_text">
                    
                </div> 
                <div className="uni_explore" id="explore">
                    <a href="#about">Explore VIT-AP</a>
                </div>
            </div>

            {
                document.addEventListener('scroll', () => {
                    const header = document.querySelector("#explore");
                    if (window.scrollY > 0) {
                        header.classList.add("scroll");
                    }
                    else {
                        header.classList.remove("scroll");
                    }
                })
            }
        </>
    )
}

export default Header
