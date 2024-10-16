import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@material-tailwind/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="homepage">
            <div className='contaienr'>
                <div className="myinfo">
                    <div>
                        <h1>Name’s Maruf Ahamed Prince</h1>
                        <p>Breaking Web Limits | Forging Ideas into Power</p>
                        <p>Ready to go Bankai? Let’s transform your vision into unstoppable reality.</p>

                        <div className="btns">
                            <Link to="/portfolio"><button className="primary_btn play_bankai">Portfolios</button></Link>
                            <a href="#" target='_blank'><button className="primary_btn btn_w_icon play_bankai"> <FontAwesomeIcon className='file_icon' icon={faFileAlt} /><span>See My CV</span></button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;