import React from "react";
import Map from '../assets/images/map.png'

const Contact = () => {
    return (
        <>
            <section className="contact" id="contact">
                <h1 className="heading"><span>Contact</span> Us</h1>
                <div className="row">
                    <iframe className="image"
                        src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d108062.42315099279!2d74.10218043806805!3d32.17860349111951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x391f2990f16e00d3%3A0x536682ff556300c8!2sMadina%20Flour%20Mills%2C%20Opposite%20S.I.%20E01%2C%20Grand%20Trunk%20Rd%2C%20Civil%20Lines%2C%20Gujranwala%2C%20Punjab!3m2!1d32.178664!2d74.1845756!5e0!3m2!1sen!2s!4v1716789367962!5m2!1sen!2s"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>

                    <form>
                        <h3>Get In Touch</h3>
                        <div className="inputBox">
                            <span className="fas fa-user"></span>
                            <input type="name" placeholder="name" />
                        </div>
                        <div className="inputBox">
                            <span className="fas fa-envelope"></span>
                            <input type="email" placeholder="email" />
                        </div>
                        <div className="inputBox">
                            <span className="fas fa-phone"></span>
                            <input type="number" placeholder="number" />
                        </div>
                        <input className="btn" type="submit" value='Contact Now' />
                    </form>

                    <div className="form">

                    </div>
                </div>
            </section>
        </>
    )
}
export default Contact