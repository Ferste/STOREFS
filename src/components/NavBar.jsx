import './NavBar.css'
import { Button } from './Button';
import {CarWidget} from './CarWidget';

export function NavBar (){
    return <nav className='navbar'>
        <h1>STOREFS</h1>
        <Button texto= "REMERAS"/>
        <Button texto= "BUZOS"/>
        <Button texto= "PANTALON"/>
        <Button texto= "CAMPERAS"/>
        <CarWidget />
        </nav> ;
}
