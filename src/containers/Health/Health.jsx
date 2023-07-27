import "./Health.css";
import health2 from "../../assets2/hospital2.jpg"
import chemical from "../../assets2/chemical1.jpg"
import hospital from "../../assets2/hospital.jpg"

const Academics = () => {
    return (
        <div className="academics">
            <section className="facilities">
                <h1 className="academics_heading">Health Care</h1>
                <p className="academics_info">Advancing human health through innovative research, education, and care</p>
                <div className="row">
                    <div className="facilities-col">
                        <img src={chemical} alt="" height={"300px"}/>
                        <h3>VIT-AP Chemical Lab</h3>
                        <p>Leading a worldwide revolution in precision health through biomedical research, education, and clinical enterprises</p>
                        <a href="#">Stanford Medicine</a>
                    </div>
                    <div className="facilities-col">
                        <img src={health2} alt="" />
                        <h3>VIT-AP Health Care</h3>
                        <p>Unsurpassed opportunities to participate in the advancement of entire fields of knowledge</p>
                        <a href="#">VIT-AP Health care</a>
                    </div>
                    <div className="facilities-col">
                        <img src={hospital} alt="" />
                        <h3>VIT-AP Health</h3>
                        <p>The only health care network in the Bay Area – and one of the few in the country – exclusively dedicated to pediatric and obstetric care</p>
                        <a href="#">VIT-AP Childrens Health</a>
                    </div>
                </div>
                <div className="about_text_button">
                    <button type="button">More about health care</button>
                </div>
            </section>
        </div>
    )
}

export default Academics