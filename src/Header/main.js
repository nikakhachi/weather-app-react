import './main.css';
import logo from './logo.png';
import {Link} from 'react-router-dom';

function Header(props){
    return(
        <div>
            <a href={window.location.origin} style={{textDecoration : 'none'}}>
                <header>
                    <img id='main-img' src={logo} alt='app logo'/>
                    <h1 id='title'>Weather Now</h1>
                </header>
            </a>
            <form>
                <input onChange={props.search} spellCheck="false" id='searchbox' type="text" placeholder="Enter city name"/>
                <Link to={`/${props.input}`}><button id='search-btn'><i className="fa fa-search" aria-hidden="true"></i></button></Link>
            </form>
        </div>
    )
}

export default Header;