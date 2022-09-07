import './header.css';
import Weather from './Weather';

function Header() {
    return (
        <div className="header">
            <div className='title'>
                <h1>MINGHUA's project</h1>
                <p>log in to access</p>
            </div>
            <div className='weath'>
                <Weather></Weather>
            </div>
        </div>
    )
}

export default Header;