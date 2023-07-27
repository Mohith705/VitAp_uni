import "./banner.css"
import bannerimg from "../../assets2/banner.jpg"

const Banner = () => {
    return (
        <div className="bannerone">
            <img src={bannerimg} alt="" />
            <div className="bannerone_info">
                <div className="bannerone_desc">
                    <p>“Getting into VIT-AP was just such an amazing shock. But once I got here and became so involved, got to meet all these wonderful people, I feel like I fit right in — and like I belonged here the whole time.”</p>
                </div>
                <div className="bannerone_title">
                    <h4>Meet Bayya Mohith</h4>
                    <h4>Class Of 2021</h4>
                    <a href="#">More</a>
                </div>
            </div>
        </div>
    )
}

export default Banner
