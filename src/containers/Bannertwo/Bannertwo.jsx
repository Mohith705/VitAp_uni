import "./bannertwo.css"
import bannerimg from "../../assets2/banner2.jpg"

const Bannertwo = () => {
    return (
        <div>
            <div className="bannertwo">
                <img src={bannerimg} alt="" />
                <div className="banner_info">
                    <div className="banner_desc">
                        <p>“I think what makes VIT-AP, VIT-AP is its intellectual vitality and irreverence. Everyone has a different flavor of intelligence, but they’re also so wacky, so wild.”</p>
                    </div>
                    <div className="banner_title">
                        <h4>Meet Mohith</h4>
                        <h5>Class of 2023</h5>
                        <a href="#" className="link">More</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bannertwo
