import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Dalle.css'
import image1 from '../../assets/dalle1.jpg'
import image2 from '../../assets/dalle2.jpg'
import image3 from '../../assets/dalle3.jpg'
import image4 from '../../assets/dalle4.jpg'
import image5 from '../../assets/dalle5.jpg'
import image6 from '../../assets/dalle6.jpg'
import image7 from '../../assets/dalle7.jpg'
import image8 from '../../assets/dalle8.jpg'
import image9 from '../../assets/dalle9.jpg'

const Dalle = () => {
    const styles = {
        first: {
            first: "in a photorealistic style",
            second: "in the style of Andy Warhol",
            third: "as a pencil drawing",
        },
        second: {
            first: "in a vaporwave style",
            second: "as pixel art",
            third: "in a photorealistic style",
        },
        third: {
            first: "as a children's book illustration",
            second: "in a minimalist style",
            third: "in a watercolor style",
        }
    }

    const [style, setStyle] = useState(styles.first);
    const [currentStyle, setCurrentStyle] = useState(1);
    const [currentAttribute, setCurrentAttribute] = useState(1);
    const [currentImage, setCurrentImage] = useState(image1);

    const handleClick = (number) => {
        switch (number) {
            case (1):
                setStyle(styles.first);
                setCurrentStyle(1);
                setCurrentAttribute(1);
                break;
            case (2):
                setStyle(styles.second);
                setCurrentStyle(2);
                setCurrentAttribute(1);
                break;
            case (3):
                setStyle(styles.third);
                setCurrentStyle(3);
                setCurrentAttribute(1);
                break;
            default:
                setStyle(styles.first);
                setCurrentStyle(1);
                setCurrentAttribute(1);
                break;
        }
    }

    const chooseAttribute = (number) => {
        switch (number) {
            case (1):
                setCurrentAttribute(1);
                break;
            case (2):
                setCurrentAttribute(2);
                break;
            case (3):
                setCurrentAttribute(3);
                break;
            default:
                setCurrentAttribute(1);
                break;
        }
    }

    useEffect(() => {
        if (currentStyle === 1) {
            if (currentAttribute === 1) {
                setCurrentImage(image1);
            } else if (currentAttribute === 2) {
                setCurrentImage(image2);
            } else {
                setCurrentImage(image3);
            }
        } else if (currentStyle === 2) {
            if (currentAttribute === 1) {
                setCurrentImage(image4);
            } else if (currentAttribute === 2) {
                setCurrentImage(image5);
            } else {
                setCurrentImage(image6);
            }
        } else {
            if (currentAttribute === 1) {
                setCurrentImage(image7);
            } else if (currentAttribute === 2) {
                setCurrentImage(image8);
            } else {
                setCurrentImage(image9);
            }
        }
    }, [currentStyle, currentAttribute])

    return (
        <div className="dalle-section-container">
            <div className="dalle-section">
                <div className="dalle-section-title">
                    DALL-E creates orignial, realistic images and art from a text description. It can combine concepts, attributes, and styles.
                </div>
                <div className="dalle-section-gallery">
                    <div className="text-description">
                        <div className="margin-bottom-10px">TEXT DESCRIPTION</div>
                        <div>
                            <span className="margin-right-10px" style={{ color: 'black'}}>An astronaut</span>
                            <br /><br />
                        </div>
                        <div>
                            <span
                                className="margin-right-10px"
                                onClick={() => handleClick(1)}
                                style={currentStyle === 1 ? { color: 'black' } : {}}
                            >
                                riding a horse
                            </span>
                            <span
                                className="margin-right-10px"
                                onClick={() => handleClick(2)}
                                style={currentStyle === 2 ? { color: 'black' } : {}}
                            >
                                lounging in a tropical resort in space
                            </span>
                            <span
                                className="margin-right-10px"
                                onClick={() => handleClick(3)}
                                style={currentStyle === 3 ? { color: 'black' } : {}}
                            >
                                playing basketball with cats in space
                            </span>
                            <br /><br />
                            
                        </div>
                        <div>
                            <span
                                className="margin-right-10px"
                                onClick={() => chooseAttribute(1)}
                                style={currentAttribute === 1 ? { color: 'black' } : {}}
                            >
                                {style.first}
                            </span>
                            <span
                                className="margin-right-10px"
                                onClick={() => chooseAttribute(2)}
                                style={currentAttribute === 2 ? { color: 'black' } : {}}
                            >
                                {style.second}
                            </span>
                            <span
                                className="margin-right-10px"
                                onClick={() => chooseAttribute(3)}
                                style={currentAttribute === 3 ? { color: 'black' } : {}}
                            >
                                {style.third}
                            </span>
                            <br /><br />
                        </div>
                        <button className="btn-primary" style={{ margin: '0'}}>
                            <Link to="/dall-e" style={{ color: 'white'}}>Generate Image Now</Link>
                        </button>
                    </div>
                    <div className="dalle-gallery-image-container">
                        <div className="margin-bottom-10px">DALL-E 2</div>
                        <div className="dalle-gallery-image">
                            <img src={currentImage} alt="image-gallery" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dalle