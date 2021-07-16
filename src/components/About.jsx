import React from 'react'

const About = (props) => {
    return (
        <div id="about">
            <div className="about-image">
                <img src={props.image} alt="" />
            </div>
            <div className="about-text">
                <h2>{props.title}</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis nisi saepe architecto labore assumenda voluptas et ut sed autem, dicta, eos vitae omnis velit nesciunt mollitia laudantium est suscipit in accusantium consequuntur. Est sequi totam atque repellendus corrupti repudiandae accusantium.</p>
                <button>{props.button}</button>
            </div>
        </div>
    )
}

export default About;
