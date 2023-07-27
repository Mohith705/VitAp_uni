import "./admission.css";
import banner3 from "../../assets2/banner3.jpg"

const Admission = () => {
    return (
        <div className="admission">
            <div className="admission_heading">
                <h1>Admission</h1>
            </div>
            <div className="admission_info">
                Offering extraordinary freedom to explore, to collaborate, and to challenge yourself
            </div>
            <div className="admission_image">
                <img src={banner3} alt="admission" />
            </div>
            <div className="admission_desc">
                <div className="admission_desc_one">
                    <div className="admission_desc_one_heading">
                        <h1>Explore the possibilities of a VIT-AP education as you map out your college journey.</h1>
                    </div>
                    <div className="admission_desc_one_info">
                        <h3>We look for distinctive students who exhibit an abundance of energy and curiosity in their classes, activities, projects, research, and lives.</h3>
                    </div>
                </div>
                <div className="admission_desc_two">
                    <div className="admission_desc_two_heading">
                        <h1>VIT-AP meets the full financial need of every admitted undergrad who qualifies for assistance.</h1>
                    </div>
                    <div className="admission_desc_two_info">
                        <h3>Nearly 80% of undergrads receive some form of financial assistance through specific scholarships, excellence awards.</h3>
                    </div>
                </div>
            </div>
            <div className="admission_button">
                <button type="button">More about admission</button>
            </div>
        </div>
    )
}

export default Admission
