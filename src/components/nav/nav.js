import { Component } from 'react';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './nav.scss'

class Nav extends Component {
    render () {

        return(
            <Container>
            <nav className="navBar">
                <h2>React demo nav</h2>
                <ul>
                    <li><NavLink exact to="/">Pradinis</NavLink></li>
                    <li><NavLink to="/form/">Forma</NavLink></li>
                </ul>
           </nav>
            </Container>
        )
     }
}
export default Nav;