import './header.css';
import Weather from './Weather';

function Header() {
    return (
        <div className="header">
            <div className='title'>
                <h1>MINGHUA's project</h1>
                <h2>.log in to access</h2>
            </div>
            <div className='weath'>
                <Weather></Weather>
            </div>
        </div>
    )
}

export default Header;