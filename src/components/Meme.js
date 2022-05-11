import React from 'react';
import memesData from '../data';

export default function MemeForm() {
    const memes = memesData.data.memes;
    const randomImageUrl = memes[memes.length - 1].url;

    // const [memeImage, setMemeImage] = React.useState(randomImageUrl);
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: randomImageUrl,
    });
    // const [allMemeImages, setAllMemeImages] = React.useState(memesData);

    function getMemeImage() {
        const randomNum = Math.floor(Math.random() * memes.length);
        const url = memes[randomNum].url;

        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url,
        }));
    }

    function handleChange(event) {
        const {name, value} = event.target;
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main>
            <div className="meme-form">
                <div className="meme-input">
                    <input
                        type="text"
                        placeholder="top text"
                        name="topText"
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="bottomText"
                        placeholder="bottom text"
                        onChange={handleChange}
                    />
                </div>
                <button type="button" onClick={getMemeImage}>
                    <span>Get a new meme image</span>
                    <i className="fa-solid fa-image"></i>
                </button>
            </div>
            <div className="image-card">
                <img src={meme.randomImage} alt={memesData.data.name} />
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}