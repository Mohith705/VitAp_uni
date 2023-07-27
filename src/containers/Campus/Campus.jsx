import "./campus.css"
import vit1 from "../../assets2/news5.jpg"
import vit2 from "../../assets2/news4.jpg"
import vit3 from "../../assets2/news6.jpg"
import vit4 from "../../assets2/news3.jpeg"
import vit5 from "../../assets2/news2.jpg"
import vit6 from "../../assets2/news1.jpg"


const Campus = () => {
    return (
        <div className="campus">
            <div className="campus_heading">
                <h1>Campus News</h1>
            </div>
            <div className="campus_info">
                Stories about people, research, and innovation across the Farm
            </div>
            <div className="campus_article">
                <div className="article">
                    <div className="article-one">
                        <img src={vit1} alt="" />
                        <div className="content">
                            <h3>SCIENCE & TECHNOLOGY</h3>
                            <h4>VIT-AP University, Amaravati entered in to a Memorandum of Understanding (MoU)</h4>
                        </div>
                    </div>
                    <div className="article-two">
                        <img src={vit6} alt="" />
                        <div className="two_content">
                            <h3>UNIVERSITY AFFAIRS</h3>
                            <h4>VIT-AP School of Business (VSB) signs MoU ISDC, UK</h4>
                        </div>
                    </div>
                    <div className="article-two">
                        <img src={vit3} alt="" />
                        <div className="two_content">
                            <h3>SCIENCE & TECHNOLOGY</h3>
                            <h4>Distant wounds help planarians heal</h4>
                        </div>
                    </div>
                    <div className="article-two">
                        <img src={vit4} alt="" />
                        <div className="two_content">
                            <h3>SOCIAL SCIENCES</h3>
                            <h4>Sub-post office opened at VIT-AP varsity</h4>
                        </div>
                    </div>
                    <div className="article-two">
                        <img src={vit5} alt="" />
                        <div className="two_content">
                            <h3>SCIENCE & TECHNOLOGY</h3>
                            <h4>VIT-AP University Day celebrated in a grand manner</h4>
                        </div>
                    </div>
                    <div className="article-six">
                        <img src={vit2} alt="" />
                        <div className="content">
                            <h3>TEACHING & STUDENTS</h3>
                            <h4>How VIT-AP is reimagining the undergraduate experience</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about_text_button">
                <button type="button">More about campus</button>
            </div>
        </div>
    )
}

export default Campus
