import React from 'react';
import about from '../img/portImages/KarimLee.jpg';

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt="" height="150px"/>
            </div>
            <div className="about-info">
                <h4>I am<span> Karimli Karim</span></h4>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name : Karimli Karim</p>
                        <p>Age : 26</p>
                        <p>Nationality : Azerbaijan</p>
                        <p>Languages : Azerbaijan, Russian, English, Turkish</p>
                        <p className="tech">Education : Dmitry Mendeleev University of Chemical Technology of Russia. Specialty- Service & Tourism</p>
                        <p className="tech2">Tech Education : Tech Academy Baku</p>

                    </div>
                </div>
                {/* <a href="./Karim_Karimli_CV.PDF" className="btn" download>Download Cv</a> */}
            </div>
        </div>
    )
}

export default ImageSection;
