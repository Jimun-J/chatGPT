import React, { useEffect, useRef, useState } from 'react'
import { createCompletion, createCodeCompletion } from '../../services/fetch'
import Bot from '../../assets/bot.svg'
import User from '../../assets/user.svg'
import Refresh from '../../assets/refresh.png'
import './Chatroom.css'

const Chatroom = ({ title, title_desc }) => {
    const [elements, setElements] = useState([]);
    const [writing, setWriting] = useState('');
    const [userTyped, setUserTyped] = useState(false);
    const inputRef = useRef(null);
    const messagesEndRef = useRef(null);

    // function that scrolls down to the latest message
    useEffect(() => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }, [elements]);

    // function that creates a message of what user just typed
    const createUserDiv = (value) => {
        let uniqueId = "user" + new Date().getTime();
        return (
            <div className="chat" key={uniqueId}>
                <div className="profile">
                    <img src={User} alt="user" />
                </div>
                <div className="message">{value}</div>
            </div>
        );
    }
    
    // function that creates a message from ai bot
    const createAiDiv = (response) => {
        let uniqueId = "ai" + new Date().getTime();
        let trimmedResponse = response.trimStart();
        return (
            <div className="chat ai" key={uniqueId}>
                <div className="profile ai">
                    <img src={Bot} alt="bot" />
                </div>
                <div className="message">{trimmedResponse}</div>
            </div>
        );
    }

    // function that indicates ai is typing
    useEffect(() => {
        const loadInterval = setInterval(() => {
            if (userTyped) {
                switch(writing) {
                    case '':
                        setWriting('.');
                        break;
                    case '.':
                        setWriting('..');
                        break;
                    case '..':
                        setWriting('...');
                        break;
                    case '...':
                        setWriting('');
                        break;
                    default:
                        setWriting('');
                        break;
                }
            }
        }, 300)
        return () => clearInterval(loadInterval);
    }, [userTyped, writing])
    
    // function that fetches data from OpenAI API
    const fetchData = async () => {
        let response;
        if (title === 'Davinci') {
            response = await createCompletion(inputRef.current.value);
        } else if (title === 'Codex') {
            response = await createCodeCompletion(inputRef.current.value);
        }
        const ai_chat = createAiDiv(response);
        setUserTyped(false);
        setElements(elements => [...elements, ai_chat]);
        return response;
    }

    // function that renders messages created on the chatroom
    const handleClick = () => {
        // user message to chatroom
        const user_chat = createUserDiv(inputRef.current.value);
        setElements(elements => [...elements, user_chat]);

        // indicating ai is writing something
        setUserTyped(true);

        //after ai responded with an answer
        fetchData();
        inputRef.current.value = '';
    }

    const refresh = () => {
        setElements([]);
    }

    return (
        <div className="chatroom">
            <div className="chatroom-title">
                OpenAI Bot - {title}
                <span className="chatroom-desc">{title_desc}</span>
            </div>
            <div className="chatroom-container">
                {elements}
                <div className={ userTyped ? "chat ai" : "chat ai no-display"}>
                    <div className="profile ai">
                        <img src={Bot} alt="bot" />
                    </div>
                    <div className="message">{writing}</div>
                </div>
                <div ref={messagesEndRef}></div>
            </div>
            <div className="input-text" cols="1" rows="1" action="">
                <div className="text-input">
                    <textarea ref={inputRef}></textarea>
                    <button className="btn-send" onClick={handleClick}>submit</button>
                    <button className="btn-refresh" onClick={refresh}><img src={Refresh} alt="refresh-icon"/></button>
                </div>
            </div>
        </div>
    )
}

export default Chatroom