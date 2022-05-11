import React from 'react';
import memesData from '../data';

export default function MemeForm() {
    const memes = memesData.data.memes;
    const randomImageUrl = memes[memes.length - 1].url;

    // const [memeImage, setMemeImage] = React.useState(randomImageUrl);
    const [meme, setMeme] = React.useState({
        topText: "top",
        bottomText: "bottom",
        randomImage: randomImageUrl,
    });
    const [allMemeImages, setAllMemeImages] = React.useState(memesData);

    function getMemeImage() {
        const randomNum = Math.floor(Math.random() * memes.length);
        const url = memes[randomNum].url;

        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url,
        }));
    }

    return (
        <main>
            <div className="meme-form">
                <div className="meme-input">
                    <input type="text" name="top" placeholder="top text" />
                    <input type="text" name="down" placeholder="bottom text" />
                </div>
                <button type="button" onClick={getMemeImage}>
                    <span>Get a new meme image</span>
                    <i className="fa-solid fa-image"></i>
                </button>
            </div>
            <div className="image-card">
                <img src={meme.randomImage} alt={memesData.data.name} />
            </div>
        </main>
    )
}