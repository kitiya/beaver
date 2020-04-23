import React, {  } from 'react';

const sectionStyle = {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'flex-start',
    // flexDirection: 'column',
}

const largetTextStyle = {
    fontSize: '1.5em',
}

const borderBottomStyle = {
    borderBottom: '2px double #6c757d',
}

const About = () => {
    // const smoothScroll = (targetElement, duration) => {
    //     let target = document.querySelector(targetElement);
    //     let targetPosition = target.getBoundingClientRect().top;
    //     let startPosition = Window.pageYOffset;
    //     console.log(startPosition);
    // }
    // useEffect(() => {
    //     smoothScroll('#topicsSection', 1000);
    // });
    

    return (
        <div className="bg-light">
            <section id="overviewSection" className="container-fluid bg-light py-3" style={sectionStyle}>
                <div className="container text-dark w-75 mt-5">
                    <h3 className="text-center py-1 text-info" style={{...largetTextStyle, ...borderBottomStyle}}>Project Overview</h3>
                    <div className="pl-5">
                        <h5 className="text-info mt-4" style={largetTextStyle}>Objective</h5>
                        <ul>
                            <li style={largetTextStyle}>search for activities, classes, and things to do for kids</li>
                        </ul>                    
                        <h5 className="text-info mt-5" style={largetTextStyle}>System Design: Three-tier architecture</h5>
                        <ul>
                            <li style={largetTextStyle}>Application Layer: Spring Boot</li>                        
                            <li style={largetTextStyle}>Data Layer: MySQL</li>
                            <li style={largetTextStyle}>Presentation Layer: React, Bootstrap</li>
                        </ul>
                    </div>
                </div> 
            </section>
            <section id="topicsSection" className="container-fluid bg-dark py-3" style={sectionStyle}>
                <div className="container text-light w-75 mt-5">
                    <div className="pl-5">
                        <h3 className="text-center py-1 text-warning" style={{...largetTextStyle, ...borderBottomStyle}}>
                            What I've learned...
                        </h3>
                        <ul className="ml-5 pl-5">
                            <li style={largetTextStyle}>Java</li>
                            <li style={largetTextStyle}>Spring Framework</li>
                            <li style={largetTextStyle}>MySQL</li> 
                            <li style={largetTextStyle}>HTML, CSS, Bootstrap</li>                       
                            <li style={largetTextStyle}>React, JavaScript</li>
                            <li style={largetTextStyle}>Tools: Git, NPM, Postman, MySQL Workbench, Flyway, etc</li>
                            <li style={largetTextStyle}>Building a full stack web application</li>
                        </ul>
                        <h3 className="text-center py-1 mt-5 text-warning" style={{...largetTextStyle, ...borderBottomStyle}}>
                            Challenges...
                        </h3>
                        <ul className="ml-5 pl-5">
                            <li style={largetTextStyle}>Learning new different technologies in a short peroid of time</li>
                            <li style={largetTextStyle}>Spring and MySQL</li>
                            <li style={largetTextStyle}>Special Data Types: DateTime, Enum</li>
                        </ul>
                    </div>
                </div> 
            </section>
            <section id="nextStepSection" className="container-fluid bg-white py-3" style={sectionStyle}>
                <div className="container text-dark w-50 mt-5">
                    <h3 className="text-center py-1 text-info mt-5" style={{...largetTextStyle, ...borderBottomStyle}}>Next Step...</h3>
                    <div className="pl-5 mt-3">
                        <ul>
                            <li style={largetTextStyle}>React in depth: redux, custom hooks, etc.</li>                        
                            <li style={largetTextStyle}>Utilizing Flyway for database version control</li>
                            <li style={largetTextStyle}>Code refactor</li>
                            <li style={largetTextStyle}>Form validations</li>
                            <li style={largetTextStyle}>Test</li>
                            <li style={largetTextStyle}>Advance search</li>
                            <li style={largetTextStyle}>Authentication and authorization</li>
                        </ul>
                    </div>
                </div> 
            </section>
        </div>
    );
}

export default About;