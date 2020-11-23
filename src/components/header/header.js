import './header.scss'
import {Button, Form, FormControl} from 'react-bootstrap';

function Header(){
    return(
            <div className="container">
                <div className="row justify-content-end">
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-md-6" />
                        <Button variant="outline-primary">Search</Button>
                    </Form>
                </div>
            </div>
    )
}
export default Header;