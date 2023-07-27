import Article from "../../components/Article/Article"
import "./campus.css"

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
                <Article />
            </div>
            <div className="about_text_button">
                <button type="button">More about campus</button>
            </div>
        </div>
    )
}

export default Campus
