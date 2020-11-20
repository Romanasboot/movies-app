import './header.scss'
import {Row, Col, Button, ButtonGroup} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header(){
    return(
        <header>
            <div className="row">
                search
                
            </div>
            <Row>
                <Col md={{ span: 4, offset: 8 }}>
                <ButtonGroup className="mr-2">
                    <Button variant="secondary"><FontAwesomeIcon icon={'fa-bars'}/></Button>
                    <Button variant="secondary"><FontAwesomeIcon icon={'fa-trash'}/></Button>
                </ButtonGroup>
                </Col>
            </Row>
        </header>
    )
}
export default Header;