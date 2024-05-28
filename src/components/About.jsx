import React from "react";
import AboutImage from '../assets/images/about-img'

const About = () => {
    return (
        <>
            <section className="about" id="about">
                <h1 className="heading">
                    <span>About</span> Us
                </h1>
                <div className="row">
                    <div className="image">
                        <img src={AboutImage} alt="" />
                    </div>
                    <div className="content">
                        <h3>What Makes Our Food Special?</h3>
                        <p>Lorem Ipsum Dolor Sit Amet Consectetur
                            Adipisicing Elit. Voluptatibus Qui Ea Ullam,
                            Enim Tempora Ipsum Fuga Alias Quae Ratione A Officiis Id
                            Temporibus Autem? Quod Nemo Facilis Cupiditate. Ex, Vel?
                        </p>
                        <p>Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit.
                            Odit Amet Enim Quod Veritatis, Nihil Voluptas Culpa! Neque
                            Consectetur Obcaecati Sapiente?
                        </p>
                        <a href="#" className="btn">Learn More</a>
                    </div>
                </div>
            </section>
        </>
    )
}
export default About