import React from 'react';

export default function MemeForm() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: 'https://i.imgflip.com/1bij.jpg',
    });
    const [allMemes, setAllMemes] = React.useState([]);

    React.useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes");
            const memesData = await res.json();
            setAllMemes(memesData.data.memes);
        }

        getMemes();
    }, []);

    function getMemeImage() {
        const randomNum = Math.floor(Math.random() * allMemes.length);
        const url = allMemes[randomNum].url;

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
                <img src={meme.randomImage} alt={allMemes.name} />
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}