import React from 'react'
import ContactItem from '../Components/ContactItem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';
import Tittle from '../Components/Tittle';

function ContactPage() {
    return (
        <div>
            <div className="title">
                <Tittle title={'About Me'} span={'About Me'} />
            </div>
            <div className="ContactPage">
                <div className="map-sect">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10216.61661157071!2d49.84061226074608!3d40.42173575622972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403087de35131075%3A0xfba93c6a0e0a57df!2z0YHRgi4g0JDQt9Cw0LTQu9GL0LMg0J_RgNC-0YHQv9C10LrRgtC4!5e0!3m2!1sru!2s!4v1619089856183!5m2!1sru!2s" width="600" height="450" styles="border:0;" allowfullscreen="" loading="lazy"></iframe>
                </div>
                <div className="contact-sect">
                    <ContactItem icon={phone} text1={'+99450 605-01-94'} title={'Phone'} />
                    <ContactItem icon={email} text1={'kerimlikerim24@gmail.com'} title={'Email'} />
                    <ContactItem icon={location} text1={'32 Azadliq St, AZ1001 Baku'} text2={'Azerbaijan'} title={'Address'} />
                </div>
            </div>
        </div>
    )
}

export default ContactPage;
