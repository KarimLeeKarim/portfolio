import React from 'react'
import Tittle from '../Components/Tittle'
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';
// import ServicesSection from '../Components/ServicesSection';
// import design from '../img/design.svg';
// import intelligence from '../img/intelligence.svg';
// import gamedev from '../img/game-dev.svg';

function AboutPage() {
    return (
        <div className="AboutPage">
            <Tittle title={'About Me'} span={'About Me'} />
            <ImageSection />
            <Tittle title={'My Skills'} span={'My Skills'} />
            <div className="skillsContainer">
                <SkillsSection skill={'HTML'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'CSS'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'SASS'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'Gulp'} progress={'60%'} width={'60%'} />
                <SkillsSection skill={'Bootstrap'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'jQuery'} progress={'40%'} width={'40%'} />
                <SkillsSection skill={'Javascript'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'React Js'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'Redux'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'Python'} progress={'20%'} width={'20%'} />
                <SkillsSection skill={'My SQL'} progress={'40%'} width={'40%'} />
                <SkillsSection skill={'Next.js'} progress={'40%'} width={'40%'} />
                <SkillsSection skill={'Material UI'} progress={'60%'} width={'60%'} />
            </div>

            {/* <Tittle title={'Services'} span={'Services'} />
            <div className="servives-container">
                <ServicesSection image={design} title={'Web design'} 
                text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                />
                <ServicesSection image={intelligence} title={'Artificial Intelligence'} 
                text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                />
                <ServicesSection image={gamedev} title={'Game Development'} 
                text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                />

                
            </div> */}

        </div>
    )
}

export default AboutPage;
