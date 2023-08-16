import './NavBar.css'
import { Button } from './Button';
import {CarWidget} from './CarWidget';
import { Link } from 'react-router-dom';

export function NavBar (){
    return <nav className='navbar'>
        <Link to = "/">
        <h1>STOREFS</h1>
        </Link>
        <Link to="/categoria/Remera"><Button texto= "REMERAS"/></Link>
        <Link to="/categoria/Buzo"><Button texto= "BUZOS"/></Link>
        <Link to="/categoria/Pantalon"><Button texto= "PANTALON"/></Link>
        <Link to="/categoria/Campera"><Button texto= "CAMPERAS"/></Link>
        <CarWidget />
        </nav> ;
}
