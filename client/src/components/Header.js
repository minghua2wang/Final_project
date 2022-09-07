import './header.css';
import Weather from './Weather';
import pikachu from './pikachu.gif';
import train from './train.gif';
import city from './city.gif';

function Header() {
    return (
        <div className="header">
            <img className='pikachu' src={pikachu} />
            <div className='title'>
                <h1>RANDOM WEBSITE</h1>
                <h2>Minghua'S PROJECT - LOGIN WITH GOOGLE</h2>
            </div>
            <div className='weath'>
                <Weather></Weather>
            </div>
        </div>
    )
}

export default Header;