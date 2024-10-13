import React from "react";
import { useNavigate } from 'react-router-dom';
import { Animate } from 'react-simple-animate';
import './style.scss'

const Home = () => {

    const navigate = useNavigate();
    console.log(navigate);

    const handleNavigateToContactMPage = () => {

        navigate('/contact');

    }

    return (
        <section id="home" className="home">
            <div className="home__text-wrapper">
                <h1>
                    Hello, I'm Sovannaphom
                    <br />
                    Front end developer
                </h1>
            </div>
            <Animate
            play
            duration={1.5}
            delay={0.8}
            start={{transform: 'translateY(550px)'}}
            end={{transform: 'translateX(0px)'}}
            >
                <div className="home__contact-me">
                    <button onClick={handleNavigateToContactMPage}>Hire Me</button>
                </div>
            </Animate>
        </section>
    )
}

export default Home;