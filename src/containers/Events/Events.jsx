import "./Events.css"
import event1 from "../../assets/event1.jpg"
import event2 from "../../assets/event2.jpg"
import event3 from "../../assets/event3.jpg"
import event4 from "../../assets/event4.jpg"

const Events = () => {
    return (
        <div className="events">
            <div className="events_heading">
                <h1>Upcoming Events</h1>
            </div>
            <div className="events_cards events_section">
                <div className="events_card">
                    <img src={event1} alt="" />
                    <div className="event_data">
                        <h5>JUL</h5>
                        <h5>25</h5>
                    </div>
                    <div className="event_info">
                        <h4>CLASS/SEMINAR</h4>
                        <p>Clinicians and Firearms: A Curriculum on Firearm Injury Prevention in Medical Practice</p>
                    </div>
                </div>
                <div className="events_card">
                    <img src={event2} alt="" />
                    <div className="event_data">
                        <h5>JUL</h5>
                        <h5>25</h5>
                    </div>
                    <div className="event_info">
                        <h4>EXHIBITION</h4>
                        <p>Mind Readers: artists books by Gail Wight</p>
                    </div>
                </div>

                <div className="events_card">
                    <img src={event3} alt="" />
                    <div className="event_data">
                        <h5>JUL</h5>
                        <h5>27</h5>
                    </div>
                    <div className="event_info">
                        <h4>FILM/SCREENING</h4>
                        <p>Camera as Witness Presents Documentary VIOLINS OF HOPE - STRINGS OF THE HOLOCAUST</p>
                    </div>
                </div>
                <div className="events_card">
                    <img src={event4} alt="" />
                    <div className="event_data">
                        <h5>JUL</h5>
                        <h5>27</h5>
                    </div>
                    <div className="event_info">
                        <h4>LECTURE/PRESENTATION/TALK</h4>
                        <p>SLAC Public Lecture - Cosmic Shadow Theater: Casting Light On Galaxies</p>
                    </div>
                </div>
            </div>
            <div className="events_button">
                <button type="button">More events</button>
            </div>
        </div>
    )
}

export default Events
