import logo from '../images/logo.jpeg';

export default function Header() {
    return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h3>Meme Generator</h3>
        </header>
    )
}