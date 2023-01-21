import React, { useState, useRef, useEffect } from 'react'
import { fetchImage } from '../../services/fetch'
import HorizontalScrollbar from '../horizontalScrollbar/HorizontalScrollbar'
import NoImg from '../../assets/no-image-icon.png'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box';
import './Drawing.css'

const Drawing = () => {
    const [drawing, setDrawing] = useState('');
    const [userTyped, setUserTyped] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    const [numCards, setNumCards] = useState(4);
    const inputRef = useRef(null);

    const handleClick = () => {
        const user_chat = inputRef.current.value;
        inputRef.current.value = ''
        
        const fetchData = async (prompt) => {
            setUserTyped(true);
            const response = await fetchImage(prompt);
            setDrawing(response);
            setUserTyped(false);
        }
        
        fetchData(user_chat);
    }

    useEffect(() => {
        const updateWindowDimensions = () => {
            const newWidth = window.innerWidth;
            setWidth(newWidth);
        };

        window.addEventListener('resize', updateWindowDimensions);
        return () => window.removeEventListener("resize", updateWindowDimensions)
    }, []);

    useEffect(() => {
        const updatePostsPerPage = () => {
            if (width < 1080 && width > 769) {
                setNumCards(3)
            } else if (width < 769 && width > 500) {
                setNumCards(2)
            } else if (width < 500) {
                setNumCards(1)
            } else {
                setNumCards(4)
            }
        }
        updatePostsPerPage();
    }, [width]);

    return (
        <div className="drawing">
            <div className="chatroom-title">
                OpenAI Bot - DALL-E
                <span className="chatroom-desc">Dall-E allows you to create an original image given a text prompt</span>
            </div>
            <div className="drawing-container">
                <div className="input-field">
                    <input
                        type="text"
                        className="dalle-input"
                        ref={inputRef}
                        placeholder="An Impressionist oil painting of sunflowers in a purplse vase..."
                    />
                    <button className="dalle-btn" onClick={handleClick}>Generate</button>
                </div>
                <div className="styles-container">
                    <div className="styles">
                        <div className="styles-prompt">Generate Images with different styles:</div>
                        <div className="styles-title">
                            <div className="styles-title-wrapper">
                                <div className="styles-title-item">Photorealistic</div>
                                <div className="styles-title-item">Minimalistic</div>
                                <div className="styles-title-item">3D Illustration</div>
                                <div className="styles-title-item">Pencil Drawing</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="canvas">
                    <Box sx={ userTyped ? { display: 'flex', position: 'absolute'} : { display: 'none' }}>
                        <CircularProgress />
                    </Box>
                    <img src={NoImg} alt="ai drawing" className={drawing === '' ? "display" : "hide"} />
                    <img src={drawing} alt="ai drawing" className={drawing === '' ? "hide" : "display"} />
                </div>
            </div>

            <div className="gallery">
                <div className="gallery-title">
                    Explore Images made by Dall-E
                </div>
                <HorizontalScrollbar numCards={numCards} />
            </div>

        </div>
    )
}

export default Drawing