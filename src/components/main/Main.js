import React from 'react'
import Typewriter from "typewriter-effect"
import './Main.css'

const Main = () => {
    return (
        <div className="main-container">
            <div className="main">
                <div className="main-title">
                    Use OpenAI Model
                    <Typewriter
                        options={{
                            autoStart: true,
                            loop: true
                        }}
                        onInit={(typewriter) => {
                            typewriter.typeString("Codex")
                                .pauseFor(2500)
                                .deleteAll()
                                .typeString("Dall-E")
                                .pauseFor(2500)
                                .deleteAll()
                                .typeString("Davinci-003")
                                .pauseFor(2500)
                                .deleteAll()
                                .start();
                        }}
                    />
                    to perform a wide variety of tasks
                </div>
                <button className="btn-primary">Get Started</button>
                <button className="btn-secondary">Read Documentation</button>
            </div>
        </div>
    )
}

export default Main