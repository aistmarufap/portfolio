import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className='aboutpage'>
            <div className="container">
                <div className="about_info">
                    <div className="about_texts">
                        <p>
                            Name's <i>Maruf Ahamed Prince</i>, and I'm here to break limits. Born and raised in Ashulia, Dhaka, I’m a skilled <i>MERN Stack Web Developer</i> armed with a diploma in Computer Technology.
                            <br /><br />
                            My weapon? JavaScript, React, and everything in between.I don’t just fight—I dominate. Every project I touch transforms into something sharper, stronger—like a final form.
                            <br /><br />
                            If you're ready to unleash the full power of your digital presence, let’s make it happen. Together, we won’t just succeed -- we’ll crush it. <i className='bankai play_bankai'>"Bankai!"</i>
                        </p>

                        <div className="about_btns">
                            <Link to="/portfolio"><button className="primary_btn play_bankai">Portfolios</button></Link>
                            <a href="#" target='_blank'><button className="primary_btn btn_w_icon play_bankai"> <FontAwesomeIcon className='file_icon' icon={faFileAlt} /><span>See My CV</span></button></a>
                        </div>
                    </div>
                    <div className="about_img">
                        <img src="./2.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;