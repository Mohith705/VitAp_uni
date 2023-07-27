import "./athletics.css";
import athletics1 from "../../assets2/athletics1.jpg"
import athletics2 from "../../assets2/athletics2.jpg"
import athletics3 from "../../assets2/athletics3.jpg"

const Academics = () => {
    return (
        <div className="academics athletics">
            <section className="facilities">
                <h1 className="academics_heading">Athletics</h1>
                <p className="academics_info">Providing student-athletes the opportunity to achieve excellence both in competition and in the classroom</p>
                <div className="row">
                    <div className="facilities-col">
                        <img src={athletics3} alt="" />
                        <h3>Home of Champions</h3>
                        <p>VITAP’s Vitopia championships are the most for any university, a product of an unrivaled culture of excellence and continued support from the campus community</p>
                        <a href="#">Championships</a>
                    </div>
                    <div className="facilities-col">
                        <img src={athletics2} alt="" />
                        <h3>Olympic Excellence</h3>
                        <p>The Cardinal has produced at least one medalist in every sports event has competed since 2017, totaling medals from medalists</p>
                        <a href="#">Medals</a>
                    </div>
                    <div className="facilities-col">
                        <img src={athletics1} alt="" height={"260px"} />
                        <h3>Multidimensional Impact</h3>
                        <p>VIT-AP student-athletes have achieved local, national, and global impact through community involvement and advocacy</p>
                        <a href="#">Athlete Stories</a>
                    </div>
                </div>
                <div className="about_text_button">
                    <button type="button">More about athletics</button>
                </div>
            </section>
        </div>
    )
}

export default Academics